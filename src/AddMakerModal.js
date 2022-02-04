import React from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap'
import {Modal} from "react-bootstrap";

function AddMakerModal(props) {
    return (
        <Modal {...props}>
            <Form className="text-center m-2">
                <InputGroup className="mb-3 my-2">
                <Form.Control type="text" placeholder="Enter a maker" />

            </InputGroup>
            <Button>Add</Button>
            </Form>
        </Modal>
    );
}

export default AddMakerModal;