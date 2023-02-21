import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import data from './T-data.json';
import {nanoid} from 'nanoid';

const Dashboard = () =>{
    const [show, setShow] = useState(false);

    const HandleClose =()=> setShow(false);
    const HandleShow = ()=> setShow(true);

    const[lists, setLists] = useState(data);

    //create hooks to add data 
    const [FormData, setFormData] = useState({
        
        actual_name: '',
        short_name: '',
        allow_decimal: '',
    });
    
    //create event-handler state change
    const handleFormChange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...FormData};
        newFormData[fieldName] = fieldValue;

        setFormData(newFormData);
    }

    //create event handler to form submit
    const handleFormSubmit = (event) =>{
        event.preventDefault();

        const newList = {
            id: nanoid(),
            actual_name: FormData.actual_name,
            short_name: FormData.short_name,
            allow_decimal: FormData.allow_decimal,
        };

        const newLists = [...lists, newList];
        setLists(newLists);
    }

    
    return (

        <div className="D-header">
            <h4>Dashboard/ Unit</h4>
            <Button variant='primary' onClick={HandleShow}>Add unit</Button>

            <Modal show={show} onHide={HandleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                            <Form.Label>Actual Name</Form.Label>
                            <Form.Control name='actual_name' type='text' placeholder='Enter Actual name' onChange={handleFormChange} autoFocus/>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
                            <Form.Label>Short Name</Form.Label>
                            <Form.Control name='short_name' type='text' placeholder='Enter Short name' onChange={handleFormChange} />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                            <Form.Label>Allow Decimal</Form.Label>
                            <Form.Control name='allow_decimal' type='int' placeholder='Enter Allow decimal' onChange={handleFormChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={HandleClose}>Close</Button>

                <Button type='submit' variant="primary"  onClick={HandleClose}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
        
        
    )
}

export default Dashboard;