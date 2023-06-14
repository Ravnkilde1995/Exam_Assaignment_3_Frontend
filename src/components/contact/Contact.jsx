import React from "react";
import "./contact.css";

const Contact = () => {

    // test
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Contact Page</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a bibendum ligula. Sed ultricies dignissim nibh,
                    sed tristique dui tincidunt vitae. Donec accumsan venenatis ipsum, 
                    et lobortis augue condimentum vitae. Proin vitae lorem quis urna auctor viverra ut vestibulum purus.
                    Vivamus pharetra sollicitudin odio, ac condimentum est. Sed fringilla laoreet.
                </p>
                <hr className="my-4" />
                <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </div>
    );
}

export default Contact;