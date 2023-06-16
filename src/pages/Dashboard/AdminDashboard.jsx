/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Row, Col, Nav, Table, Button, Card, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StudentDashboard.css'
import useUserInfo from '../../hooks/useUserInfo';
import axios from 'axios';
import useClasses from '../../hooks/useClasses';

const AdminDashboard = ( {adminData}) => {
  const [activeTab, setActiveTab] = useState('selected');
  const [userData, loading] = useUserInfo("all");
  const [allUsers, setAllUsers] = useState([]);

  const [classes, ClassLoading] = useClasses();
  const [allClasses, setAllClasses] = useState([]);
  const [classId, setClassId] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);


  //modal for classes feedback
  const handleClose = () => {
    // Logic for closing the modal
    setShowModal(false);
  };

  useEffect(() => {
      !loading &&
          setAllUsers(
              userData.filter(
                  (user) =>
                      user.email !== adminData.email && user.role !== "superAdmin"
              )
          );
  }, [adminData.email, loading, userData]);

  // handle role update
  const handleRole = async (role, email) => {
      const updatedUsers = allUsers.map((user) => {
          if (user.email === email) {
              user.role = role;
          }
          return user;
      });
      setAllUsers(updatedUsers);

      try {
          // sent role change request
          const response = await axios.put(
              `${import.meta.env.VITE_MELODIC_MASTERY_SERVER}/update-role?role=${role}&email=${email}`
          );
          response.data.message && alert(response.data.message);
      } catch (error) {
          console.log(error);
      }
  };


  //manage classes functionality

  useEffect(() => {
      !ClassLoading && setAllClasses(classes);
  }, [ClassLoading, classes]);

  const handleStatus = async (status, id) => {
      const updatedClasses = allClasses.map((c) => {
          if (c._id == id) {
              c.status = status;
          }
          return c;
      });
      setAllClasses(updatedClasses);

      try {
          // sent status change request
          const response = await axios.put(
              `${import.meta.env.VITE_MELODIC_MASTERY_SERVER}/update-status?id=${id}&status=${status}`
          );
          response.data.message && alert(response.data.message);
      } catch (error) {
          console.log(error);
      }
  };

  const handleFeedback = async () => {
      if (message) {
          try {
              // sent status change request
              const response = await axios.put(
                  `${
                      import.meta.env.VITE_MELODIC_MASTERY_SERVER
                  }/send-feedback?id=${classId}`,
                  JSON.stringify({
                      message,
                  }),
                  {
                      headers: {
                          "Content-Type": "application/json",
                      },
                  }
              );
              response.data.message && alert(response.data.message);
              setMessage("");
          } catch (error) {
              console.log(error);
          }
      } else alert("Please write something before send!");
  };


  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  let content;
  if (activeTab === 'selected') {
    content = (
        <div className='container-fluid'>
        <h4 className='text-center text-white my-3'>Manage Users</h4>
        <div className='rounded-3'>
        <Table className='rounded-3' striped variant='success' responsive>
            <thead>
                <tr className="text-white">
                    <th></th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {!loading &&
                    Array.isArray(allUsers) &&
                    allUsers.map(({ _id, name, image, email, role }, i) => (
                        <tr key={_id}>
                            <th>{i + 1}</th>
                            <td>
                                <img
                                style={{width: '55px', height: '55px', borderRadius: '50%'}}
                                    src={image}
                                    alt=""
                                />
                            </td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{role}</td>
                            <td>
                            {role !== "instructor" && (
                                    <Button
                                        onClick={() =>
                                            handleRole("instructor", email)
                                        }
                                        className="btn btn-success"
                                    >
                                        Make Instructor
                                    </Button>
                                    )}
                                </td>
                                <td>
                            {role !== "admin" && (
                                    <Button
                                        onClick={() =>
                                            handleRole("admin", email)
                                        }
                                        className="btn btn-secondary"
                                    >
                                        Make Admin
                                    </Button> 
                            )}
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    </div>
        </div>
    );
  } else if (activeTab === 'enrolled') {
    content = (
        <div>
    <h4 className='text-center text-white my-3'>Manage Classes</h4>
    <Row>
        {!ClassLoading &&
            Array.isArray(allClasses) &&
            allClasses.map(({ _id, name, image, instructor, email, seats, price, status }) => (
                <Col sm={12} key={_id} className="mb-5">
                    <Card className="h-100">
                        <Row>
                            <Col md={4}>
                                <Card.Img src={image} alt={name} className="img-fluid h-100" />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Class Name: {name}</Card.Title>
                                    <Card.Text>
                                        <b>Instructor:</b> {instructor}
                                    </Card.Text>
                                    <Card.Text>
                                        <b>Email:</b> {email}
                                    </Card.Text>
                                    <Card.Text>
                                        <b>Available seats:</b> {seats}
                                    </Card.Text>
                                    <Card.Text>
                                        <b>Price:</b> ${price}
                                    </Card.Text>
                                    <Card.Text>
                                        <b>Status:</b> {status}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-center">
                                    <Button
                                        onClick={() => handleStatus("approved", _id)}
                                        className="btn btn-success me-2"
                                        disabled={status === "approved" || status === "denied"}
                                    >
                                        Approve
                                    </Button>
                                    <Button
                                        onClick={() => handleStatus("denied", _id)}
                                        className="btn btn-danger me-2"
                                        disabled={status === "approved" || status === "denied"}
                                    >
                                        Deny
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setShowModal(true);
                                            setClassId(_id);
                                        }}
                                        className="btn btn-warning"
                                    >
                                        Feedback
                                    </Button>
                                </Card.Footer>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            ))}
    </Row>

    <Modal show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Feedback</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form.Control
        as="textarea"
        className="w-100 mt-3"
        rows={10}
        placeholder="Write the reason for approved/denied."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="warning" onClick={handleFeedback}>
        Send
      </Button>
    </Modal.Footer>
  </Modal>
</div>
    );
  }

  return (
    <div className='container-lg p-0 m-0 mb-5'>
      <Row>
        <Col md={3}>
          <div  className='menu-height bg-dark'>
              <Nav variant="pills" className="flex-column pt-5">
                <Nav.Item className='mb-3'>
                  <Link className='text-decoration-none' to="/"> <i className='fas fa-home'></i> Home</Link>
                </Nav.Item>
                <Nav.Item className='mb-3'>
                  <Nav.Link
                    eventKey="selected"
                    active={activeTab === 'selected'}
                    onClick={() => handleTabSelect('selected')}
                  >
                    Manage Users
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className='mb-3'>
                  <Nav.Link
                    eventKey="enrolled"
                    active={activeTab === 'enrolled'}
                    onClick={() => handleTabSelect('enrolled')}
                  >
                    Manage Classes
                  </Nav.Link>
                </Nav.Item>
              </Nav>
          </div>
        </Col>
        <Col md={9}>
          {content}
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
