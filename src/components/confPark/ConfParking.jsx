import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostMethod from '../PostMethod';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


function ConfParking() {

    const blk = { color: 'white' };
    const fromTime = localStorage.getItem('time');
    const ticketStatus = "Pending";
    const location = useLocation();
    const parkingName = new URLSearchParams(location.search).get('parkingName');
    const parkingId = parseInt(new URLSearchParams(location.search).get('parkingId'));
    const userId = localStorage.getItem('id')
    const [slotId, setSlotId] = useState('');
    const [parking, setParking] = useState(parkingName);
    const [carModel, setCarModel] = useState('');
    const [carColor, setCarColor] = useState('');
    const [slotNumber, setSlot] = useState(parseInt(localStorage.getItem('seat')));
    const [carPlateNumber, setCarPlate] = useState();
    const [time, settime] = useState(localStorage.getItem('time'));

    const sendPostRequest = async () => {
        const url = 'http://localhost:8080/slot/getSlotId';
        const data = {
            parkingId,
            slotNumber
        };

        const token = localStorage.getItem('token'); // Replace with your actual token

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await axios.post(url, data, config);
            
            console.log(slotId);
            console.log('Response:', response.data); // Save the response as needed
            setSlotId(response.data);
            
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };


    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        carModel: '',
        carColor: '',
        carPlateNumber: ''
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
        sendPostRequest();
        const endpoint = '/ticket/save'; // Replace with your actual endpoint
        const requestData = {
            firstName: userData.firstName,
            lastName: userData.lastName,
            phoneNumber: userData.phoneNumber,
            parkingName,
            fromTime,
            slotNumber,
            ticketStatus,
            carModel,
            carColor,
            carPlateNumber,
            userId,
            parkingId,
            slotId
        }; // Your data object

        try {
            e.preventDefault();
            const apiResponse = await PostMethod(endpoint, requestData);
            console.log('API Response:', apiResponse);
            window.location.href = `/ticket?id=${apiResponse.data.ticketId}`; 
        } catch (error) {
            console.error('Error making authenticated request:', error);
            // Handle the error
        }
    };

    return (
        <Container className='my-4' style={{
            'position': 'sticky',
            'height': '73vh'

        }}>
            <Form onSubmit={handleButtonClick}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={userData.firstName}
                                value={userData.firstName}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={userData.lastName}
                                value={userData.lastName}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={userData.phoneNumber}
                                value={userData.phoneNumber}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={userData.email}
                                value={userData.email}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Car Model</Form.Label>
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
                            <Form.Label style={blk}>Car Color</Form.Label>
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
                            <Form.Label style={blk}>Selected Time</Form.Label>
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
                            <Form.Label style={blk}>Selected Slot</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={localStorage.getItem('seat')}
                                value={slotNumber}
                                onChange={(e) => setSlot(e.target.value)}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Car Plate number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={userData.carPlateNumber}
                                value={carPlateNumber}
                                onChange={(e) => setCarPlate(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Selected Parking</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={{ parkingName }}
                                value={parking}
                                onChange={(e) => setParking(e.target.value)}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            style={{ width: '100px' }}
                            variant='dark'
                            href={`/booking/chooseSlot?parkingId=${parkingId}&parkingName=${encodeURIComponent(parkingName)}`}>
                            Back
                        </Button>
                        <Button style={{ width: '100px' }} className='ms-3' variant="warning" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default ConfParking;