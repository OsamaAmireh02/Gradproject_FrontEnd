import React, { useState, useEffect } from 'react';
import makeAuthenticatedRequest from './Api';
import { Button, Modal, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import axios from 'axios';

function UserTable() {

    const adminId = localStorage.getItem('id')
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [ticketId, setTicketId] = useState();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const isSuccess = queryParams.get('success') === 'true';
    const isDeleted = queryParams.get('deleted') === 'true';
    const [responseData, setResponseData] = useState([]);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const fetchData = async () => {
        try {
            const response = await makeAuthenticatedRequest('/user/getActiveUsers');
            setResponseData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const api = axios.create({
        baseURL: 'http://localhost:8080',
    });

    const handleDeactivateClick = (userId) => {
        setShowConfirmation(true);
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

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

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

    return (
        <>
            <div style={{ overflowX: 'auto' }}>
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
                            <td>{user.id != adminId && <Button onClick={() => handleDeactivateClick(user.id)} variant='danger'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="25" height="25" viewBox="0 0 16 16"><path fill="#ffffff" fillRule="evenodd" d="M1 14s-1 0-1-1s1-4 6-4s6 3 6 4s-1 1-1 1zm5-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6m6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708" /></svg>
                                Delete User
                            </Button>}</td>
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
            </div>
            {isSuccess && (
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    delay={5000}
                    autohide
                    style={{ position: 'fixed', top: 20, right: 20 }}
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
                    delay={5000}
                    autohide
                    style={{ position: 'fixed', top: 20, right: 20 }}
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
