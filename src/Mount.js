import React from "react";

class Mount extends React.Component{

    constructor(){
        super();
        this.state={name:"preet"}
    }
    componentDidMount(){
setTimeout(()=>{
    this.setState( {name:'Harpreet'})
},3000)

console.log('Run componentDidMount')
    }
    render(){
        return(<>
        <h1 style={{display:'flex' ,justifyContent:'center'}}>This is componentDidMount</h1>
        <h2 style={{display:'flex' ,justifyContent:'center'}}>My Name is {this.state.name}</h2>
        </>)
    }
}
export default Mount;