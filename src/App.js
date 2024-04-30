import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage'
import LoginPage from './pages/LoginPage';
import ParkingsPage from './pages/ParkingsPage'
import TicketPage from './pages/TicketsPage';
import BookingPage from './pages/BookingPage';
import ReadQRPage from './pages/ReadQRPage';
import GuardViewTickets from './pages/GuardViewTickets';
import CreateUserPage from './pages/CreateUserPage';
import AddParkingPage from './pages/AddParkingPage';
import { isAuthenticated } from './components/login/isAuthenticated';
import AdminViewProfilePage from './pages/AdminViewProfilePage';


function App() {

  return (<>
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      {isAuthenticated  && <Route path="/login" element={<LoginPage />} />}
      <Route path="/admin/users" element={<UsersPage />} />
      <Route path="/admin/parkings" element={<ParkingsPage />} />
      <Route path="/admin/tickets" element={<TicketPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/guard/scan" element={<ReadQRPage />} />
      <Route path="/admin/myprofile" element={<AdminViewProfilePage />} />
      <Route path="/guard/tickets" element={<GuardViewTickets />} />
      <Route path="/admin/addUser" element={<CreateUserPage />} />
      <Route path="/admin/addParking" element={<AddParkingPage />} />
    </Routes>
  </>
  );
}

export default App;
