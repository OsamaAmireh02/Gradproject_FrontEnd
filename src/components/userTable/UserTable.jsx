import React, { useState, useEffect } from 'react';
import makeAuthenticatedRequest from './Api';
import { Alert, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast'; // Import the Toast component

function UserTable() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const isSuccess = queryParams.get('success') === 'true';

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
            const response = await makeAuthenticatedRequest('/user/all');
            setResponseData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
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
            <Table striped variant='dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {responseData.map(user => <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.userRole}</td>
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

        </>
    );
}

export default UserTable;
