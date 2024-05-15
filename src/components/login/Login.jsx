import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';
import './login.css'

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
            'minWidth': '250px',
            'maxWidth': '500px',
            'position': 'sticky',
            'top': '1000px',
            'minHeight': '74vh'

        }}>
            <h1 style={{ color: 'white' }} className='my-3'>Welcome Back</h1>
            <Form onSubmit={handleLogin}>
                <div className="inputbox mb-4">
                    <input type="email" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span>Username</span>
                    <i></i>
                </div>
                <div className="inputbox">
                    <input type="password" required="required" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span>Password</span>
                    <i></i>
                </div>

                {errorMessage && <Form.Text style={{ color: '#ff4040' }}>
                    {errorMessage}
                </Form.Text>}
                <br />
                <Button className='btn-53' variant='warning' type="submit">
                    <div class="original">LogIn</div>
                    <div class="letters">
                        <span>L</span>
                        <span>O</span>
                        <span>G</span>
                        <span>I</span>
                        <span>N</span>
                    </div>
                </Button>
            </Form>
        </Container>
    );
}

export default Login;