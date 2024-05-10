import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostMethod from '../PostMethod';
import { useState } from 'react';

function AddParking() {

    const blk = { color: 'white' };

    const [errorMessage, setErrorMessage] = useState('');

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [numberOfSlot, setSlots] = useState(80);

    const handleButtonClick = async (e) => {
        const endpoint = '/parking/save'; // Replace with your actual endpoint
        const requestData = {
            name,
            address,
            numberOfSlot
        }; // Your data object

        try {
            e.preventDefault();
            const apiResponse = await PostMethod(endpoint, requestData);
            console.log('API Response:', apiResponse);
            window.location.href = '/admin/parkings?success=true';
            // Handle the response data as needed
        } catch (error) {
            console.error('Error making authenticated request:', error);
            setErrorMessage('Please check your data and try again.');
            // Handle the error
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
                            <Form.Label style={blk}>Parking Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Parking Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>No. Of Slots</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={numberOfSlot}
                                onChange={(e) => setSlots(parseInt(e.target.value, 10))}>
                                <option value="48">80</option>
                                <option value="36">80</option>
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
                <Button variant="light" type="clear">
                    Clear
                </Button>
            </Form>
        </Container>
    );
}

export default AddParking;