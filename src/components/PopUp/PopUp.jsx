import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Parkings from '../parking/ParkingChoose';
import ConfParking from '../confPark/ConfParking';

function ParkingBooking(props) {
    const [show, setShow] = useState(false);
    const [contentIndex, setContentIndex] = useState(0); // New state for content tracking

    const handleClose = () => {
        setShow(false);
        setContentIndex(0); // Reset content index when closing the modal
    };

    const handleShow = () => setShow(true);

    const handleNext = () => {
        // Increment the content index when "Next" button is clicked
        setContentIndex((prevIndex) => prevIndex + 1);
    };

    // Define an array of content components
    const contentComponents = [<Parkings />, <ConfParking />, <h1>Hello</h1>];

    return (
        <>
            <Button variant="light" onClick={handleShow} style={{ backgroundColor: '#627254', color: '#ffffff' }}>
                Book Now
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {contentComponents[contentIndex]}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleNext}>
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ParkingBooking;


// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Parkings from '../parking/ParkingChoose';
// import ConfParking from '../confPark/ConfParking';

// function ParkingBooking(props) {
//     const [show, setShow] = useState(false);
//     const [showForm, setShowForm] = useState(false); // New state for form display

//     const handleClose = () => {
//         setShow(false);
//         setShowForm(false); // Close the form when closing the modal
//     };

//     const handleShow = () => setShow(true);

//     const handleNext = () => {
//         setShowForm(true); // Show the form when "Next" button is clicked
//     };

//     return (
//         <>
//             <Button variant="light" onClick={handleShow} style={{ backgroundColor: '#627254', color: '#ffffff' }}>
//                 Book Now
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{props.name}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {showForm ? (
//                         // Display the form when showForm is true
//                         <ConfParking />
//                     ) : (
//                         // Display Parkings component initially
//                         <Parkings />
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleNext}>
//                         Next
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// export default ParkingBooking;
