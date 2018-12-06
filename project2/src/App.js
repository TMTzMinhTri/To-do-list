import React, { Component } from 'react';
import './App.css';

import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';
const axios = require('axios');




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Tasks: [],
            isDisplayForm : false
        }
    }
    componentWillMount() {
        var url = 'http://localhost:9081/todos';
        axios.get(url)
        .then((res)=> {
            var Tasks = res.data;
            this.setState({
                Tasks : Tasks
            })
        })
       
        
    }
    closeForm = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
    }
    render() {
        var { Tasks, isDisplayForm } = this.state;
        return (
            <div className="container">
                <h1>Hiroku</h1>
                <div className="row">
                    <div className={ isDisplayForm ? "col-md-4" : ''}>
                        {isDisplayForm ? <TaskForm closeForm = {this.closeForm}/> : ''}
                    </div>
                    <div className={ isDisplayForm ? "col-md-8" : 'col-md-12'}>
                        <Control closeForm = {this.closeForm}/>
                        <div className="row">
                            <div className="col-md-12">
                                <TaskList Tasks={Tasks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
