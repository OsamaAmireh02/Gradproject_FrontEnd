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
import ChooseSlotPage from './pages/ChooseSlotPage';
import SubmitBooking from './pages/SubmitBooking';
import UserViewProfilePage from './pages/UserViewProfilePage';
import ViewTicket from './pages/ViewTicket';


function App() {

  return (<>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {isAuthenticated && <Route path="/login" element={<LoginPage />} />}
      {localStorage.getItem('role') === 'ADMIN' && <Route path="/admin/users" element={<UsersPage />} />}
      {localStorage.getItem('role') === 'ADMIN' && <Route path="/admin/parkings" element={<ParkingsPage />} />}
      {localStorage.getItem('role') === 'ADMIN' && <Route path="/admin/tickets" element={<TicketPage />} />}
      {localStorage.getItem('role') === 'STUDENT' && <Route path="/booking" element={<BookingPage />} />}
      {localStorage.getItem('role') === 'GUARD' && <Route path="/guard/scan" element={<ReadQRPage />} />}
      {localStorage.getItem('role') === 'GUARD' && <Route path="/guard/tickets" element={<GuardViewTickets />} />}
      {localStorage.getItem('role') === 'ADMIN' && <Route path="/admin/addUser" element={<CreateUserPage />} />}
      {localStorage.getItem('role') === 'ADMIN' && <Route path="/admin/addParking" element={<AddParkingPage />} />}
      {localStorage.getItem('role') === 'STUDENT' && <Route path="/booking/chooseSlot" element={<ChooseSlotPage />} />}
      {localStorage.getItem('role') === 'STUDENT' && <Route path="/booking/submit" element={<SubmitBooking />} />}
      {localStorage.getItem('role') === 'STUDENT' && <Route path="/student/myprofile" element={<UserViewProfilePage />} />}
      {localStorage.getItem('role') === 'STUDENT' && <Route path="/ticket" element={<ViewTicket />} />}

    </Routes>
  </>
  );
}

export default App;
