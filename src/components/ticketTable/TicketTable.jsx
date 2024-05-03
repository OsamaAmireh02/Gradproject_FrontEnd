import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import makeAuthenticatedRequest from '../userTable/Api';


function TicketTable() {

    const [responseData, setResponseData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await makeAuthenticatedRequest('/ticket/all');
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
        <Table striped>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Parking Name</th>
                    <th>From Time</th>
                    <th>To Time</th>
                    <th>Slot Number</th>
                    <th>Ticket Status</th>
                    <th>Car Model</th>
                    <th>Car Color</th>
                    <th>Car Plate Number</th>
                </tr>
            </thead>
            <tbody>
                {responseData.map(ticket => <tr>
                    <td>{ticket.userId}</td>
                    <td>{ticket.parkingName}</td>
                    <td>{ticket.fromTime}</td>
                    <td>{ticket.toTime}</td>
                    <td>{ticket.slotNumber}</td>
                    <td>{ticket.ticketStatus}</td>
                    <td>{ticket.carModel}</td>
                    <td>{ticket.carColor}</td>
                    <td>{ticket.carPlateNumber}</td>
                </tr>)}
            </tbody>
        </Table>
    );
}

export default TicketTable;