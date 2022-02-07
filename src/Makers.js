import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import AddMakerModal from "./AddMakerModal";
import shopApi from "./shopApi";

function Makers() {
    const [modalShow, setModalShow] = useState(false);
    const [makers, setMakers] = useState([]);

    useEffect( ()=> {
        shopApi.get('/makers')
            .then(res => setMakers(res.data))
            .catch(console.error)
        }, [])


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
                {
                    makers.map(maker => (
                        <tr key={maker.id}>
                            <td>
                                {maker.id}
                            </td>
                            <td>
                                {maker.maker_name}
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
            <AddMakerModal
                show={modalShow}
                onSave={()=>{
                    setModalShow(false)
                }}
            />
            <Button onClick={()=> setModalShow(true)}>Add maker</Button>
        </>
    );
}

export default Makers;