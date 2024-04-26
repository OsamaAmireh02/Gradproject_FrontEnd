import Table from 'react-bootstrap/Table';

const tickets = [{
    "firstName": "Osama",
    "lastName": "moh",
    "phoneNumber": "0778926680",
    "parkingName": "3lmieh",
    "date": "2024-04-21",
    "fromTime": "08:00:00",
    "toTime": "04:00:00",
    "slotNumber": 1,
    "ticketStatus": "active",
    "carModel": "Rolls Royce",
    "carColor": "Black",
    "carPlateNumber": "78155206",
    "userId": 1,
    "parkingId": 2,
    "slotId": 3
  },
  {
    "firstName": "Osama",
    "lastName": "moh",
    "phoneNumber": "0778926680",
    "parkingName": "3lmieh",
    "date": "2024-04-21",
    "fromTime": "08:00:00",
    "toTime": "04:00:00",
    "slotNumber": 1,
    "ticketStatus": "active",
    "carModel": "Rolls Royce",
    "carColor": "Black",
    "carPlateNumber": "78155206",
    "userId": 1,
    "parkingId": 2,
    "slotId": 3
  }]

function TicketTable(ticket) {
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
                {tickets.map(ticket => <tr>
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