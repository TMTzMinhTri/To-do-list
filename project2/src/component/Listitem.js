import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        var { Task, index } = this.props;
        return (
            <tr>
                <td>{ index }</td>
                <td>{ Task.name}</td>
                <td className='text-center mt-10'>
                    {Task.status 
                        ? <div className = "alert alert-success"> { Task.status ? "kích hoạt" : "Ẩn"}</div> 
                        : <div className = "alert alert-warning">{ Task.status ? "kích hoạt" : "Ẩn"}</div>
                    }
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
        // );{ ...Task.status ? className="alert alert-success" : className="alert alert-warning"}
    }
}

export default ListItem;
