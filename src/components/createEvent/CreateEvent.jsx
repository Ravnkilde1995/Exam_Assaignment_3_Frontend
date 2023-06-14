import React, {useEffect, useState} from "react";
import facade from "../../apiFacade.js";
import Button from 'react-bootstrap/Button';


const CreateEvent = () => {

    const [dish, setDish] = useState("");
    const [location, setLocation] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");
        
    const handleDish = (event) => {
        setDish(event.target.value)
    }
    const handleLocation = (event) => {
        setLocation(event.target.value)
    }
    const handlePrice = (event) => {
        setPrice(event.target.value)
    }
    const handleTime = (event) => {
        setTime(event.target.value)
    }

    const addEvent= () => {

        const event = {}
        event.dish = dish
        event.location = location
        event.time = time
        event.price = price
        console.log(event)
        facade.addEvent(event).then((res) => {
            if (res) {
                 console.log(res)
            }
             
        });

    }
        

    return (
        
        <div>
           <h1>Create Event</h1>
           <input type="text" placeholder="dish" id="dish" onChange={handleDish} />
          <input type="text" placeholder="location" id="location" onChange={handleLocation} />
          <input type="text" placeholder="price" id="price" onChange={handlePrice} />
          <input type="text" placeholder="time" id="time" onChange={handleTime} />

            <Button
                onClick={() => addEvent()}
                className="btn btn-primary">
                Add Event
            </Button>
        </div>
    );
}

export default CreateEvent;