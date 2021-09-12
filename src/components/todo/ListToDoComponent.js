import { Component } from 'react';
//import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
class ListToDosComponent extends Component{

    constructor(props){
        super()
        this.state = {
            todos : [ 
                {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                {id: 2, description: 'Become an expert at React', done: false, targetDate: new Date()},
                {id: 3, description: 'Get job at Google', done: false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos </h1>
                <div className="container">
                    <table className ="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Status</th>
                                <th>TargetDate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo => 
                                    <tr key= {todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListToDosComponent