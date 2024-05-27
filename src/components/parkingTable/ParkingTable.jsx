import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import makeAuthenticatedRequest from '../userTable/Api';
import { useLocation } from 'react-router-dom';
import { Toast } from 'react-bootstrap';


function ParkingsTable() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const isSuccess = queryParams.get('success') === 'true';
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
            const response = await makeAuthenticatedRequest('/parking/all');
            setResponseData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Table striped variant='dark'>
                <thead>
                    <tr>
                        <th>Parking Name</th>
                        <th>No. Of Slots</th>
                        <th>No. Of available slots</th>
                    </tr>
                </thead>
                <tbody>
                    {responseData.map(parking =>
                        <tr key={parking.id}>
                            <td>{parking.name}</td>
                            <td>{parking.numberOfSlot}</td>
                            <td>{parking.numberOfAvailableSlot}</td>
                        </tr>)}
                </tbody>
            </Table>
            {isSuccess && (
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    delay={3000}
                    autohide
                    style={{ position: 'fixed', top: 20, right: 20 }}
                >
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>Parking added successfully!</Toast.Body>
                </Toast>
            )}
        </>
    );
}

export default ParkingsTable;