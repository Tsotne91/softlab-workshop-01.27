import React from 'react';
import {Button, Form} from 'react-bootstrap'
import {Modal} from "react-bootstrap";

function AddMakerModal(props) {
    return (
        <Modal {...props}>
            <Form>
                <Form.Control type="text" placeholder="Enter a maker" />
            </Form>
            <Button>Add</Button>
        </Modal>
    );
}

export default AddMakerModal;