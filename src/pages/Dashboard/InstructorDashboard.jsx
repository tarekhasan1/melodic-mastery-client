import { useContext, useState } from "react";
import { Row, Col, Nav, Form, Button, Table, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";
import { AuthContext } from "../../providers/AuthProviders";

const InstructorDashboard = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("selected");
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState(null);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);

  const [classes, setClasses] = useState([]);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const instructorName = user.displayName;
  const instructorEmail = user.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClass = {
      className: className,
      classImage: classImage,
      instructorName: instructorName,
      instructorEmail: instructorEmail,
      availableSeats: availableSeats,
      price: price,
      status: "pending",
    };
    console.log(newClass);
    setClasses([...classes, newClass]);
    // Just logging the newClass object for demonstration purposes
    // Send the newClass object to your backend or database for further processing/storage
    // Replace with your actual method of sending data to the server
  };

  //   my classes functionality

  // Function to handle adding a new class
  // const handleAddClass = (newClass) => {
  //   setClasses([...classes, newClass]);
  // };

  // Function to handle showing the feedback modal
  const handleShowFeedbackModal = (feedback) => {
    setSelectedClass(feedback);
    setShowFeedbackModal(true);
  };

  // Function to handle closing the feedback modal
  const handleCloseFeedbackModal = () => {
    setShowFeedbackModal(false);
    setSelectedClass(null);
  };

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  let content;
  if (activeTab === "selected") {
    content = (
      <div className="container-fluid">
        <h4 className="text-center text-white my-3">Add A Class</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="className">
            <Form.Label>Class name:</Form.Label>
            <Form.Control
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="classImage">
            <Form.Label>Class Image URL:</Form.Label>
            <Form.Control
              type="text"
              value={classImage}
              onChange={(e) => setClassImage(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="instructorName">
            <Form.Label>Instructor name:</Form.Label>
            <Form.Control type="text" value={instructorName} readOnly />
          </Form.Group>

          <Form.Group controlId="instructorEmail">
            <Form.Label>Instructor email:</Form.Label>
            <Form.Control type="email" value={instructorEmail} readOnly />
          </Form.Group>

          <Form.Group controlId="availableSeats">
            <Form.Label>Available seats:</Form.Label>
            <Form.Control
              type="number"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price:</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </div>
    );
  } else if (activeTab === "enrolled") {
    content = (
      <div>
        <h4 className="text-center text-white my-3">My Classes</h4>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Status</th>
                <th>Total Enrolled Students</th>
                <th>Feedback</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((c, index) => (
                <tr key={index}>
                  <td>{c.className}</td>
                  <td>{c.status}</td>
                  <td>{c.totalEnrolledStudents}</td>
                  <td>
                    {c.status === "denied" ? (
                      <Button
                        variant="primary"
                        onClick={() => handleShowFeedbackModal(c.feedback)}
                      >
                        View Feedback
                      </Button>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {c.status === "denied" && (
                      <Button
                        variant="primary"
                        onClick={() => handleShowFeedbackModal(c.feedback)}
                      >
                        Update
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Modal show={showFeedbackModal} onHide={handleCloseFeedbackModal}>
            <Modal.Header closeButton>
              <Modal.Title>Feedback</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedClass && <p>{selectedClass.feedback}</p>}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseFeedbackModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }

  return (
    <div className="container-lg p-0 m-0 mb-5">
      <Row>
        <Col md={3}>
          <div className="menu-height bg-dark">
            <Nav variant="pills" className="flex-column pt-5">
              <Nav.Item>
                <Link className="text-decoration-none mb-5" to="/">
                  {" "}
                  <i className="fas fa-home"></i> Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="selected"
                  active={activeTab === "selected"}
                  onClick={() => handleTabSelect("selected")}
                >
                  Add A Class
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="enrolled"
                  active={activeTab === "enrolled"}
                  onClick={() => handleTabSelect("enrolled")}
                >
                  My Classes
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Col>
        <Col md={9}>{content}</Col>
      </Row>
    </div>
  );
};

export default InstructorDashboard;
