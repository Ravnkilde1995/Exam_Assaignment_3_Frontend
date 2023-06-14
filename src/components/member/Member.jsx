import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
const Member = () => {
    
    const [tableData, setTableData] = useState([]);

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
    console.log(tableData + "tabledata")

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
                            <td>{item.dish}</td>
                            <td>{item.location}</td>
                            <td>{item.price}</td>
                            <td>{item.time}</td>
                            <td>
                                {/*TODO tilføj action til knap*/}
                                {/* der skal nok tilføjes en user hertil */}
                                <Button
                                    //onClick={() => addBook(item.volumeInfo.title, item.volumeInfo.authors, item.volumeInfo.description)}
                                    className="btn btn-danger">
                                    Delete Book
                                </Button>
                            </td>
                            <td>
                                {/* der skal nok tilføjes en user hertil */}
                                <Button
                                    //onClick={() => addReview(review_text, )}
                                    className="btn btn-primary">
                                    Review Book
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </>
            );
        })}
        </div>
        
    );
}

export default Member;