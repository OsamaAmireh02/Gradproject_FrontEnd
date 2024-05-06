import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/navbar/NavBar'
import ParkingsTable from '../components/parkingTable/ParkingTable'
import { Button, Container } from 'react-bootstrap'


function ParkingsPage() {
    return (
        <div>
            <NavBar />
            <SideBar
                table={<ParkingsTable />}
                button={<Container className='mb-3'><Button href='/admin/addParking' variant='warning'>Add Parking</Button></Container>}
            />
        </div>
    )
}

export default ParkingsPage
