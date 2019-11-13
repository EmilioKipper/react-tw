import React, { Component } from 'react';
//---introdução
// import TextCounter from './components/TextCounter';
// import MyForm from './MyForm'
// import MyForm2 from './MyForm2'
//--dominando componentes
import MeuComponente from './components/MeuComponenete'
import Time from './components/Time'
import MyButton from './components/MyButton'
import PeopleList from './components/PeopleList'
import ClickList from './components/ClickList';
import ClickListItem from './components/ClickListItem';
import MyVideo from './components/MyVideo';
import Css from './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.item1 = React.createRef()
    this.item2 = React.createRef()
    this.state = {
      selectedItem: this.item1
    }
    this.toggleItem = this.toggleItem.bind(this)
  }

  toggleItem(){
    this.setState(({selectedItem}) => {
      return {
        selectedItem: (selectedItem === this.item1 ? this.item2 : this.item1)
      }
    })
  }

  render(){
    const dados = {
      nome: 'maria' ,
      sobrenome: 'souz', 
      idade: '3'
    }
    return (
      <div className='App'> 
        <MyButton />
        <MeuComponente {...dados} />
        <PeopleList />
        -----
        <div>
        
          <ul>
            <li ref={this.item1}>
            <Time container={this.state.selectedItem.current} />
              
            </li>
            <li ref={this.item2}>
              
            </li>
            </ul>
            
          <button onClick={this.toggleItem}>Toggle</button>
          </div>

        <MyVideo src='https://storage.coverr.co/videos/Fisherman%20On%20Duty%20?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTY2ODM5OTA3LCJleHAiOjE1NjY4NDM1MDd9.ms22LPRwZseRAI1X6VNz-6IsZVhmHtBy5Y2Op_HZ5_Q' />
        <ClickList>
          <ClickListItem></ClickListItem>
          <ClickListItem></ClickListItem>
          <ClickListItem></ClickListItem>
        </ClickList>
      </div>
    );
  }
}

export default App;
