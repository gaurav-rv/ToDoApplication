import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.js';

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

function ErrorComponent(){
    return <div> An Error has Occoured, Please try again </div>
}

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

class Header extends Component{
    render() {
    var isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log(isUserLoggedIn);
        return (
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a className="navbar-brand">Learning React</a></div>
                            <ul className="navbar-nav navbar-collapse">
                                {isUserLoggedIn && <li > <Link className="nav-link" to="/welcome/testUser">Home</Link></li>}
                                {isUserLoggedIn && <li > <Link className="nav-link" to="/todos">Todos</Link></li>}
                            </ul>
                            <ul className="navbar-nav navbar-collapse justify-content-end ">
                                {!isUserLoggedIn && <li  ><Link className="nav-link" to="/login">Login </Link></li>}
                                {isUserLoggedIn &&<li  > <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                            </ul>
                    </nav>
                </header>
        )
    }
}

class Footer extends Component{
    render() {
        return (
            <div className="footer">
                <span className="text-muted">All Rights Reserved to me obviously?</span>
            </div>
        )
    }
}

class LogoutComponent extends Component{
    render() {
        return (
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you for using our Application.
                </div>
            </div>
        )
    }
}

class WelcomeComponent extends Component{
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your todos <Link to= "/todos" >here</Link>
                </div>
            </div>
        )
    }
}

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state ={
            username : 'tempUser',
            password : '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    
    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
    }

    render(){
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className ="alert alert-warning"> Invalid Credentials</div> }
                    {this.state.showSuccessMessage && <div> Successful Login</div> }

                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    UserName : <input type ="text" value ={this.state.username} name ='username' onChange={this.handleChange}/>
                    Password : <input type ="password" value={this.state.password} name ="password" onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

    loginClicked(){
        if(this.state.username ==='tempUser' && this.state.password ==='dummy'){
            AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:false})
        }
        else{   
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }

    handleChange(event){
        this.setState({ [event.target.name] : event.target.value})
    }

}


export default TodoApp