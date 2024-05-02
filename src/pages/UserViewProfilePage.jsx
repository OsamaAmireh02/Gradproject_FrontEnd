import React from 'react'
import NavBar from '../components/navbar/NavBar'
import UserProfile from '../components/viewMyProfile/UserProfile'
import Footer from '../components/footer/Footer'

function UserViewProfilePage() {
  return (
    <div style={{
      // paddingTop: '50px'
    }}>
      <NavBar />
      <UserProfile />
      <Footer />
    </div>
  )
}

export default UserViewProfilePage
