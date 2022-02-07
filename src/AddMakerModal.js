import React, {useState} from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap'
import {Modal} from "react-bootstrap";
import shopApi from "./shopApi";

function AddMakerModal(props) {
    const [formValue, setFormValue] = useState({
        maker_name:''
    });

    const submitForm = async (e) => {
        e.preventDefault();
        await shopApi.post('/makers', formValue);
        props.onSave();
    }

    return (
        <Modal {...props}>
            <Form className="text-center m-2" onSubmit={submitForm}>
                <InputGroup className="mb-3 my-2">
                <Form.Control type="text" placeholder="Enter a maker"
                value={formValue.maker_name}
                 onChange={(event => setFormValue({
                      maker_name: event.target.value
                     }))}
                />

            </InputGroup>
            <Button type="submit">Add</Button>
            </Form>
        </Modal>
    );
}

export default AddMakerModal;