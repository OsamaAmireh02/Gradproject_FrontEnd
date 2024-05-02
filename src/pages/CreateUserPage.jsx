import React from 'react'
import NavBar from '../components/navbar/NavBar'
import AddUser from '../components/addUser/AddUser'
import Footer from '../components/footer/Footer'

function CreateUserPage() {
  return (
    <div style={{
      // paddingTop: '50px',
  }}>
      <NavBar />
      <AddUser />
      <Footer />
    </div>
  )
}

export default CreateUserPage
