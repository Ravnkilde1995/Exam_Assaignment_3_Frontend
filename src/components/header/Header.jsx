import React from "react";
import "./header.css";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import LoggedIn from "../loggedin/LoggedIn.jsx";
import facade from "../../apiFacade.js";
import LogIn from "../loginform/LoginForm.jsx";
// import {Badge} from "react-bootstrap";


const Header = ({loggedIn, setLoggedIn, user, setUser}) => {

    const login = (user, pass) => {
        facade.login(user, pass).then(() => {
            const token = facade.readJwtToken(facade.getToken());
            setUser({username: token.username, roles: token.roles});
            setLoggedIn(true);
        });
    }

    const logout = () => {
        facade.logout();
        setLoggedIn(false);
        setUser({name: "", roles: ""})
    }

    return (
        <div className="container-fluid flex-fill">
            <nav className="Nav">
                {/*left side NAVBAR*/}
                {/*Left side icon onClick = Home btn*/}
                <a className="nav-icon active" href="/"><img src="/vite.svg" height="77px" alt=""></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <a className="nav-item nav-link" href="/about">About</a>
                <a className="nav-item nav-link" href="/contact">Contact</a>

                {/*UNCOMMENT TO SHOWCASE WHAT USER SEES WHEN LOGGEDIN*/}
                {/* <a className="nav-item nav-link" href="/library">Library</a>
                <a className="nav-item nav-link" href="/table_example">Table_Example</a> */}

                {/*!LOGGED IN SHOW REGISTRATION*/}
                {!facade.loggedIn()
                    && <a className="nav-item nav-link" href="/registration">Sign-up</a>}

                {/*UNCOMMENT TO SHOWCASE WHAT ADMIN SEES WHEN LOGGEDIN*/}
                {facade.loggedIn() && facade.readJwtToken(facade.getToken()).roles.includes("admin") &&
                    <a className="nav-item nav-link" href="/admin">Admin</a>
                }

                {/*RIGHTSIDE NAVBAR*/}
                <div className="Nav-right">
                    {/*CHECK IF USER IS LOGGEDIN OR !LOGGEDIN*/}
                    {!loggedIn ? (<LogIn login={login}/>) :
                        (<div className="login-container">
                            <button type="button" className="btn btn-primary">
                                <LoggedIn user={user}/>
                            </button>
                            <button type="button" className="btn btn-primary" onClick={logout}>Logout</button>
                        </div>)}
                </div>

            </nav>
        </div>

    );
}

export default Header;