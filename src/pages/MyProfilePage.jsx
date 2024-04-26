import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import ViewProfile from '../components/viewMyProfile/ViewProfile'
import { Button, Row } from 'react-bootstrap'

const users = [{
  "id":"1",
  "firstName": "Osama",
  "lastName": "moh",
  "DOB": "2002-06-25",
  "gender": "male", 
  "email": "osamaalali788@gmail.com",
  "password": "12345678",
  "phoneNumber": "0778926680",
  "userRole": "Admin"
},
]
function MyProfilePage() {
  return (
    <div>
      <NavBar />
      {users.map(user => 
      <ViewProfile 
      id = {user.id}
      firstName = {user.firstName}
      lastName = {user.lastName}
      DOB = {user.DOB}
      gender = {user.gender}
      email = {user.email}
      phoneNumber = {user.phoneNumber}
      userRole = {user.userRole}
      />)}
      
      <Footer />
    </div>
  )
}

export default MyProfilePage
