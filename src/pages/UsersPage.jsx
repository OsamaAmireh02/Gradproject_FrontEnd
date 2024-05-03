import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/navbar/NavBar'
import UserTable from '../components/userTable/UserTable'
import { Button, Container } from 'react-bootstrap'
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
 {
    "id":"1",
    "firstName": "Osama",
    "lastName": "moh",
    "DOB": "2002-06-25",
    "gender": "male", 
    "email": "osamaalali788@gmail.com",
    "password": "12345678",
    "phoneNumber": "0778926680",
    "userRole": "User"
 },{
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
  
function UsersPage() {
    return (
        <div style={{
            // paddingTop: '50px'
        }}>
            <NavBar />
            <SideBar
                table={<UserTable />}
                button={<Container className='mb-3'><Button href='/admin/addUser' variant='warning'>Add User</Button></Container>}
            />
        </div>
    )
}

export default UsersPage
