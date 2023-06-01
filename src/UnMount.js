import React from "react";

import Student from "./Student";

class UnMount extends React.Component{

constructor(){

    super();
    
 this.state={show:true}
}

render(){
    return(
        <>
        <h1 style={{display:'flex',justifyContent:'center'}}>This is UnMount</h1>
        <div style={{display:'flex',justifyContent:'center'}}>
        {
            this.state.show ? <Student/> :<h2>student component Removed!</h2>
        }
        </div>
       <div style={{display:'flex',justifyContent:'center'}}>
        <button onClick={()=>this.setState({show:!this.state.show})} style={{height:"30px"}}>Toggle</button>
       </div>
        </>
    )
}
};
export default UnMount;