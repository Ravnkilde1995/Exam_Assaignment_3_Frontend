import React from "react";
import "./home.css";

const Home = () => {
    return (
        <div>
            <div className="jumbotron bg-primary text-left">
                <h1 className="display-4 text-white">Hello!</h1>
                <p className="lead text-white">
                    Welcome to my exam single page application
                </p>
                <hr className="my-4 text-white" />

                <p className="text-white">
                This single page application (SPA) has a has an overview of dining events,
                which unfortunately members cannot add to at this time.
                It is possible for an administrator to add new events, delete events and update events.
                This project is an exam project made by Oliver.
                The project is set up with JPA & REST,CI and CONTINUOUS DELIVERY, TESTING. The project retrieves data from endpoints in the deployed backend. 
                </p>
                <a className="btn btn-warning btn-lg" href="#" role="button">Learn more</a>
            </div>
        </div>
    );
}

export default Home;