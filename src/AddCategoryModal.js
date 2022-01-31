import React, {useState} from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap'
import {Modal} from "react-bootstrap";

function AddCategoryModal(props) {
    const [formValue, setFormValue] = useState('');

    function addedData (input){
        return (
            <tr>
                <td>12345</td>
                <td>3</td>
                <td>{input}</td>
            </tr>
        )
    }

    return (
        <Modal {...props}>
        <Form className="text-center m-2">
            <InputGroup className="mb-3 my-2">
            <Form.Control type="text" placeholder="Enter a category name"
                          value={formValue}
                          onChange={(event => setFormValue(event.target.value))}
            />
            </InputGroup>
            <Button>Add</Button>
        </Form>
        </Modal>
    );
}

export default AddCategoryModal;