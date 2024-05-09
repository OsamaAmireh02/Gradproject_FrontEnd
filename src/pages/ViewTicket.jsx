import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import Ticket from '../components/Ticket/Ticket'
import { useLocation } from 'react-router-dom';

function ViewTicket() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  console.log(id)
  return (
    <div>
      <NavBar/>
      <Ticket 
      ticketId = {id}/>
      <Footer/>
    </div>
  )
}

export default ViewTicket
