import { Component } from 'react';
//import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthenticationService from './AuthenticationService';
//import AuthenticatedRoute from './AuthenticatedRoute.js';

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

export default LoginComponent;