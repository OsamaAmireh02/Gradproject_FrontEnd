import React from 'react'
import NavBar from '../components/navbar/NavBar'
import TicketTable from '../components/ticketTable/TicketTable'

 
function GuardViewTickets() {
  return (
    <div style={{
      // paddingTop: '50px',
  }}>
      <NavBar />
      <TicketTable/>
    </div>
  )
}

export default GuardViewTickets
