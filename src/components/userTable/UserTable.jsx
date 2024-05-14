import React, { useState, useEffect } from 'react';
import makeAuthenticatedRequest from './Api';
import { Button, Modal, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast'; // Import the Toast component
import axios from 'axios';

function UserTable() {

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [ticketId, setTicketId] = useState();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const isSuccess = queryParams.get('success') === 'true';
    const isDeleted = queryParams.get('deleted') === 'true';
    const [responseData, setResponseData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showToast, setShowToast] = useState(false); // State for controlling the toast

    // Simulate showing the toast after a successful action (e.g., user added)
    useEffect(() => {
        // Set showToast to true after a successful action (e.g., user added)
        // For demonstration purposes, I'll simulate it after 3 seconds
        const timer = setTimeout(() => {
            setShowToast(true);
        }, 500);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    const fetchData = async () => {
        try {
            const response = await makeAuthenticatedRequest('/user/getActiveUsers');
            setResponseData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const api = axios.create({
        baseURL: 'http://localhost:8080', // Replace with your API base URL
    });

    const handleDeactivateClick = (userId) => {
        setShowConfirmation(true);
        // You can also pass userId to your changeStatus function here
        setTicketId(userId);
    };

    const changeStatus = async (userId) => {
        const endpoint = `/user/delete/${userId}`;
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token not found. Please authenticate first.');
                return null;
            }

            // Set the Authorization header
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Show confirmation modal
            setShowConfirmation(true);
            const response = await api.post(endpoint);
            window.location.href = '/admin/users?deleted=true';
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return null; // Render loading state or spinner
    }

    return (
        <>
            <Table striped variant='dark' className='table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>faculty</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {responseData.map(user => <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.faculty}</td>
                        <td>{user.userRole}</td>
                        <td><Button onClick={() => handleDeactivateClick(user.id)} variant='danger'>
                            Delete User
                        </Button></td>
                        {/* Confirmation modal */}
                        <Modal show={showConfirmation}>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirm Deactivation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you sure you want to deactivate this user?</Modal.Body>
                            <Modal.Footer>
                                <Button variant='secondary' onClick={() => setShowConfirmation(false)}>
                                    Cancel
                                </Button>
                                <Button variant='danger' onClick={() => changeStatus(ticketId)}>
                                    Confirm
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </tr>
                    )}

                </tbody>
            </Table>
            {isSuccess && (
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    delay={5000} // Set the delay (in milliseconds) for auto-closing
                    autohide
                    style={{ position: 'fixed', top: 20, right: 20 }} // Position the toast
                >
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>User added successfully!</Toast.Body>
                </Toast>
            )}

            {isDeleted && (
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    delay={5000} // Set the delay (in milliseconds) for auto-closing
                    autohide
                    style={{ position: 'fixed', top: 20, right: 20 }} // Position the toast
                >
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>User successfully deactivated!</Toast.Body>
                </Toast>
            )}

        </>
    );
}

export default UserTable;
