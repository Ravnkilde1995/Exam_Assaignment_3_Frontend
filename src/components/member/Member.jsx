import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
const Member = () => {
    
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        facade.fetchEvents().then((res) => {
            if (res) {
                 setTableData(res);
                 console.log(res)
            }
             
        });
    }, []);
    console.log(tableData + "tabledata")

    return (
        <div>
{tableData.map((item) => {
            return (
                <>
                    <br/>
                    <Table className="table table-info" bordered hover>
                        <thead>
                        <tr>
                            <th style={{width: "21%"}}>Dish</th>
                            <th style={{width: "21%"}}>Location</th>
                            <th style={{width: "21%"}}>Price</th>
                            <th style={{width: "21%"}}>Time</th>
                            <th style={{width: "16%"}}>Assign</th>
                        </tr>
                        </thead>
                        <tbody key={item.dish}>
                        <tr>
                            <td>{item.dish}</td>
                            <td>{item.location}</td>
                            <td>{item.price}</td>
                            <td>{item.time}</td>
                            <td>
                                <Button
                                    //onClick={() => AssignMember()}
                                    className="btn btn-primary">
                                    Assign Member
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