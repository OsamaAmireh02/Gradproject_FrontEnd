import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/navbar/NavBar'
import TicketTable from '../components/ticketTable/TicketTable'



function TicketPage() {
    return (
        <div style={{
            // paddingTop: '50px'
        }}>
            <NavBar />
            <SideBar
                table={<TicketTable/>}
            />
        </div>
    )
}

export default TicketPage
