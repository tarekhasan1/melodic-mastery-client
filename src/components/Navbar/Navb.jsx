import { Navbar, Container, Nav } from 'react-bootstrap';

const Navb = () => {
  return (
    <Navbar bg="transparent" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/path/to/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          Your Website Name
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler-custom"
        >
          {/* Add your custom toggle button icon here */}
          <i className="fas fa-bars fa-flip-both"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#instructors">Instructors</Nav.Link>
            <Nav.Link href="#classes">Classes</Nav.Link>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#profile">User Profile</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navb;
