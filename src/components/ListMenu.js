import React, { Component } from 'react';
import './TodoItem.css';

class ListMenu extends Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>About {this.props.name}</h1>
                {/* <div className= 'd-flex mb-3 '> */}
                    <ul className="d-flex justify-content-center " onClick={() => alert('click')}>
                        <li className='btn btn-danger mr-2'>Instagram</li>
                        <li className='btn btn-danger mr-2'>FaceBook</li>
                        <li className='btn btn-danger mr-2'>Gmail</li>
                    </ul>

                {/* </div> */}

                <img src='https://picsum.photos/800/300' alt='avata' />
            </div>
        );
    }
}

export default ListMenu