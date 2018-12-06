import React, { Component } from 'react';

class TaskForm extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header bg-info text-white">
                    Thêm công việc
                        <span className="float-right">
                        <i className="fas fa-times-circle text-right"></i>
                    </span>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="name">Tên</label>
                        <input type="text" name="name" className="form-control" placeholder="nhap gi do di" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Trạng thái</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>kích hoạt</option>
                            <option>Ẩn</option>
                        </select>
                    </div>
                    <button className="btn btn-primary mr-2" type="submit">
                        <span><i className="fas fa-save mr-2"></i></span>Lưu lại
                        </button>
                    <button className="btn btn-primary" type="submit">
                        <span><i className="fas fa-times mr-2"></i></span>Hủy bỏ
                        </button>
                </div>
            </div>
        );
    }
}

export default TaskForm;
