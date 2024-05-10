import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import TicketsHistory from '../components/ticketsHistory/TicketsHistory'

function UserTickets() {
  return (
    <div>
      <NavBar />
      <TicketsHistory />
      <Footer />
    </div>
  )
}

export default UserTickets
