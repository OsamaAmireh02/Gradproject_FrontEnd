import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';



function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:8080/api/login',
                {
                    email,
                    password
                });

            localStorage.setItem('token', response.data.jwtToken);
            window.location.href = '/';
                } catch (error) {
            console.error('Login failed: ', error.message);
        };
    }
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