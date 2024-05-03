import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer';
import Parkings from '../components/parking/ParkingChoose';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function ChooseSlotPage() {
  const location = useLocation();
  const parkingName = new URLSearchParams(location.search).get('parkingName');

  return (
    <div style={{
      // paddingTop: '50px',
    }}>
      <NavBar />
      <Parkings />
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Button style={{width: '100px'}} variant='dark' href='/booking'>Back</Button>
        <Button style={{width: '100px'}} className='mx-3' variant='warning' href={`/booking/submit?parkingName=${encodeURIComponent(parkingName)}`}>Next</Button>
      </Container>


      <Footer />
    </div>
  )
}

export default ChooseSlotPage
