import React, { Component } from 'react';

/* function MeuComponente(){
  return <h1>TreinaWeb</h1>
} */
//stateless components

// const MeuComponente = () => <h1>TreinaWeb</h1>

class MeuComponente extends Component{
  render(){
    // PROPRIEDADES NUNCA DEVEM SER ALTERADAS
    const {props} = this
    return(
      <ul>
        <li>Nome: {props.nome}</li>
        <li>Sobrenome: {props.sobrenome}</li>
        <li>Idade: {props.idade}</li>
      </ul>
    )
  }
}

/* export const MeusComponentes = {
  TreinaWeb: function(props){
    return <h1>ola {props.nome}</h1>
  }
}
 */
export default MeuComponente