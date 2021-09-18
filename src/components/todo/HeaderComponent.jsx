import { Component } from 'react';
import { withRouter } from 'react-router';
import { Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';

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

export default withRouter(Header);