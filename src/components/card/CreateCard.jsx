import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
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
    <Row className="my-4" style={{
      'position': 'sticky',
      'top': '50px',
    }}>
      {responseData.map(parking => (
        <Col lg={4} className="my-3" key={parking.id}>
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
              <Card.Title><strong>{parking.name}</strong></Card.Title>
              <Card.Text>
                This Parking have {parking.numberOfSlot} slots. <br />
                <iframe
                  src={parking.address}
                  width="300"
                  height="300"
                  style={{ border: 1 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CreateCard;