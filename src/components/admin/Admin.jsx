import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
const Admin = () => {
    
    const [tableData, setTableData] = useState([]);
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState(0);

    useEffect(() => {
        //TODO sæt eget fetch kald her
        facade.fetchEvents().then((res) => {
            if (res) {
                 setTableData(res);
                 console.log(res)
            }
            // setDataFromServer(res.msg);
             
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

      console.log(id)  
        facade.deleteEvent(id).then((res) => {
            if (res) {
                 console.log(res)
            }
             
        });
    }

    return (
        <div>
{tableData.map((item) => {
            //console.log("hello hello", items);
            //console.log("Nummer 2", item.id);
            //console.log("Nummer 3", item.etag);
            return (
                <>
                    <br/>
                    <Table className="table table-info" bordered hover>
                        <thead>
                        <tr>
                            {/*TODO Forskellige kolonner, der står i toppen af tabellen*/}
                            <th style={{width: "20%"}}>Title</th>
                            <th style={{width: "12%"}}>Author</th>
                            {/*<th style={{width: "9%"}}>Category</th>*/}
                            <th style={{width: "44%"}}>Description</th>
                            <th style={{width: "6%"}}>Delete Book</th>
                            <th style={{width: "9%"}}>Review Book</th>
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
                                {/*TODO tilføj action til knap*/}
                                {/* der skal nok tilføjes en user hertil */}
                                <Button
                                    onClick={() => deleteEvent(item.id)}
                                    className="btn btn-danger">
                                    Delete Event
                                </Button>
                            </td>
                            <td>
                                {/* der skal nok tilføjes en user hertil */}
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
            <Button href="/createEvent"
            className="btn btn-primary">
            add event
            </Button>
        </div>
        
    );
}

export default Admin;