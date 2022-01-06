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
       <Greet name="Bruce" heroName="superman"/>
       <Greet name="Diana" heroName="wonderwomen"/>
       <Student />
       <Welcome name="Bruce" heroName="superman"/>
       <Welcome name="Diana" heroName="wonderwomen"/>
       <Hello/>
      </div>
    );
  }
}



export default App;


