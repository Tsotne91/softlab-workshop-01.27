import React, {useState} from 'react';
import {Table} from "react-bootstrap";
import {Button} from "react-bootstrap";
import AddCategoryModal from "./AddCategoryModal";

function Categories(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Parent ID</th>
                        <th>Category Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12345</td>
                        <td>3</td>
                        <td>This is a Category Name</td>
                    </tr>
                </tbody>
            </Table>
            <AddCategoryModal
                show={modalShow}

            />
            <Button onClick={()=> setModalShow(true)}>Add category</Button>
        </>
    );
}

export default Categories;

