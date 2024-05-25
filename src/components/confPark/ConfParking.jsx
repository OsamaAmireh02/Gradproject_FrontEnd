import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostMethod from '../PostMethod';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './conf.css'


function ConfParking() {

    const [errorMessage, setErrorMessage] = useState('');
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
    const [payMethod, setPayMethod] = useState('cash');

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
        const url = 'http://localhost:8080/slot/getSlotId';
        const data = {
            parkingId, // Replace with actual parking ID
            slotNumber, // Replace with actual slot number
        };

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };

        try {
            axios.post(url, data, config)
                .then((response) => {
                    console.log('Response:', response.data);
                    // Assuming you have a state variable called 'setSlotId'
                    setSlotId(response.data);
                })
                .catch((error) => {
                    console.error('Error sending POST request:', error);
                });
        } catch (error) {
            console.error('Error in try-catch block:', error);
        }
    }, []);

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
                    setCarColor(carColor);
                    setCarModel(carModel);
                    setCarPlate(carPlateNumber);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error.message);
                });
        }
    }, []);

    const handleButtonClick = async (e) => {
        const endpoint = '/ticket/save';
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
        };

        try {
            e.preventDefault();
            const apiResponse = await PostMethod(endpoint, requestData);
            console.log('API Response:', apiResponse);
            window.location.href = `/ticket?id=${apiResponse.data.ticketId}`;
        } catch (error) {
            console.error('Error making authenticated request:', error);
            setErrorMessage('You can\'t book two tickets at the same time. Please try again.');
            // Handle the error
        }
    };

    return (
        <Container className='my-4' style={{
            'position': 'sticky',
            'minHeight': '73vh'

        }}>
            <Form onSubmit={handleButtonClick}>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={userData.firstName}
                                value={userData.firstName}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={userData.lastName}
                                value={userData.lastName}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={userData.phoneNumber}
                                value={userData.phoneNumber}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={userData.email}
                                value={userData.email}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Selected Time</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={localStorage.getItem('time')}
                                value={time}
                                onChange={(e) => settime(e.target.value)}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Selected Parking</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={{ parkingName }}
                                value={parking}
                                onChange={(e) => setParking(e.target.value)}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Selected Slot</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={localStorage.getItem('seat')}
                                value={slotNumber}
                                onChange={(e) => setSlot(e.target.value)}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Car Model</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={userData.carModel}
                                value={carModel}
                                onChange={(e) => setCarModel(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Car Color</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={userData.carColor}
                                value={carColor}
                                onChange={(e) => setCarColor(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Car Plate number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={userData.carPlateNumber}
                                value={carPlateNumber}
                                onChange={(e) => setCarPlate(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Payment Method</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={payMethod}
                                onChange={(e) => setPayMethod(e.target.value)}
                            >
                                <option>Select a Method</option>
                                <option value="cash">Cash</option>
                                <option value="visa">Visa (please fill your info inside the visa card)</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        {payMethod === "visa" && <div className="visa-card mb-3">
                            <div className="logoContainer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="23"
                                    height="23"
                                    viewBox="0 0 48 48"
                                    className="svgLogo"
                                >
                                    <path
                                        fill="#ff9800"
                                        d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                                    ></path>
                                    <path
                                        fill="#d50000"
                                        d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                                    ></path>
                                    <path
                                        fill="#ff3d00"
                                        d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="number-container">
                                <label className="input-label" for="cardNumber">CARD NUMBER</label>
                                <input
                                    className="inputstyle"
                                    id="cardNumber"
                                    placeholder="XXXX XXXX XXXX XXXX"
                                    name="cardNumber"
                                    type="text"
                                />
                            </div>

                            <div className="name-date-cvv-container">
                                <div className="name-wrapper">
                                    <label className="input-label" for="holderName">CARD HOLDER</label>
                                    <input
                                        className="inputstyle"
                                        id="holderName"
                                        placeholder="NAME"
                                        type="text"
                                    />
                                </div>

                                <div className="expiry-wrapper">
                                    <label className="input-label" for="expiry">VALID THRU</label>
                                    <input className="inputstyle" id="expiry" placeholder="MM/YY" type="text" />
                                </div>
                                <div className="cvv-wrapper">
                                    <label className="input-label" for="cvv">CVV</label>
                                    <input
                                        className="inputstyle"
                                        placeholder="***"
                                        maxlength="3"
                                        id="cvv"
                                        type="password"
                                    />
                                </div>
                            </div>
                        </div>}

                    </Col>
                </Row>
                <Row>
                {errorMessage && <Form.Text style={{ color: '#ff4040' }}>
                    {errorMessage}
                </Form.Text>}
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            className='btn-53'
                            style={{ width: '100px', borderColor: '#323437' }}
                            variant='light'
                            href={`/booking/chooseSlot?parkingId=${parkingId}&parkingName=${encodeURIComponent(parkingName)}`}>
                            <div className="original" style={{ background: '#aaa' }}>Back</div>
                            <div className="letters">
                                <span>B</span>
                                <span>A</span>
                                <span>C</span>
                                <span>K</span>
                            </div>
                        </Button>
                        <Button
                            style={{ width: '100px', borderColor: '#323437' }}
                            className='ms-3 btn-53'
                            variant="light"
                            type="submit">
                            <div className="original" style={{ background: '#E9B824' }}>Submit</div>
                            <div className="letters">
                                <span>S</span>
                                <span>U</span>
                                <span>B</span>
                                <span>M</span>
                                <span>I</span>
                                <span>T</span>
                            </div>
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default ConfParking;