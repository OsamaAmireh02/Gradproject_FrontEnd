import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';


function TicketsHistory() {

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
            console.log("ticketid: " + ticketId)
            // Set the Authorization header
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // Make the request using POST method
            const response = await api.post(endpoint);
            console.log(response.data);
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
        fetchData();
    }, []);
    return (
        <div>
            <Container className='my-3'>
                <Row>
                    {userTickets.map(ticket => (
                        <Col lg={4} key={ticket.ticketId}>
                            <a href={`/ticket/?id=${ticket.ticketId}`} style={{ textDecoration: 'none' }}>
                                <Card className="text-center" >
                                    <Card.Header>
                                        Ticket Status: {ticket.ticketStatus}
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>Parking Name: {ticket.parkingName}</Card.Title>
                                        <Card.Text>
                                            Time: {ticket.fromTime}<br />
                                            {ticket.date}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer><Button variant='danger' onClick={() => deleteTicket(ticket.ticketId)}>Delete</Button></Card.Footer>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default TicketsHistory
