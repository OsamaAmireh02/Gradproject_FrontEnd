import React from 'react'
import NavBar from '../components/navbar/NavBar'
import TicketTable from '../components/ticketTable/TicketTable'

 
function GuardViewTickets() {
  return (
    <div>
      <NavBar />
      <TicketTable/>
    </div>
  )
}

export default GuardViewTickets
