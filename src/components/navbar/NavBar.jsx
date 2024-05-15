import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { isAuthenticated } from '../login/isAuthenticated';
import Logo from "../../assests/Logo.png"
import './navbar.css'

function NavBar() {

  const role = localStorage.getItem('role')

  const handleLogout = () => {
    // Clear the token and email from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    localStorage.removeItem('seat');
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#e9b824 ' }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="80"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: '#ffffff' }} >Home</Nav.Link>
            {!isAuthenticated() && <Nav.Link href="/login" style={{ color: '#ffffff' }}>Login</Nav.Link>}
            {isAuthenticated() && role === "ADMIN" && <Nav.Link href="/admin/users" style={{ color: '#ffffff' }}>Dashboard</Nav.Link>}
            {isAuthenticated() && role === "STUDENT" && <Nav.Link href="/booking" style={{ color: '#ffffff' }}>Booking</Nav.Link>}
            {isAuthenticated() && role === "GUARD" && <Nav.Link href="/guard/scan" style={{ color: '#ffffff' }}>Scan QR Code</Nav.Link>}
            {isAuthenticated() && role === "GUARD" && <Nav.Link href="/guard/tickets" style={{ color: '#ffffff' }}>View Tickets</Nav.Link>}
            {isAuthenticated() && role === "STUDENT" && <Nav.Link href="/student/tickets" style={{ color: '#ffffff' }}>My Tickets</Nav.Link>}
            {isAuthenticated() && role === "STUDENT" && <Nav.Link href="/student/myprofile" style={{ color: '#ffffff' }}>My Profile</Nav.Link>}
          </Nav>
          <Nav className="ml-auto"> {/* Apply ml-auto class */}
            {isAuthenticated() && (
              <Button
                variant="danger"
                onClick={handleLogout}
                href="/"
                className='logoutButton'
              >
                LogOut
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

// <Navbar expand="lg" style={{ backgroundColor: '#213f54' }}>
//   <Container >
//     <Navbar.Brand href="/"><img
//       src="..\"
//       width="60"
//       height="25"
//       className="d-inline-block align-top"
//       alt="Logo"
//     />
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//         <Nav.Link href="/" style={{ color: '#ffffff' }} >Home</Nav.Link>
//         {!isAuthenticated() && <Nav.Link href="/login" style={{ color: '#ffffff' }}>Login</Nav.Link>}
//         {isAuthenticated() && role === "ADMIN" && <Nav.Link href="/admin/users" style={{ color: '#ffffff' }}>Dashboard</Nav.Link>}
//         {isAuthenticated() && role === "STUDENT" && <Nav.Link href="/booking" style={{ color: '#ffffff' }}>Booking</Nav.Link>}
//         {isAuthenticated() && role === "GUARD" && <Nav.Link href="/guard/scan" style={{ color: '#ffffff' }}>Scan QR Code</Nav.Link>}
//         {isAuthenticated() && role === "GUARD" && <Nav.Link href="/guard/tickets" style={{ color: '#ffffff' }}>View Tickets</Nav.Link>}
//         {isAuthenticated() && role === "ADMIN" && <Nav.Link href="/admin/myprofile" style={{ color: '#ffffff' }}>My Profile</Nav.Link>}
//         {isAuthenticated() && role === "STUDENT" && <Nav.Link href="/student/myprofile" style={{ color: '#ffffff' }}>My Profile</Nav.Link>}
//         {isAuthenticated() && role === "GUARD" && <Nav.Link href="/guard/myprofile" style={{ color: '#ffffff' }}>My Profile</Nav.Link>}
//         {isAuthenticated() && <Button variant="danger" onClick={handleLogout} href='/' style={{ color: '#ffffff' }}>LogOut</Button>}
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
