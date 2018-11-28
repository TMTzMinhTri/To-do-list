import React, { Component } from 'react';

class Control extends Component {
    render() {
        return (
            <div>
                {/* <button className="btn btn-primary mr-2" type="submit">
                    <span><i className="fas fa-plus-circle mr-2"></i></span>Thêm công việc
                </button>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tìm kiếm...." />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button" id="button-addon2">Tìm</button>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-md-6">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sắp xếp
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" role="button">aaaaaa</a>
                                <a className="dropdown-item" role="button">Another action</a>
                                <a className="dropdown-item" role="button">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>
            // </div>
                );
            }
        }
        
        export default Control;
