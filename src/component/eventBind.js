import React,{Component} from "react";

class eventBind extends Component{
    constructor(Props)
    {
        super(Props)
       
        this.state({
         Message:'vidya'
        })
       // this.changeMessage=this.changeMessage.bind(this)
    }
    changeMessage =()=>
    {
        this.setState({
          Message:'subscribed'
        })
    }
    render()
    {
        return(
            <div>
         <h1>{this.state.Message}</h1>
         <button onClick={this.changeMessage}>subscribe</button>       
            </div>
        )
        
    }
}
export default eventBind