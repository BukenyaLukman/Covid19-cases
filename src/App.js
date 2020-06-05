import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Lukman",

    }
  }

  
  
  render(){
    return(
      <div className="App">
        {this.state.name}
        <button onClick={() => this.setState({name:'Bukenya'})}>Chanage Name</button>
      </div>
    )
  }
}

export default App;
