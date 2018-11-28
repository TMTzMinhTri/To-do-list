import React, { Component } from 'react';
import './App.css';

import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';

var fs = require('fs');


class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Hiroku</h1>
                <div className="row">
                    <div className="col-md-4">
                        <TaskForm />
                        <button
                            type="button"
                            class="btn btn-warning"
                            onClick={() => this.createData()}>
                            Create Data
                        </button>
                    </div>
                    <div className="col-md-8">
                        {/* <Control /> */}
                        <div className="row">
                            <div className="col-md-12">
                                <TaskList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
