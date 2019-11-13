import React, { Component } from 'react';

// estado é interno do componente
class TextCounter extends Component{

  static defaultProps = {
    limit: 15
  }

  constructor(props){
    super(props); // no caso a classe pai é component do react
    this.state = {
      totalChars: 0,
      text: ''
    }
    // botar os bind aqui pra não botar no component é boa prática
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    //event é passado por paramentro pois a função é disparada em evento (onChange)
    const element = event.target; //textarea
    const text = element.value; 
// no obj do set state text n precisa de chave se a chave é uma const de mesmo nome
    if(text.length <= this.props.limit){
      this.setState({
        totalChars: text.length,
        text
      })
    }
  }

  render(){
    const {state, props} = this;
    // state = this.state;
    return(
    <div>
      <h1>Meu Contador</h1>
      <textarea onChange={this.handleChange} value={state.text}/>
      <div>
        <strong>Total: </strong> { state.totalChars } / { props.limit }
      </div>
    </div>
    )
  }
}

export default TextCounter;