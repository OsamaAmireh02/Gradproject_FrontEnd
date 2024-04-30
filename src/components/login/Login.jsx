import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:8080/api/login', {
                email,
                password
            });

            // Store token and email in local storage
            localStorage.setItem('token', response.data.jwtToken);
            localStorage.setItem('email', response.data.email);

            // Send another POST request to retrieve user info
            const userInfoResponse = await axios.post('http://localhost:8080/user/getByEmail', {
                email: response.data.email
            }, {
                headers: {
                    Authorization: `Bearer ${response.data.jwtToken}` // Include the token in the request header
                }
            });

            // Assuming the user info is returned as an object with properties like 'name', 'age', etc.
            const userInfo = userInfoResponse.data;

            // You can handle the user info as needed (e.g., display it on the UI)
            //console.log('User Info:', userInfo);
            localStorage.setItem('role', userInfo.userRole);
            localStorage.setItem('id', userInfo.id);
            // Redirect to home page
            window.location.href = '/';
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };
    
    return (
        <Container className='my-3'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="light" type="submit" style={{ backgroundColor: '#627254', color: '#ffffff' }}>
                    Submit
                </Button>
                <Button variant="warning" type="reset" className='mx-3'>
                    Clear
                </Button>
            </Form>
        </Container>
    );
}

export default Login;