import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/navbar/NavBar'
import UserTable from '../components/userTable/UserTable'
import { Button } from 'react-bootstrap'
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
        <div>
            <NavBar />
            <SideBar
                table={<UserTable />}
                button={<Button href='/admin/addUser'>Add User</Button>}
            />
        </div>
    )
}

export default UsersPage
