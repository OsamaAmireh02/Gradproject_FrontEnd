import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import makeAuthenticatedRequest from '../userTable/Api';
import { Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';


function TicketTable() {

  const SortByDate = async () => {
    try {
      const url = 'http://localhost:8080/ticket/getByDate';
      const token = localStorage.getItem('token'); // Replace with your actual token

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(url, config);
      setResponseData(response.data); // Save the response data
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error
    }
  };

  const SortByUserName = async () => {
    try {
      const url = 'http://localhost:8080/ticket/getByStudentName';
      const token = localStorage.getItem('token'); // Replace with your actual token

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(url, config);
      setResponseData(response.data); // Save the response data
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error
    }
  };

  const SortByParkingName = async () => {
    try {
      const url = 'http://localhost:8080/ticket/getByParkingName';
      const token = localStorage.getItem('token'); // Replace with your actual token

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(url, config);
      setResponseData(response.data); // Save the response data
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error
    }
  };
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
    <>
      <Row>
        <Col>
          <Button variant='warning' onClick={SortByParkingName}>Sort By Parking Name</Button>
        </Col>
        <Col>
          <Button variant='warning' onClick={SortByUserName}>Sort By Student Name</Button>
        </Col>
        <Col>
          <Button variant='warning' onClick={SortByDate}>Sort By Date</Button>
        </Col>
      </Row>




      <Table striped variant='dark' className='my-3'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Parking Name</th>
            <th>Date</th>
            <th>Starting Time</th>
            <th>Slot Number</th>
            <th>Car Model</th>
            <th>Car Color</th>
            <th>Car Plate Number</th>
            <th>Ticket Status</th>
          </tr>
        </thead>
        <tbody>
          {responseData.map(ticket => <tr>
            <td>{ticket.firstName}</td>
            <td>{ticket.lastName}</td>
            <td>{ticket.parkingName}</td>
            <td>{ticket.date}</td>
            <td>{ticket.fromTime}</td>
            <td>{ticket.slotNumber}</td>
            <td>{ticket.carModel}</td>
            <td>{ticket.carColor}</td>
            <td>{ticket.carPlateNumber}</td>
            <td>{ticket.ticketStatus}</td>
          </tr>)}
        </tbody>
      </Table>
    </>
  );
}

export default TicketTable;