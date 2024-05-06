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
import ChooseSlotPage from './pages/ChooseSlotPage';
import SubmitBooking from './pages/SubmitBooking';
import UserViewProfilePage from './pages/UserViewProfilePage';
import GuardViewProfiePage from './pages/GuardViewProfiePage';


function App() {

  return (<>
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      {isAuthenticated  && <Route path="/login" element={<LoginPage />} />}
      {localStorage.getItem('role') == 'ADMIN' && <Route path="/admin/users" element={<UsersPage />} />}
      <Route path="/admin/parkings" element={<ParkingsPage />} />
      <Route path="/admin/tickets" element={<TicketPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/guard/scan" element={<ReadQRPage />} />
      <Route path="/admin/myprofile" element={<AdminViewProfilePage />} />
      <Route path="/guard/tickets" element={<GuardViewTickets />} />
      <Route path="/admin/addUser" element={<CreateUserPage />} />
      <Route path="/admin/addParking" element={<AddParkingPage />} />
      <Route path="/booking/chooseSlot" element={<ChooseSlotPage />} />
      <Route path="/booking/submit" element={<SubmitBooking />} />
      <Route path="/student/myprofile" element={<UserViewProfilePage />} />
      <Route path="/guard/myprofile" element={<GuardViewProfiePage/>} />

    </Routes>
  </>
  );
}

export default App;
