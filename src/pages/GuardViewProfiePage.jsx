import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import GuardProfile from '../components/viewMyProfile/GuardProfie'

function GuardViewProfiePage() {
  return (
    <div style={{
      // paddingTop: '50px',
  }}>
      <NavBar />
      <GuardProfile />
      <Footer />
    </div>
  )
}

export default GuardViewProfiePage
