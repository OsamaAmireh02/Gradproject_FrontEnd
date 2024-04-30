import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import * as React from 'react';
import ParkingBooking from '../PopUp/PopUp';
import { Button, Row } from 'react-bootstrap';
import makeAuthenticatedRequest from '../userTable/Api';


function CreateCard() {

    const [responseData, setResponseData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const fetchData = async () => {
        try {
            const response = await makeAuthenticatedRequest('/parking/all');
            setResponseData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return null; // Render loading state or spinner
    }



    return (
        <Row>
        {responseData.map(parking => <Col lg={3} className='my-2'>
            <Card>
                <Card.Body>
                    <Card.Title>{parking.name}</Card.Title>
                    <Card.Text>
                        Location: {parking.address}<br /><br />
                        No. of available parking lots from 09:00 - 10:00 is {parking.numberOfAvailableSlot}.<br /><br />
                        No. of available parking lots from 10:00 - 11:00 is {parking.numberOfAvailableSlot}.<br /><br />
                        No. of available parking lots from 11:00 - 12:00 is {parking.numberOfAvailableSlot}.<br /><br />
                    </Card.Text>
                </Card.Body>
                <Card.Footer><Button href='/booking/chooseSlot'>Yalla!</Button></Card.Footer>
            </Card>
        </Col>)}
        </Row>
    );
}

export default CreateCard;