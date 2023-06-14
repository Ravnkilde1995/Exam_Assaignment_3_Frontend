import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
const Admin = () => {
    
    const [tableData, setTableData] = useState([]);
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState(0);

    useEffect(() => {
        facade.fetchEvents().then((res) => {
            if (res) {
                 setTableData(res);
                 console.log(res)
            }
             
        });
    }, []);
    
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

    const updateEvent = (event) => {

        
         
          facade.updateEvent(event).then((res) => {
              if (res) {
                   console.log(res)
              }
          });
      }

    const deleteEvent= (id) => {
 
        facade.deleteEvent(id).then((res) => {
            if (res) {
                 console.log(res)
            }
             
        });
    }

    return (
        <div>
{tableData.map((item) => {
            return (
                <>
                    <br/>
                    <Table className="table table-info" bordered hover>
                        <thead>
                        <tr>
                            <th style={{width: "10%"}}>Dish</th>
                            <th style={{width: "10%"}}>Location</th>
                            <th style={{width: "5%"}}>Price</th>
                            <th style={{width: "15%"}}>Time</th>
                            <th style={{width: "10%"}}>Delete Event</th>
                            <th style={{width: "10%"}}>Update Event</th>
                        </tr>
                        </thead>
                        <tbody key={item.dish}>
                        <tr>
                            {/* if update = true and id = item.id then show */}
                            {update==true && id==item.id ?
                            <>
                            <td>
                            <input placeholder={item.dish} onChange={handleDish}></input>
                            </td>
                            <td>
                            <input placeholder={item.location} onChange={handleLocation}></input>
                            </td>
                            <td>
                            <input placeholder={item.time} onChange={handleTime}></input>
                            </td>
                            <td>
                            <input placeholder={item.price} onChange={handlePrice}></input>
                            </td>
                            </>
                            // or if not show this
                            :
                            <>
                            <td>{item.dish}</td>
                            <td>{item.location}</td>
                            <td>{item.price}</td>
                            <td>{item.time}</td>
                            </>
                            }
                            
                            <td>
                                <Button
                                    onClick={() => deleteEvent(item.id)}
                                    className="btn btn-danger">
                                    Delete Event
                                </Button>
                            </td>
                            <td>
                                {update == true && id == item.id ? 
                                <Button
                                onClick={() => {
                                    const event = {}
                                    if(dish.length < 1){
                                        setDish(item.dish)
                                    }
                                    if(location.length < 1){
                                        setLocation(item.location)
                                    }
                                    if(price.length < 1){
                                        setPrice(item.price)
                                    }
                                    if(time.length < 1){
                                        setTime(item.time)
                                    }
                                    event.id = item.id
                                    event.dish = dish
                                    event.price = price
                                    event.location = location
                                    event.time = time
                                    updateEvent(event)
                                    setUpdate(false)
                                    setId(0)
                                }}
                                className="btn btn-primary">
                                Safe Event
                            </Button>
                            :
                            <Button
                                    onClick={() => {
                                        setUpdate(true)
                                        setId(item.id)
                                    }}
                                    className="btn btn-primary">
                                    Update Event
                                </Button>
                            }
                            </td>
                        </tr>
                        </tbody>
                    </Table>

                </>
            );
        })}
        <div>
            <h3>Want to add Event?</h3>
            <Button href="/createEvent"
            className="btn btn-primary">
           ADD EVENT
            </Button>
            </div>
        </div>
        
    );
}

export default Admin;