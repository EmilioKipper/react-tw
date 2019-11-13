import React, { Component } from 'react';
//Component não controlado (CNC)(pelo react)
class MyForm2 extends Component{

  constructor(props){
    super(props);
    // é criada uma referencia para q um CNC se comunique com o react
    this.inputName = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      list: []
    }
  }

  handleSubmit(event){
    console.log('======this.inputName: ', this.inputName)
    event.preventDefault();//evita o comportamento padrão de formulario de enviar pra outra pagina
    fetch(`https://api.github.com/search/repositories?q=${this.inputName.current.value}`)
      .then(reponse => reponse.json())
      .then(data => {
        // console.log('======data: ', data)
        this.setState({
          list: data.items
        })
      })
  }

  render(){
    const {state} = this;
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' ref={this.inputName} />
        </label>
        <input type='submit' value='Enviar' />
        <ul>
          {
            state.list.map(item => <li>{item.full_name}</li>)
          }
        </ul>
      </form>
    )
  }
}

export default MyForm2;