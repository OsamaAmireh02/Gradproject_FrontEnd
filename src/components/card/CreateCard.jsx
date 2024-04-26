import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import * as React from 'react';
import ParkingBooking from '../PopUp/PopUp';
import { Row } from 'react-bootstrap';


function CreateCard() {
    const [anchor, setAnchor] = React.useState(null);

    const handleClick = (event) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popup' : undefined;

    const parkings = [{
        "name": "Zera'aa",
        "address": "Amman",
        "numberOfSlot": 44,
        "numberOfAvailableSlot": 24
    },
    {
        "name": "Zera'aa",
        "address": "Amman",
        "numberOfSlot": 44,
        "numberOfAvailableSlot": 24
    },
    {
        "name": "Zera'aa",
        "address": "Amman",
        "numberOfSlot": 44,
        "numberOfAvailableSlot": 24
    },
    {
        "name": "Zera'aa",
        "address": "Amman",
        "numberOfSlot": 44,
        "numberOfAvailableSlot": 24
    }
     ]

    return (
        <Row>
        {parkings.map(parking => <Col lg={3} className='my-2'>
            <Card>
                <Card.Body>
                    <Card.Title>{parking.name}</Card.Title>
                    <Card.Text>
                        Location: {parking.address}<br /><br />
                        No. of available parking lots from 09:00 - 10:00 is {parking.numberOfAvailableSlot}.<br /><br />
                        No. of available parking lots from 10:00 - 11:00 is {parking.numberOfAvailableSlot}.<br /><br />
                        No. of available parking lots from 11:00 - 12:00 is {parking.numberOfAvailableSlot}.<br /><br />
                    </Card.Text>
                    <ParkingBooking />
                </Card.Body>
            </Card>
        </Col>)}
        </Row>
    );
}

export default CreateCard;