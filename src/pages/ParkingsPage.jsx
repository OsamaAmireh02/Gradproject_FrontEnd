import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/navbar/NavBar'
import ParkingsTable from '../components/parkingTable/ParkingTable'
import { Button } from 'react-bootstrap'


function ParkingsPage() {
    return (
        <div>
            <NavBar />
            <SideBar
                table={<ParkingsTable />}
                button={<Button
                    className='mb-3'
                    href='/admin/addParking'
                    variant='warning'>Add Parking</Button>}
                page="parkings"
            />
        </div>
    )
}

export default ParkingsPage
