/* eslint-disable react/prop-types */
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = ({darkMode}) => {
  return (
    <footer className={`${darkMode ? "bg-dark text-light" : "bg-secondary text-light"}`}
    style={{
      backgroundImage: "url('https://www.incisiv.com/hubfs/Events/Rock%20and%20Roll%20Underground%202021/Hero_over_bg_v3.gif')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
      <Container>
      <br />
        <Row>
          <Col md={6} className="mt-5 text-center text-md-left">
            <h5>Contact Information</h5>
            <p>Park View, Rangpur, Bangladesh, 5400</p>
            <p>Email: melodic@mastery.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
          <Col md={6} className="mt-5 text-center text-md-right">
            <h5>Connect with Us</h5>
            <p>you can find us in most social media, explore-</p>
            <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Melodic Mastery. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
