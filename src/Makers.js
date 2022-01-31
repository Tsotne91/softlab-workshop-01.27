import React, {useState} from 'react';
import {Button, Table} from "react-bootstrap";
import AddMakerModal from "./AddMakerModal";

function Makers(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Category Name</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>78945</td>
                    <td>This is a Maker Name</td>
                </tr>
                </tbody>
            </Table>
            <AddMakerModal show={modalShow}/>
            <Button onClick={()=> setModalShow(true)}>Add maker</Button>
        </>
    );
}

export default Makers;