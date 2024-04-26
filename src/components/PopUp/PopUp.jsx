import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Parkings from '../parking/ParkingChoose';

function ParkingBooking() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow} style={{backgroundColor: '#627254', color: '#ffffff'}}>
                Book Now
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Parking 1</Modal.Title>
                </Modal.Header>
                <Modal.Body><Parkings /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ParkingBooking;