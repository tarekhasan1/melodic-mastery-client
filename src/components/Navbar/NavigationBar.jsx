import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("nav user: ", user);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://www.incisiv.com/hubfs/Events/Rock%20and%20Roll%20Underground%202021/Hero_over_bg_v3.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar
        collapseOnSelect
        expand="lg"
        className="background-color nav-position"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="text-secondary fancy-font fs-3" href="/">
            {" "}
            <img
              className="logo-img"
              src="https://static.wixstatic.com/media/53928e_fdded28a0bb24dc0b5c197efecd3deae~mv2.png/v1/fill/w_578,h_577,al_c/53928e_fdded28a0bb24dc0b5c197efecd3deae~mv2.png"
              alt=""
            />{" "}
            <span className="text-white fw-bold fancy-font">M</span>elodic{" "}
            <span className="text-white fw-bold fancy-font">M</span>astery
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-route me-4" : "me-4"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-route me-4" : "me-4"
                }
                to="/classes"
              >
                Classes
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-route me-4" : "me-4"
                }
                to="/instructors"
              >
                Instructor
              </NavLink>
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-route me-4" : "me-4"
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              )}
            </Nav>
            <Nav>
              {user ? (
                <div>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-control me-2"
                      src={user.photoURL}
                      alt=""
                      title={user.displayName}
                    />
                    <Link className="d-flex align-items-center text-decoration-none">
                      <Button
                        onClick={handleLogout}
                        variant="outline-secondary"
                      >
                        Log Out
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <Button variant="outline-secondary">Log In</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
