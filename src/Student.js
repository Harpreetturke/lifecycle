import React from "react";

class Student extends React.Component{

    componentWillUnmount(){
        alert('Student Component removed!')
    }
    render(){
        return(
            <>
            <h2>This is sTudent component</h2>
            </>
        )
    }
};
export default Student;