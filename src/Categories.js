import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import {Button} from "react-bootstrap";
import AddCategoryModal from "./AddCategoryModal";
import shopApi from "./shopApi";

function Categories() {
    const [modalShow, setModalShow] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
    shopApi.get('/categories').then(res => setCategories(res.data)).catch(console.error);
    }, [])

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
                    {
                     categories.map(category => (
                     <tr key={category.id}>
                         <td>
                            {category.id}
                         </td>
                         <td>
                            {category.parent_id}
                         </td>
                         <td>
                            {category.category_name}
                         </td>
                     </tr>
                            ))
                    }
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

