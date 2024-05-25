import { useState } from 'react';
import { Col, Container, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostMethod from '../PostMethod';

function AddUser() {

    const blk = { color: 'white' };
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [faculty, setFaculty] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [userRole, setUeserRole] = useState('');

    const [errorMessage, setErrorMessage] = useState('');


    const handleButtonClick = async (e) => {
        const endpoint = '/user/save'; // Replace with your actual endpoint
        const requestData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            userRole,
            faculty
        }; // Your data object

        try {
            e.preventDefault();
            const apiResponse = await PostMethod(endpoint, requestData);
            console.log('API Response:', apiResponse);
            window.location.href = '/admin/users?success=true';
        } catch (error) {
            console.error('Error making authenticated request:', error);
            setErrorMessage('Please check your data and try again.');
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
                                onChange={(e) => {
                                    const input = e.target.value;
                                    const validFirstName = /^[A-Za-z]+$/.test(input);
                                    if (validFirstName) {
                                        setFirstName(input);
                                    }
                                }}
                                required="required"
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
                                onChange={(e) => {
                                    const input = e.target.value;
                                    const validLastName = /^[A-Za-z]*$/.test(input); // Regular expression for letters only
                                    if (validLastName) {
                                        setLastName(input);
                                    }
                                }}
                                required="required"
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
                                required="required"
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
                                onChange={(e) => setEmail((e.target.value).toLowerCase())}
                                required="required"
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
                                required="required"
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
                            <Form.Select
                                aria-label="Default select example"
                                value={faculty}
                                onChange={(e) => setFaculty(e.target.value)}
                            >
                                <option >Select the faculty</option>
                                <option value="Science">School of Science</option>
                                <option value="Agriculturee">School of Agriculturee</option>
                                <option value="Engineering">School of Engineering</option>
                                <option value="IT">King Abdullah II School for Information Technology</option>
                                <option value="Arts">School of Arts</option>
                                <option value="Business">School of Business</option>
                                <option value="Sharia">School of Sharia</option>
                                <option value="Educational">School of Educational Sciences</option>
                                <option value="Law">School of Law</option>
                                <option value="Nursing">School of Nursing</option>
                                <option value="Medicine">School of Medicine</option>
                                <option value="Pharmacy">School of Pharmacy</option>
                                <option value="Physical">School of Physical Education</option>
                                <option value="Arts">School of Arts and Design</option>
                                <option value="International">School of International Studies</option>
                                <option value="languages">School of Foreign languages</option>
                                <option value="Archaeology">School of Archaeology and Tourism</option>
                                <option value="Dentistry">School of Dentistry</option>
                                <option value="Rehabilitation">School of Rehabilitation Sciences</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>}
                {errorMessage && <div className="error-message mb-3" style={{ color: '#ff4040' }}>{errorMessage}</div>}
                <Button variant="warning" type="submit">
                    Add User
                </Button>
            </Form>
        </Container>
    </>
    );
}

export default AddUser;