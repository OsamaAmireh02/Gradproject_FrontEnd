import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer';
import Parkings from '../components/parking/ParkingChoose';
import { Button } from 'react-bootstrap';
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
      <Button variant='dark' href='/booking'>Back</Button>
      <Button variant='dark' href={`/booking/submit?parkingName=${encodeURIComponent(parkingName)}`}>Next</Button>
      <Footer />
    </div>
  )
}

export default ChooseSlotPage
