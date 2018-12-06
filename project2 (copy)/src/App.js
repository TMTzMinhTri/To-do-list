import React, { Component } from 'react';
import './App.css';

import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Tasks: [],
            isDisplayForm: false
        }

    }
    componentWillMount() {
        var Tasks = [
            { 'id': 1, name: "Trần Minh Trí", status: true },
            { 'id': 2, name: "Trần Minh Trí", status: true },
            { 'id': 3, name: "Trần Minh Trí", status: true },
            { 'id': 4, name: "Trần Minh Trí", status: true }
        ];
        localStorage.setItem('tasks', JSON.stringify(Tasks));

        if (localStorage && localStorage.getItem('Tasks')) {
            Tasks = JSON.parse(localStorage.getItem('Tasks'));
            console.log(Tasks);
            this.setState({
                Tasks: Tasks
            });
            
            
        }
    }
    // closeForm = () => {
    //     this.setState({
    //         isDisplayForm : !this.state.DisplayForm
    //     });
    // }
    render() {
        var { Tasks, isDisplayForm } = this.state;
        return (
            <div className="container">
                <h1>Hiroku</h1>
                <div className="row">
                    <div className={isDisplayForm ? 'col-md-4' : ''}>
                        {isDisplayForm ? <TaskForm /> : ''}
                    </div>
                    <div className={isDisplayForm ? "col-md-8" : "col-md-12"} >
                        <div className="row">
                            <button 
                                className="btn btn-primary mr-2" 
                                onClick = {this.closeForm}
                            >
                                <span><i className="fas fa-plus-circle mr-2"></i></span>Thêm công việc
                            </button>
                            <Control />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <TaskList data={Tasks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
