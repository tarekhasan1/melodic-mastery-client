import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './NavigationBar.css'

const NavigationBar = () => {

    return (
        <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="background-color nav-position"
          variant="dark"
        >
          <Container>
            <Navbar.Brand className="text-secondary fancy-font fs-3" href="/"> <img className="logo-img" src='logo' alt="" /> <span className="text-white fw-bold fancy-font">M</span>elodic <span className="text-white fw-bold fancy-font">M</span>astery</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto ms-4">
                <NavLink className={({ isActive }) => (isActive ? "active-route me-4" : "me-4")}
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-route me-4" : "me-4")}
                  to="/classes"
                >
                  Classes
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-route me-4" : "me-4")}
                  to="/dashboard"
                >
                  dashboard
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-route me-4" : "me-4")}
                  to="/instructor"
                >
                  Instructor
                </NavLink>
              </Nav>
              <Nav>
                <div>
                  <div className="d-flex align-items-center">
                  <img
                    className="img-control me-2"
                    src="s.jpg"
                    alt=""
                    title='{user.displayName}'
                  />
                  <Link className="d-flex align-items-center text-decoration-none">
                    <Button variant="secondary">
                      Log Out
                    </Button>
                  </Link>
                  </div>
                </div>
                <Link to="/login">
                  <Button variant="secondary">Log In</Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default NavigationBar;
