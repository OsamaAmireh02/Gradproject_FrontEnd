import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import AddParking from '../components/addParking/AddParking'

function AddParkingPage() {
  return (
    <div style={{
      // paddingTop: '50px',
    }}>
      <NavBar />
      <AddParking />
      <Footer />
    </div>
  )
}

export default AddParkingPage
