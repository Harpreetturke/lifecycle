import React from "react";

class DidUpdate extends React.Component{
    constructor(){
        super()

        this.state={name:'preet'}
    }
    componentDidUpdate(){
        setTimeout(()=>{
            alert('I am Execute Whenever a State Change');
        },1000);
    }
    render(){
        return(<>
        <h1 style={{display:'flex',justifyContent:'center'}}>This is componentDidUpdate</h1>
        <h2 style={{display:'flex',justifyContent:'center'}}>My name is {this.state.name}</h2>
       <div style={{display:'flex',justifyContent:'center'}}>
        <button style={{height:'30px'}} onClick={()=>this.setState({name:'harpreet'})}>UPDATE</button>
       <h2>{this.state.afterUpdate}</h2>
       </div>
        </>)
    }
}
export default DidUpdate;