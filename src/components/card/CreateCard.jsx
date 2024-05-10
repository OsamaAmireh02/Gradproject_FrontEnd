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
              <Card.Title><strong>{parking.name}</strong></Card.Title>
              <Card.Text>
                This Parking have {parking.numberOfSlot} slots. <br />
                <Container className='mx-4'>
                  <iframe
                  className='my-3'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40005.46259253509!2d35.897279159918405!3d31.93100518875465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca07139c70a21%3A0xc5b2f8903093b109!2sRoman%20Theater!5e0!3m2!1sen!2sjo!4v1715340853580!5m2!1sen!2sjo"
                    width="500"
                    height="300"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </Container>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CreateCard;