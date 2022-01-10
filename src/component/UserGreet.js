import React,{Component} from "react";

class UserGreet extends Component{
    constructor(Props)
    {
        super(Props)
       
        this.state({
         isLoggedIn:true
        })
       
    }
    
    render()
    {
    //    let Message
    //    if(this.state.isLoggedIn)
    //    {
    //        Message=<div>welcom aishwarya</div>
    //    }
    //    else{
    //        Message=<div>welcome</div>
    //    }
    //     return <div>{Message}</div>
    // }
return this.state.isLoggedIn ?(
         <div>welcome aishwarya </div> ):(<div>welcome </div>)
        }
    }
export default UserGreet