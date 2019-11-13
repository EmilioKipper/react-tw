import React, { Component } from 'react'

const myList = [
  {id: 1,nome: 'João', idade: 23 },
  {id: 2,nome: 'Maria', idade: 25 },
  {id: 3,nome: 'Paulo', idade: 32 },
  {id: 4,nome: 'Bruna', idade: 20 }
]

class componentName extends Component {
  sayMyName(person){
    alert(person.nome)
  }
  render() {
    return (
      <ul>
      {
        myList.map(person => 
          <li onClick={this.sayMyName.bind(this, person)} key={person.id}>{person.nome} - {person.idade} anos</li>
        )
      }
      </ul>
    )
  }
}

export default componentName
