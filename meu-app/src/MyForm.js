import React, { Component } from 'react';

class MyForm extends Component{

  constructor(props){
    super(props);

    this.state = {
      name: '',
      message: '',
      fruit: 'orange'
    }

    this.fruits = [
      {'name': 'Apple', 'value': 'apple'},
      {'name': 'Banana', 'value': 'banana'},
      {'name': 'Orange', 'value': 'orange'}
    ]

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const target = event.target,
      value = target.type === 'checkbox' ? target.checked : target.value,
      name = target.name;
    // name entre coxetes pra ser igual ao da variavel e nao o name do atributo input
    this.setState({
      [name]: value
    })
  }

  render(){
    const {state} = this;
    return(
      <form>
        <label>
          Name:
          <input type='text' name='name' value={state.name} onChange={this.handleChange}/> {state.name}
        </label>
        <label>
          Fruit:
          <select value={state.fruit} multiple={false} name='fruit' onChange={this.handleChange}>
            {
              this.fruits.map(fruit => <option value={fruit.value}>{fruit.name}</option>)
            }
          </select>
        </label>
        <label>
          Message:
          <textarea value={state.message} name='message' onChange={this.handleChange}/>
        </label>
        <input type='submit' value='Enviar'/>
      </form>
    )
  }
}

export default MyForm;