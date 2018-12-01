import React, { Component } from 'react';
import './App.css';

import TaskForm from './component/TaskForm';
// import Control from './component/Control';
import TaskList from './component/TaskList';
const axios = require('axios');




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Tasks: []
        }
    }
    getdata() {

    }
    createData = () => {
        // var Tasks = [
        //     {
        //         id : 0,
        //         name : 'go to school',
        //         status: true
        //     },
        //     {
        //         id : 1,
        //         name : 'go to school',
        //         status: true
        //     },
        //     {
        //         id : 2,
        //         name : 'go to school',
        //         status: true
        //     },
        //     {
        //         id : 3,
        //         name : 'go to school',
        //         status: true
        //     }
        // ];
        // this.setState({
        //     Tasks : Tasks
        // });
        // localStorage.setItem('Tasks', JSON.stringify(Tasks));
        var url = 'http://localhost:3001/todos';
        axios.get(url).then(function (res) {
            var Tasks = res.data;
            console.log(Tasks);
        })
    };
    componentWillMount() {
        var url = 'http://localhost:3001/todos';
        axios.get(url)
        .then((res)=> {
            var Tasks = res.data;
            this.setState({
                Tasks : Tasks
            })
            console.log(Tasks);
        })
       
        
    }
    render() {
        var { Tasks } = this.state;
        return (
            <div className="container">
                <h1>Hiroku</h1>
                <div className="row">
                    <div className="col-md-4">
                        <TaskForm />
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => this.createData()}>
                            Create Data
                        </button>
                    </div>
                    <div className="col-md-8">
                        {/* <Control /> */}
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
