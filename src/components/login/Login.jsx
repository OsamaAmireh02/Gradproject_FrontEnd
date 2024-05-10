import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
            localStorage.setItem('role', userInfo.userRole);
            localStorage.setItem('id', userInfo.id);
            if (userInfo.userStatus == 'DELETED') {
                localStorage.removeItem('token');
                localStorage.removeItem('email');
                localStorage.removeItem('role');
                localStorage.removeItem('id');
                localStorage.removeItem('seat');
                throw "No access"
            }

            // Redirect to home page
            window.location.href = '/';
        } catch (error) {
            console.error('Login failed:', error.message);
            setErrorMessage('Incorrect email or password. Please try again.');
        }
    };
    return (
        <Container className='my-3' style={{
            width: '60%',
            'position': 'sticky',
            'top': '1000px',
            'height': '74vh'

        }}>
            <h1 style={{ color: 'white' }} className='my-3'>Welcome Back</h1>
            <Form onSubmit={handleLogin}>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                {errorMessage && <Form.Text style={{ color: '#ff4040' }}>
                    {errorMessage}
                </Form.Text>}
                <br />
                <Button variant="warning" type="submit" style={{ width: '75px' }}>
                    Login
                </Button>
                <Button variant="light" type="reset" className='mx-3' style={{ width: '75px' }} >
                    Clear
                </Button>
            </Form>
        </Container>
    );
}

export default Login;