import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from "./components/loginform/LoginForm.jsx";
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import Member from "./components/member/member.jsx";
import Admin from "./components/admin/Admin.jsx";
import CreateEvent from "./components/createEvent/CreateEvent.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import apiFacade from "./apiFacade";
import Contact from "./components/contact/Contact.jsx";
import Registration from "./components/registration/registration";


function App() {
    const [loggedIn, setLoggedIn] = useState(apiFacade.loggedIn());
    const [user, setUser] = useState({username: "", roles: ""});


    return (
        <div>

            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>
            <BrowserRouter>
                <Routes>
                    {/*TODO opdater routes til at matche Eksamen*/}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/member" element={<Member/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/createEvent" element={<CreateEvent/>}/>
                    <Route path="/login"
                           element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user}
                                           setUser={setUser}/>}/>

                </Routes>
            </BrowserRouter>


        </div>
    )
}

export default App;