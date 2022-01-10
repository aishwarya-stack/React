import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Student from './component/Student';
import Hello from './component/Hello';
import Example from './component/Example';
import Message from './component/Message';
import Change from './component/Change';
import UserGreet from './component/UserGreet';
import NameList from './component/NameList';
class App extends Component{
  render(){
    return(
      <div className='App'>
        <NameList/>
       {/* <Greet name="Bruce" heroName="superman"/>
       <Greet name="Diana" heroName="wonderwomen"/>
       <Student />
       <Welcome name="Bruce" heroName="superman"/>
       <Welcome name="Diana" heroName="wonderwomen"/>
       <Hello/>
       <Message/>
       <Change/>
       <Example name="Vidya"/> */}
       
      </div>
    );
  }
}



export default App;


