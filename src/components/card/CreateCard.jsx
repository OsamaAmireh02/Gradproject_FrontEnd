import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import makeAuthenticatedRequest from '../userTable/Api';
import './card.css'
import PostMethod from '../PostMethod';

function CreateCard() {
  const [responseData, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [available, setAvailable] = useState();
  const [parkingId, setParkingId] = useState(1);

  const getAvailable = async (parkingId) => {
    try {
      const data = { parkingId };
      const endpoint = '/ticket/getByParkingIdAndTime';
      const response = await PostMethod(endpoint, data);
      setAvailable(response); // Set available data
      console.log(response);
      console.log(available);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await makeAuthenticatedRequest('/parking/all');
      setResponseData(response.data);
      console.log(response.data);
      //setParkingId(response.data[2].id); // Use response.data directly
      setIsLoading(false);
      await getAvailable(parkingId); // Wait for getAvailable() to complete
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run once on mount

  if (isLoading) {
    return null; // Render loading state or spinner
  }


  return (
    <>
      <Row className="my-4" style={{
        'position': 'sticky',
        'top': '50px',
        'position': 'sticky',
        'minHeight': '73vh'
      }}>
        {responseData.map(parking => (
          <Col lg={6} className="my-3" key={parking.id}>
            {/* Use the Card component as a button */}
            <Card
              as="a" // Set the Card component as an anchor (button)
              href={`/booking/chooseSlot?parkingId=${parking.id}&parkingName=${encodeURIComponent(parking.name)}`}
              className="text-decoration-none py-4" // Remove underline
              style={{
                color: 'black',
                cursor: 'pointer', // Show pointer cursor on hover
                backgroundColor: '#f0f1ee', // Light gray background
                border: 'none', // Remove border
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
                borderRadius: '8px', // Rounded corners
                transition: 'transform 0.2s ease', // Smooth hover effect
              }}
            >
              <Card.Body>
                <Container>
                  <Card.Title><h2>{parking.name}</h2></Card.Title>
                  <Card.Text>
                    This Parking have {parking.numberOfSlot} slots. <br />
                    This Parking have {parking.numberOfAvailableSlot} available slots right now. <br />
                  </Card.Text>

                  <div className="ratio ratio-21x9">
                    <iframe
                      src={parking.address}
                      title="Parking location"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ border: '2px solid black', borderRadius: '5px' }}
                    ></iframe>
                  </div>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </>
  );
}

export default CreateCard;