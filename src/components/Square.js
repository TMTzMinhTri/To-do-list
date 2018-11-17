import React, { Component } from 'react';

class Square extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }
    render(){
        const  { value } = this.state;
        return(
            <button className= 'btn btn-danger' onClick={() => this.setState({value: 'cặc'})}>
                {value};
            </button>
        );
    }
}

export default Square