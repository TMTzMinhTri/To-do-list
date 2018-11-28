import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>Trần Minh Trí</td>
                <td className='text-center mt-10'>
                    <div className='alert alert-success' role="alert">kích hoạt</div>
                </td>
                <td>
                    <button type="button" class="btn btn-primary mr-2">
                        <span className="fas fa-pen mr-2"></span>Sửa
                            </button>
                    <button type="button" class="btn btn-primary">
                        <span className="fas fa-trash mr-2"></span>Sửa
                            </button>
                </td>
            </tr>
        );
    }
}

export default ListItem;
