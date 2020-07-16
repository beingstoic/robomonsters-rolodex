import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list.component/card-list.component';
import {Search} from './components/search-component/search'

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }
  handleChanage = (e) => {
   return  e=>this.setState({searchField :e.target.value})
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className='App'>
        <Search placeholder='Enter text here' handleChanage={this.handleChanage()}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
