import { useContext, useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import './AllClasses.css'
import { AuthContext } from '../../providers/AuthProviders';
import axios from 'axios';
import useUserInfo from '../../hooks/useUserInfo';
import useClasses from '../../hooks/useClasses';
import { useNavigate } from 'react-router-dom';
import './AllClasses.css'



const AllClasses = () => {
  const { user } = useContext(AuthContext);
  const [userData, loading] = useUserInfo();
  const [classData, classLoading] = useClasses();
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      if (!classLoading) {
          setClasses(classData);
      }
  }, [classLoading, classData]);

  const handleDisable = (seats) => {
      if (user && !loading) {
          const currentUser = ["superAdmin", "admin", "instructor"];
          if (currentUser.includes(userData.role)) {
              return true;
          }
      }
      return seats == 0;
  };

  const isSelected = (id) => {
      if (user && !loading) {
          return userData?.selectedClasses?.includes(id);
      } else return false;
  };

  const handleSelect = async (id) => {
      // if does not logged in
      if (!user) {
          navigate("/login");
          alert("You have to log in first to select a class.");
      } else {
          userData.selectedClasses.push(id);
          setClasses([...classData]);

          try {
              // send update request to select
              const response = await axios.put(`${import.meta.env.VITE_MELODIC_MASTERY_SERVER}/user/selected-class?id=${id}&email=${user?.email}`);
              console.log(response.data);
          } catch (error) {
              console.log(error);
          }
      }
  };


  return (
    <div className="card-container my-5 mx-4">
    <h1 className='text-center text-white'>Classes</h1>
    <p className='text-center text-white mb-5'>Enroll in our exciting music classes and embark on a transformable journey to discover and explore your passion for music. With our wide range of instrument options and highly skilled instructors, you will have the opportunity to delve deeper into the world of music like never before.</p>
    {
      classLoading && <Spinner className="d-flex justify-content-center align-items-center" animation="grow" variant="light" />
    }
      <Row>
        {!classLoading &&
          Array.isArray(classes) && classes.map((classItem) => (
          <Col key={classItem._id} xs={12} sm={6} md={4} lg={3}>
            <div className="card mb-3">
              <div className="card-img">
                <img className='rounded-2' src={classItem.image} alt={classItem.name}  style={{ width: '100%', height: '250px' }}/>
              </div>
              <div className="card-body">
                <h3 className="card-title">{classItem.name}</h3>
                <p className="card-text">Instructor: {classItem.instructor}</p>
                <p className="card-text">Available Seats: {classItem.seats}</p>
                <p className="card-text">Price: ${classItem.price}</p>
                <button
                  className="card-button btn btn-success mt-2"
                  onClick={() => handleSelect(classItem._id)}
                  disabled={
                    handleDisable(classItem.seats) ||
                    isSelected(classItem._id)
                }
                >
                {isSelected(classItem._id)
                  ? "Selected"
                  : "Select"}
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>    
  );
};

export default AllClasses;
