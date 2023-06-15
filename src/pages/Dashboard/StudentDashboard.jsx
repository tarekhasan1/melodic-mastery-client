/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Row, Col, Nav, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StudentDashboard.css'
import useClasses from '../../hooks/useClasses';
import axios from 'axios';

const StudentDashboard = ( {studentData} ) => {
  const classesID = studentData.selectedClasses;
  const email = studentData.email;
  const [activeTab, setActiveTab] = useState('selected');

  const [classes, loading] = useClasses();
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
      !loading &&
          setSelectedClasses(
              classes.filter((c) => classesID.includes(c._id))
          );
  }, [loading, classes, classesID]);

  const handleDelete = async (id) => {
      setSelectedClasses((prev) => prev.filter((c) => c._id != id));

      try {
          // sent unselect request
          const response = await axios.put(
              `http://localhost:5000/user/unselected-class?id=${id}&email=${email}`
          );
          console.log(response.data);
      } catch (error) {
          console.log(error);
      }
  };


  const data = [
    {
      classes: 'Math',
      price: '$50',
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card',
      transactionId: '123456',
      date: '2023-06-10',
    },
    // Add more data objects as needed
  ];

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  let content;
  if (activeTab === 'selected') {
    content = (
        <div className='container-fluid'>
        <h4 className='text-center text-white my-3'>Selected Classes</h4>
        <Table variant='dark' responsive striped>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Class Name</th>
            <th>Enrolled Students</th>
            <th>Available Seats</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Price</th>
            <th>Pay</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            Array.isArray(selectedClasses) &&
            selectedClasses.map((classItem, index) => (
            <tr key={classItem._id}>
              <td>{index + 1}</td>
              <td>{classItem.name}</td>
              <td>{classItem.enrolledStudents}</td>
              <td>{classItem.seats}</td>
              <td>{classItem.instructor}</td>
              <td>{classItem.email}</td>
              <td>{classItem.price}</td>
              <td>
                <Button variant="primary">Pay</Button>
              </td>
              <td>
                <Button  onClick={() => handleDelete(classItem._id)} variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
        </div>
    );
  } else if (activeTab === 'enrolled') {
    content = (
        <div>
        <h4 className='text-center text-white my-3'>Enrolled Classes</h4>
        <Table variant='dark' striped bordered hover>
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Instructor</th>
            <th>Instructor Email</th>
            <th>Available Seats</th>
            <th>Enrolled Students</th>
            <th>Paid Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.classes}</td>
              <td>{item.price}</td>
              <td>{item.paymentStatus}</td>
              <td>{item.paymentMethod}</td>
              <td>{item.transactionId}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
        </div>
    );
  }

  return (
    <div className='container-lg p-0 m-0 mb-5'>
      <Row>
        <Col md={3}>
          <div  className='menu-height bg-dark'>
              <Nav variant="pills" className="flex-column pt-5">
                <Nav.Item>
                  <Link className='text-decoration-none' to="/"> <i className='fas fa-home'></i> Home</Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="selected"
                    active={activeTab === 'selected'}
                    onClick={() => handleTabSelect('selected')}
                  >
                    Selected Classes
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="enrolled"
                    active={activeTab === 'enrolled'}
                    onClick={() => handleTabSelect('enrolled')}
                  >
                    Enrolled Classes
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

export default StudentDashboard;
