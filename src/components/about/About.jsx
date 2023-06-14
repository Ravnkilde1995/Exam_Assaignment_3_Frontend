import React from "react";
import "./about.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const About = () => {
    return (
        
        <div className="text-center">
            <br />
            <h1>About me!</h1>
            <br />
        <div className="card_container">

            <Card style={{width: '16rem'}}>
                <Card.Img variant="top" src="/user-picture.png"/>
                <Card.Body className="bg-primary text-white">
                    <Card.Title> Oliver Ravnkilde</Card.Title>
                    <Card.Text>
                        Developer
                    </Card.Text>
                    <Card.Text>
                    Student at the Copenhagen Business academy Lyngby, as a computer scientist. Employment:
                    Full stack programming
                    </Card.Text>
                    <Button variant="warning">Contact</Button>
                </Card.Body>
            </Card>

        </div>
        </div>
    );
}

export default About;