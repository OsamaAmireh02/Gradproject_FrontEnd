import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Toast } from 'react-bootstrap'
import axios from 'axios';
import { useLocation } from 'react-router-dom';


function TicketsHistory() {

    const [showToast, setShowToast] = useState(false); // State for controlling the toast
    const location = useLocation();
    const isDone = new URLSearchParams(location.search).get('isDone');
    const [userTickets, setUserTickets] = useState([]);
    const userId = localStorage.getItem('id');
    const api = axios
        .create({
            baseURL: 'http://localhost:8080', // Replace with your API base URL
        });


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
            'minHeight': '75vh'

        }}>
            <Container className='my-3'>
                <Row>
                    {userTickets.map(ticket => (
                        <Col lg={4} key={ticket.ticketId}>

                            <Card className="text-center" >
                                <Card.Header>
                                    Ticket Status: {ticket.ticketStatus}
                                </Card.Header>
                                <Card.Body>
                                    <a href={`/ticket/?id=${ticket.ticketId}`} style={{ textDecoration: 'none' }}>
                                        <Card.Title>Parking Name: {ticket.parkingName}</Card.Title>
                                        <Card.Text>
                                            Time: {ticket.fromTime}<br />
                                            {ticket.date}
                                        </Card.Text>
                                    </a>
                                </Card.Body>
                                <Card.Footer><Button variant='danger' onClick={() => deleteTicket(ticket.ticketId)}>Delete</Button></Card.Footer>
                            </Card>

                        </Col>
                    ))}
                </Row>
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
