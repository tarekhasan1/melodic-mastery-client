/* eslint-disable react/prop-types */
import { useState } from "react";
import { Row, Col, Nav, Form, Button, Table, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";
import axios from "axios";
import useClasses from "../../hooks/useClasses";

const InstructorDashboard = ({instructorData}) => {
  const [activeTab, setActiveTab] = useState("selected");
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState(null);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [classes, loading] = useClasses();
  const myClasses = classes.filter((c) => c.email == instructorData.email);

  const instructorName = instructorData.name;
  const instructorEmail = instructorData.email;

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newClass = {
      name: className,
      image: classImage,
      instructor: instructorName,
      email: instructorEmail,
      seats: availableSeats,
      price: price
    };
    console.log(newClass);
    try {
      const response = await axios.post(
          `${import.meta.env.VITE_MELODIC_MASTERY_SERVER}/add-class`,
          JSON.stringify(newClass),
          {
            headers: {
                "Content-Type": "application/json",
            },
        }
      );
      console.log(response.data);
      if (response.data.message) {
        alert(response.data.message);
        setClassName('');
        setClassImage('');
        setPrice(0);
        setAvailableSeats(0);
    } else if (response.data.error) {
        alert(response.data.error);
    }
  } catch (error) {
      alert("Failed to Add! Try again.");
      console.log(error);
  }
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
      <div className="container-fluid text-white">
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

          <Button className="mt-3" variant="primary" type="submit">
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
                <th>Price</th>
                <th>Feedback</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                Array.isArray(myClasses) &&
                myClasses.map((c, index) => (
                <tr key={index}>
                  <td>{c.name}</td>
                  <td>{c.status}</td>
                  <td>{c.enrolledStudents}</td>
                  <td>{c.price}</td>
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
                      <Button
                        variant="primary"
                        onClick={() => handleShowFeedbackModal(c.feedback)}
                      >
                        Update
                      </Button>
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
              <Nav.Item className='mb-3'>
                <Link className="text-decoration-none mb-5" to="/">
                  {" "}
                  <i className="fas fa-home"></i> Home
                </Link>
              </Nav.Item>
              <Nav.Item className='mb-3'>
                <Nav.Link
                  eventKey="selected"
                  active={activeTab === "selected"}
                  onClick={() => handleTabSelect("selected")}
                >
                  Add A Class
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='mb-3'>
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
