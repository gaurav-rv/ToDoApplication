import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.js';
import LoginComponent from './LoginComponent.jsx';
import ListToDosComponent from './ListToDoComponent.js';
import Header from './HeaderComponent.jsx';
import Footer from './FooterComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';

class TodoApp extends Component{
    render(){
        return(
            <div className = "TodoApp">
                <Router>
                    <>
                        <Header/>
                        <Switch>
                            <Route path = "/" exact component={LoginComponent}/> 
                            <Route path = "/login" component={LoginComponent}/> 
                            <AuthenticatedRoute path = "/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path = "/todos" component={ListToDosComponent} />
                            <AuthenticatedRoute path = "/logout" component={LogoutComponent} />
                            <Route component = {ErrorComponent}/>
                        </Switch>
                        <Footer/>
                    </>
                </Router>
            </div>
        )

    }
}

export default TodoApp