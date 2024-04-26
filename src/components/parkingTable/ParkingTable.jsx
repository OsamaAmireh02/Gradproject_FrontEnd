import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import makeAuthenticatedRequest from '../userTable/Api';


function ParkingsTable() {
    const [responseData, setResponseData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await makeAuthenticatedRequest('/parking/all');
            console.log(responseData)
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
                    <th>Parking Name</th>
                    <th>Address</th>
                    <th>No. Of Slots</th>
                    <th>No. Of Available Slots</th>
                </tr>
            </thead>
            <tbody>
                {responseData.map(parking => <tr>
                    <td>{parking.name}</td>
                    <td>{parking.address}</td>
                    <td>{parking.numberOfSlot}</td>
                    <td>{parking.numberOfAvailableSlot}</td>
                </tr>)}
            </tbody>
        </Table>
    );
}

export default ParkingsTable;