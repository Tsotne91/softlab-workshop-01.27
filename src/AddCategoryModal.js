import React, {useEffect, useState} from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap'
import {Modal} from "react-bootstrap";

function AddCategoryModal(props) {
    const [formValue, setFormValue] = useState('');

    const addedData = (input) => {
        return (
            <tr>
                <td>12345</td>
                <td>3</td>
                <td>{input}</td>
            </tr>
        )
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formValue);
    }

    return (
        <Modal {...props}>
        <Form className="text-center m-2" onSubmit={submitForm}>
            <InputGroup className="mb-3 my-2">
            <Form.Control type="text" placeholder="Enter a category name"
                          value={formValue}
                          onChange={(event => setFormValue(event.target.value))}
            />
            </InputGroup>
            <Button type="submit">Add</Button>
        </Form>
        </Modal>
    );
}

export default AddCategoryModal;