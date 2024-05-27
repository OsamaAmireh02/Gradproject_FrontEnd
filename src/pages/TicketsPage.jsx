import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/navbar/NavBar'
import TicketTable from '../components/ticketTable/TicketTable'



function TicketPage() {
    return (
        <div>
            <NavBar />
            <SideBar
                table={<TicketTable/>}
                page="tickets"
            />
        </div>
    )
}

export default TicketPage
