import React, { Component } from 'react';

import ListItem from './Listitem';

class TaskList extends Component {
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <div className="form-group m-1">
                                <input type="text"
                                    className="form-control" name="firstName" />
                            </div>
                        </td>
                        <td>
                            <select className="custom-select m-1" id="inputGroupSelect01">
                                <option value="all">Tất cả</option>
                                <option value="active">Kích hoạt</option>
                                <option value="hide">Ẩn</option>
                            </select>
                        </td>
                        <td>
                        </td>
                    </tr>
                   <ListItem />
                </tbody>
            </table>
        );
    }
}

export default TaskList;
