import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/navbar/NavBar'
import TicketTable from '../components/ticketTable/TicketTable'
import { Button } from 'react-bootstrap'



function TicketPage() {
    return (
        <div>
            <NavBar />
            <SideBar
                table={<TicketTable/>}
            />
        </div>
    )
}

export default TicketPage
