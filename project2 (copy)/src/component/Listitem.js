import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        var Task = this.props.Task;
        return (
            <tr>
                <td>{ Task.id}</td>
                <td>{Task.name}</td>
                <td className='text-center mt-10'>
                    <div className='alert alert-success' role="alert">kích hoạt</div>
                </td>
                <td>
                    <button type="button" className="btn btn-primary mr-2">
                        <span className="fas fa-pen mr-2"></span>Sửa
                            </button>
                    <button type="button" className="btn btn-primary">
                        <span className="fas fa-trash mr-2"></span>Sửa
                            </button>
                </td>
            </tr>
        );
    }
}

export default ListItem;
