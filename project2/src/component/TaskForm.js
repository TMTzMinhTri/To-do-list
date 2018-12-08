import React, { Component } from 'react';



class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: false
        }

    }
    closeForm = () => {
        this.props.closeForm();
    };
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === "true" ? true :false;
        }
        this.setState({
            [name]: value
        })
        console.log(event);

    }
    onsubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onclear();
        this.closeForm();
    }
    onclear() {
        this.setState({
            name: '',
            status : false
        });
        this.closeForm();
    }
    render() {
        return (
            <div className="card">
                <div className="card-header bg-info text-white">
                    Thêm công việc
                        <span className="float-right">
                        <i className="fas fa-times-circle text-right active" onClick={this.closeForm}></i>
                    </span>
                </div>
                <div className="card-body" >
                    <form onSubmit={this.onsubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Tên</label>
                            <input type="text"
                                name="name"
                                className="form-control"
                                placeholder="nhap gi do di"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Trạng thái</label>
                            <select className="form-control" id="exampleFormControlSelect1" name='status' value={this.state.status}
                                onChange={this.onChange}>
                                <option value={true}>kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                        </div>
                        <button className="btn btn-primary mr-2" type="submit">
                            <span><i className="fas fa-save mr-2"></i></span>Lưu lại
                    </button>
                        <button className="btn btn-primary" type="reset" onClick = {() => this.onclear()}>
                            <span><i className="fas fa-times mr-2"></i></span>Hủy bỏ
                    </button>
                    </form>

                </div>
            </div>
        );
    }
}

export default TaskForm;
