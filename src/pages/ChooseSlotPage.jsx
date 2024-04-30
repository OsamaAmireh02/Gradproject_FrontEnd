import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer';
import Parkings from '../components/parking/ParkingChoose';
import { Button } from 'react-bootstrap';

function ChooseSlotPage() {
  return (
    <div>
      <NavBar />
      <Parkings />
      <Button variant='dark' href='/booking'>Back</Button>
      <Button variant='dark' href='/booking/submit'>Next</Button>
      <Footer />
    </div>
  )
}

export default ChooseSlotPage
