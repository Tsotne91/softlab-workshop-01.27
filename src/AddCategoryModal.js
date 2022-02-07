import React, {useState} from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap'
import {Modal} from "react-bootstrap";
import shopApi from "./shopApi";

function AddCategoryModal(props) {
    const initialValues = {
        category_name:'',
        parent_id:''
    }
    const [formValue, setFormValue] = useState(initialValues);

    const submitForm = async (e) => {
        e.preventDefault();
       await shopApi.post('/categories', formValue);
        props.onSave();
    }

    return (
        <Modal {...props}>
        <Form className="text-center m-2" onSubmit={submitForm}>
            <InputGroup className="mb-3 my-2">
            <Form.Control type="text" placeholder="Enter a category name"
                          value={formValue.category_name}
                          onChange={(event => setFormValue({
                              category_name: event.target.value,
                              }))}
            />
            <Form.Control type="number" placeholder="Enter parent ID"
                              value={formValue.parent_id}
                              onChange={(event => setFormValue({
                                  ...formValue,
                                  parent_id: event.target.value,
                              }))}
            />
            </InputGroup>
            <Button type="submit">Add</Button>
        </Form>
        </Modal>
    );
}

export default AddCategoryModal;