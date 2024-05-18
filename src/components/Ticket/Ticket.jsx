import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import QRCode from "react-qr-code";
import axios from 'axios';
import './style.css'

function Ticket(props) {

    const [data, setData] = useState({})
    const [ticketID, setTicketID] = useState('')

    const api = axios.create({
        baseURL: 'http://localhost:8080', // Replace with your API base URL
    });

    const fetchData = async () => {

        const endpoint = `/ticket/getById/${props.ticketId}`; // Replace with your actual endpoint

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
            setData(response.data);
            setTicketID((response.data.ticketId).toString())
            console.log(ticketID);
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
            <div className="ticket">
                <div className="holes-top"></div>
                <div style={{padding: '20px 25px'}}>
                    <p className="cinema">{data.ticketStatus}</p>
                    <p className="movie-title">Ticket Details</p>
                </div>
                <div className="info">
                    <table>
                        <tr>
                            <th style={{width:'33%'}}>Parking Name</th>
                            <th style={{width:'33%'}}>Slot Number</th>
                            <th style={{width:'33%'}}>SEAT</th>
                        </tr>
                        <tr>
                            <td style={{width:'33%'}}>{data.parkingName}</td>
                            <td style={{width:'33%'}}>{data.slotNumber}</td>
                            <td style={{width:'33%'}}>24</td>
                        </tr>
                        </table>
                        <table>
                        <tr>
                            <th style={{width:'33%'}}>PRICE</th>
                            <th style={{width:'33%'}}>DATE</th>
                            <th style={{width:'33%'}}>TIME</th>
                        </tr>
                        <tr>
                            <td style={{width:'33%'}}>$12.00</td>
                            <td style={{width:'33%'}}>{data.date}</td>
                            <td style={{width:'33%'}}>{data.fromTime}</td>
                        </tr>
                        </table>
                        <table>
                        <tr>
                            <th style={{width:'33%'}}>Car Model</th>
                            <th style={{width:'33%'}}>Car Color</th>
                            <th style={{width:'33%'}}>Car Plate Number</th>
                        </tr>
                        <tr>
                            <td style={{width:'33%'}}>{data.carModel}</td>
                            <td style={{width:'33%'}}>{data.carColor}</td>
                            <td style={{width:'33%'}}>{data.carPlateNumber}</td>
                        </tr>
                    </table>
                </div>
                <div className="holes-lower"></div>
                <div className="serial">
                    <table>
                        <tr style={{ display: 'flex', justifyContent: 'center' }}>
                            <QRCode value={ticketID} />
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Ticket
