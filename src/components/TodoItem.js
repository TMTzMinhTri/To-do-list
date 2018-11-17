import React, { Component } from 'react';
// import './TodoItem.css';

class TodoItem extends Component{
    render() {
        return(
            <div className='header'>
                {/* <h3>Trần Minh Trí</h3> */}
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default TodoItem