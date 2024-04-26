import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { isAuthenticated } from '../login/isAuthenticated';

function NavBar() {
  const role = "admin";


  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Redirect the user to the login page
    // You can use React Router for navigation.
  };
  return (
    <Navbar expand="lg" style={{backgroundColor: '#627254'}}>
      <Container >
        <Navbar.Brand href="/"><img
          src="..\"
          width="60"
          height="25"
          className="d-inline-block align-top"
          alt="Logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav fixed-top" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{color: '#ffffff'}} >Home</Nav.Link>
            {!isAuthenticated() && <Nav.Link href="/login" style={{color: '#ffffff'}}>Login</Nav.Link>}
            {isAuthenticated() && role === "admin" && <Nav.Link href="/admin/users" style={{color: '#ffffff'}}>Dashboard</Nav.Link>}
            {isAuthenticated() && role === "user" && <Nav.Link href="/booking" style={{color: '#ffffff'}}>Booking</Nav.Link>}
            {isAuthenticated() && role === "guard" && <Nav.Link href="/guard/scan" style={{color: '#ffffff'}}>Scan QR Code</Nav.Link>}
            {isAuthenticated() && role === "guard" && <Nav.Link href="/guard/tickets" style={{color: '#ffffff'}}>View Tickets</Nav.Link>}
            {isAuthenticated() && <Nav.Link href="/myprofile" style={{color: '#ffffff'}}>My Profile</Nav.Link>}
            {isAuthenticated() && <Button variant="danger" onClick={handleLogout} href='/' style={{color: '#ffffff'}}>LogOut</Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;