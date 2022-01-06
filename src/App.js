import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Student from './component/Student';
import Hello from './component/Hello';
class App extends Component{
  render(){
    return(
      <div className='App'>
       <Greet/>
       <Student/>
       <Welcome/>
       <Hello/>
      </div>
    );
  }
}



export default App;


