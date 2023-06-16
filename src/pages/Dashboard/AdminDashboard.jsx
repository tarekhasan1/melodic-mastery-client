/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Row, Col, Nav, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StudentDashboard.css'
import useUserInfo from '../../hooks/useUserInfo';
import axios from 'axios';

const AdminDashboard = ( {adminData}) => {
  const [activeTab, setActiveTab] = useState('selected');
  const [userData, loading] = useUserInfo("all");
  const [allUsers, setAllUsers] = useState([]);

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


  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  let content;
  if (activeTab === 'selected') {
    content = (
        <div className='container-fluid'>
        <h4 className='text-center text-white my-3'>Manage Users</h4>
        <div>
        <Table variant='dark' responsive>
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
