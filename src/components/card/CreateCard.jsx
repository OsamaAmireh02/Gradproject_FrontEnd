import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import makeAuthenticatedRequest from '../userTable/Api';
import './card.css'

function CreateCard() {
  const [responseData, setResponseData] = useState([]);

  //function to get all the parkings
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
      <Row className="my-4" style={{
        'position': 'sticky',
        'top': '50px',
        'position': 'sticky',
        'minHeight': '73vh'
      }}>
        {responseData.map(parking => (
          <Col lg={6} className="my-3" key={parking.id}>
            <Card
              as="a"
              href={`/booking/chooseSlot?parkingId=${parking.id}&parkingName=${encodeURIComponent(parking.name)}`}
              className="text-decoration-none py-4"
              style={{
                color: 'black',
                cursor: 'pointer',
                backgroundColor: '#f0f1ee',
                border: 'none',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                transition: 'transform 0.2s ease',
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
                    >
                    </iframe>
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