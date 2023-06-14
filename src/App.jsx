import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from "./components/loginform/LoginForm.jsx";
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import apiFacade from "./apiFacade";
import Contact from "./components/contact/Contact.jsx";
import Registration from "./components/registration/registration";


function App() {
    const [loggedIn, setLoggedIn] = useState(apiFacade.loggedIn());
    const [user, setUser] = useState({username: "", roles: ""});

    // useEffect(() => {
    //     const token = apiFacade.getToken();
    //     if (!token) {
    //         return false;
    //     }
    // })

    return (
        <div>

            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>
            <BrowserRouter>
                <Routes>
                    {/*TODO opdater routes til at matche Eksamen*/}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login"
                           element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user}
                                           setUser={setUser}/>}/>

                </Routes>
            </BrowserRouter>

            {/* Delete when done */}
            {/*<Home/>*/}
            {/*<About/>*/}


        </div>
    )
}

export default App;