import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row, Toast } from 'react-bootstrap'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './style.css'
import moment from 'moment';


function TicketsHistory() {
    const currentTime = new Date();
    const halfHourBeforeCurrentTime = new Date(currentTime.getTime() + 30 * 60 * 1000);
    const formattedTime = moment(halfHourBeforeCurrentTime).format('HH:mm:ss');
    const formattedDate = moment().format('YYYY-MM-DD');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [ticketId, setTicketId] = useState();
    const [showToast, setShowToast] = useState(false); // State for controlling the toast
    const location = useLocation();
    const isDone = new URLSearchParams(location.search).get('isDone');
    const [userTickets, setUserTickets] = useState([]);
    const userId = localStorage.getItem('id');
    useEffect(() => {
        // Set showToast to true after a successful action (e.g., user added)
        // For demonstration purposes, I'll simulate it after 3 seconds
        const timer = setTimeout(() => {
            setShowToast(true);
        }, 500);
        return () => clearTimeout(timer); // Clean up the timer
    }, []);
    const api = axios
        .create({
            baseURL: 'http://localhost:8080', // Replace with your API base URL
        });

    const handleDeactivateClick = (userId) => {
        setShowConfirmation(true);
        // You can also pass userId to your changeStatus function here
        setTicketId(userId);
    };

    const deleteTicket = async (ticketId) => {

        const endpoint = `ticket/cancel/${ticketId}`;

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
            // Make the request using POST method
            const response = await api.post(endpoint);
            console.log("On Delete. ticketid: " + ticketId)
            window.location.href = `/student/tickets?isDone=true`;
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error
        }
    }

    const fetchData = async () => {
        console.log("time:" + formattedTime)
        console.log("Date:" + formattedDate)

        const endpoint = `/ticket/getByUserId/${userId}`; // Replace with your actual endpoint

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token not found. Please authenticate first.');
                return null;
            }

            // Set the Authorization header
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // Make the request using POST method
            const response = await api.post(endpoint);
            console.log(response.data);
            setUserTickets(response.data);
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error
        }
    }

    useEffect(() => {
        // Set showToast to true after a successful action (e.g., user added)
        // For demonstration purposes, I'll simulate it after 3 seconds
        const timer = setTimeout(() => {
            setShowToast(true);
        }, 500);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div style={{
            'position': 'sticky',
            'minHeight': '77vh'

        }}>
            <Container className='my-3'>
                <div className="ticketContainer">
                    <Row>
                        {userTickets.map(ticket => (
                            <Col key={ticket.ticketId} className='mb-3'>
                                <div className="tickett" key={ticket.ticketId}>
                                    <a href={`/ticket/?id=${ticket.ticketId}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        <div className="ticketTitle">{ticket.ticketStatus}</div>
                                        <div className="ticketDetail">
                                            <div>Parking Name:&ensp; {ticket.parkingName}</div>
                                            <div>Slot Number:&nbsp; {ticket.slotNumber}</div>
                                            <div>Time:&emsp; {ticket.fromTime}</div>
                                        </div>
                                        <div className="ticketRip">
                                            <div className="circleLeft"></div>
                                            <div className="ripLine"></div>
                                            <div className="circleRight"></div>
                                        </div>
                                        <div className="ticketSubDetail">
                                            <div className="code">LO-2314XXX</div>
                                            <div className="date"> {ticket.date}</div>
                                        </div>
                                    </a>
                                    {(ticket.fromTime > formattedTime && ticket.date >= formattedDate) && (
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Button
                                                variant='danger'
                                                onClick={() => handleDeactivateClick(ticket.ticketId)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    )}
                                    <div className="ticketShadow"></div>
                                </div>
                                {/* Confirmation modal */}
                                <Modal show={showConfirmation}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Cancel Confirmation</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Are you sure you want to cancel this ticket?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant='secondary' onClick={() => setShowConfirmation(false)}>
                                            Cancel
                                        </Button>
                                        <Button variant='danger' onClick={() => deleteTicket(ticketId)}>
                                            Confirm
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
            {isDone && (
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
                    <Toast.Body>Ticket deleted successfully!</Toast.Body>
                </Toast>
            )}
        </div>
    )
}

export default TicketsHistory
