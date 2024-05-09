import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostMethod from '../PostMethod';

function AddUser() {

    const blk = { color: 'white' };
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [facilty, setFacilty] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [userRole, setUeserRole] = useState('');

    const handleButtonClick = async (e) => {
        const endpoint = '/user/save'; // Replace with your actual endpoint
        const requestData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            userRole,
            facilty
        }; // Your data object

        try {
            e.preventDefault();
            const apiResponse = await PostMethod(endpoint, requestData);
            console.log('API Response:', apiResponse);
            window.location.href = '/admin/users?success=true';
        } catch (error) {
            console.error('Error making authenticated request:', error);
            // Handle the error
        }
    };

    return (<>
        <Container className='my-3' style={{
            width: '80%',
            'position': 'sticky',
            'height': '74vh'

        }}>
            <Form onSubmit={handleButtonClick}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>First Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
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
                                placeholder="Enter Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Role</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={userRole}
                                onChange={(e) => setUeserRole(e.target.value)}
                            >
                                <option >Select a role</option>
                                <option value="STUDENT">Student</option>
                                <option value="ADMIN">Admin</option>
                                <option value="GUARD">Guard</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                {userRole === "STUDENT" && <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={blk}>Facilty</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Facilty"
                                value={facilty}
                                onChange={(e) => setFacilty(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>}

                <Button variant="warning" type="submit">
                    Add User
                </Button>
            </Form>
        </Container>
    </>
    );
}

export default AddUser;