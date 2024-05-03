import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostMethod from '../PostMethod';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


function ConfParking() {

    const location = useLocation();
    const parkingName = new URLSearchParams(location.search).get('parkingName');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [parking, setParking] = useState(parkingName);
    const [email, setEmail] = useState('');
    const [carModel, setCarModel] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [carColor, setCarColor] = useState('');
    const [slot, setSlot] = useState(localStorage.getItem('seat'));
    const [carPlate, setCarPlate] = useState();
    const [time, settime] = useState(localStorage.getItem('time'));

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        carModel: '',
        carColor: '',
        carPlateNumber: '',
      });
    
      useEffect(() => {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
    
        if (token && email) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          };
    
          const data = { email };
    
          // Replace with your actual API endpoint
          axios
            .post('http://localhost:8080/user/getByEmail', data, config)
            .then((response) => {
              const { firstName, lastName, email, phoneNumber, carModel, carColor, carPlateNumber } = response.data;
              // Update state with retrieved data
              setUserData({
                firstName,
                lastName,
                email,
                phoneNumber,
                carModel,
                carColor, 
                carPlateNumber
              });
            })
            .catch((error) => {
              console.error('Error fetching data:', error.message);
              // Handle errors
            });
        }
      }, []);


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
                                placeholder={userData.firstName}
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
                                placeholder={userData.lastName}
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
                                placeholder={userData.phoneNumber}
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
                                placeholder={userData.email}
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
                                placeholder={userData.carModel}
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
                                placeholder={userData.carColor}
                                value={carColor}
                                onChange={(e) => setCarColor(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Selected Time</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={localStorage.getItem('time')}
                                value={time}
                                onChange={(e) => settime(e.target.value)}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Selected Slot</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={localStorage.getItem('seat')}
                                value={slot}
                                onChange={(e) => setSlot(e.target.value)}
                                disabled
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
                                placeholder={userData.carPlateNumber}
                                value={carPlate}
                                onChange={(e) => setCarPlate(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Selected Parking</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={{parkingName}}
                                value={parking}
                                onChange={(e) => setParking(e.target.value)}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant='dark' href='/booking/chooseSlot'>Back</Button>
            </Form>
        </Container>
    );
}

export default ConfParking;