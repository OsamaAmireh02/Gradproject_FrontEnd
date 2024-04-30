import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostMethod from '../PostMethod';

function ConfParking() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [carModel, setCarModel] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [carColor, setCarColor] = useState('');
    const [slot, setSlot] = useState(localStorage.getItem('seat'));
    const [carPlate, setCarPlate] = useState();


    const handleButtonClick = async (e) => {
        const endpoint = ''; // Replace with your actual endpoint
        const requestData = {
            firstName,
            lastName,
            email,
            carModel,
            phoneNumber,
            carColor
        }; // Your data object

        try {
            e.preventDefault();
            const apiResponse = await PostMethod(endpoint, requestData);
            console.log('API Response:', apiResponse);
            // Handle the response data as needed
            //window.location.href = '/admin/users';
        } catch (error) {
            console.error('Error making authenticated request:', error);
            // Handle the error
        }
    };

    return (
        <Container>
            <Form onSubmit={handleButtonClick}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter First Name" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)}
                            disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Last Name"
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)}
                            disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Phone Number"
                            value={phoneNumber} 
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Car Model</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Car Model" 
                            value={carModel} 
                            onChange={(e) => setCarModel(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Car Color</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Car Color" 
                            value={carColor} 
                            onChange={(e) => setCarColor(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Car Plate number</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Car Model" 
                            value={carPlate} 
                            onChange={(e) => setCarPlate(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Selected Slot</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder={localStorage.getItem('seat')} 
                            value={carColor} 
                            onChange={(e) => setCarColor(e.target.value)}
                            disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default ConfParking;