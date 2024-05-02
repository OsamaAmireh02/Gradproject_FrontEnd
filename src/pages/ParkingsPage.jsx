import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/navbar/NavBar'
import ParkingsTable from '../components/parkingTable/ParkingTable'
import { Button } from 'react-bootstrap'


function ParkingsPage() {
    return (
        <div style={{
            // paddingTop: '50px'
        }}>
            <NavBar />
            <SideBar
                table={<ParkingsTable />}
                button={<Button href='/admin/addParking'>Add Parking</Button>}
            />
        </div>
    )
}

export default ParkingsPage
