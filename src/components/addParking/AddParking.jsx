import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostMethod from '../PostMethod';
import { useState } from 'react';

function AddParking() {

    const whiteStyling = { color: 'white' };
    const [errorMessage, setErrorMessage] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [numberOfSlot, setSlots] = useState(60);

    //function to save the parking
    const handleButtonClick = async (e) => {
        const endpoint = '/parking/save';
        const requestData = {
            name,
            address,
            numberOfSlot
        };

        try {
            e.preventDefault();
            const apiResponse = await PostMethod(endpoint, requestData);
            window.location.href = '/admin/parkings?success=true';
        } catch (error) {
            console.error('Error making authenticated request:', error);
            setErrorMessage('Please check your data and try again.');
        }
    };

    return (
        <Container className='my-3' style={{
            width: '80%',
            'position': 'sticky',
            'height': '75vh'

        }}>
            <Form onSubmit={handleButtonClick}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={whiteStyling}>Parking Name</Form.Label>
                            <Form.Control
                                type="text"
                                variant="warning"
                                required
                                placeholder="Enter Parking Name"
                                value={name}
                                onChange={(e) => {
                                    const input = e.target.value;
                                    const validName = /^[A-Za-z ]*$/.test(input);
                                    if (validName) {
                                        setName(input);
                                    }
                                }} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={whiteStyling}>Address</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Enter Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={whiteStyling}>No. Of Slots</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={numberOfSlot}
                                onChange={(e) => setSlots(parseInt(e.target.value, 10))}>
                                <option value="60">60</option>
                                <option value="80">80</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                {errorMessage && <div className="error-message mb-3" style={{ color: '#ff4040' }}>{errorMessage}</div>}
                <Button variant="warning" className='me-3' type="danger">
                    Add Parking
                </Button>
            </Form>
        </Container>
    );
}

export default AddParking;