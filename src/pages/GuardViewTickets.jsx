import React from 'react'
import NavBar from '../components/navbar/NavBar'
import TicketTable from '../components/ticketTable/TicketTable'
import { Container } from 'react-bootstrap'


function GuardViewTickets() {
  return (
    <div>
      <NavBar />
      <Container className='mt-3'>
        <TicketTable />
      </Container>
    </div>
  )
}

export default GuardViewTickets
