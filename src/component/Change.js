import React,{Component} from "react";

class Change extends Component{
    constructor()
    {
        super()
        this.state={
            Message:'hello'
        }
    }
    changeMessage()
    {
        this.setState({
          Message:'hi'
        })
    }
    render()
    {
        return(
            <div>
         <h1>{this.state.Message}</h1>
         <button onClick={()=>this.changeMessage()}>click</button>       
            </div>
        )
        
    }
}
export default Change