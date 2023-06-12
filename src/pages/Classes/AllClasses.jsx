import { useContext, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './AllClasses.css'
import { AuthContext } from '../../providers/AuthProviders';



const AllClasses = () => {
    const [classes, setClasses] = useState([
        {
          id: 1,
          name: 'Class 1',
          instructor: 'Instructor 1',
          seats: 5,
          price: 50,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg'
        },
        {
          id: 2,
          name: 'Class 2',
          instructor: 'Instructor 2',
          seats: 0,
          price: 100,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg'
        },
        {
          id: 3,
          name: 'Class 3',
          instructor: 'Instructor 3',
          seats: 10,
          price: 75,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg'
        },
        {
          id: 4,
          name: 'Class 4',
          instructor: 'Instructor 4',
          seats: 2,
          price: 120,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg'
        },
        {
          id: 5,
          name: 'Class 5',
          instructor: 'Instructor 5',
          seats: 8,
          price: 90,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg'
        },
        {
          id: 6,
          name: 'Class 6',
          instructor: 'Instructor 6',
          seats: 3,
          price: 60,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg'
        },
        {
          id: 7,
          name: 'Class 7',
          instructor: 'Instructor 7',
          seats: 15,
          price: 80,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg'
        },
        {
          id: 8,
          name: 'Class 8',
          instructor: 'Instructor 8',
          seats: 12,
          price: 110,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg'
        },
        {
          id: 9,
          name: 'Class 9',
          instructor: 'Instructor 9',
          seats: 6,
          price: 70,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg'
        },
        {
          id: 10,
          name: 'Class 10',
          instructor: 'Instructor 10',
          seats: 20,
          price: 95,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg'
        }
        // Add more class objects here
      ]);      



    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            setIsLoggedIn(true);
            if (user && user.email === 'hridoyshuvro@gmail.com') {
                setIsAdmin(true);
            }
        }
    }, [user]);
  

    const handleSelectClass = (classId) =>{
        if (!isLoggedIn) {
            alert('Please log in to select a course.');
            // You can redirect the user to the login page or show a login modal here
            return;
          }
        const updatedClasses = classes.map((classItem) => {
            if (classItem.id === classId && classItem.seats > 0) {
              return {
                ...classItem,
                seats: classItem.seats - 1
              };
            }
            return classItem;
          });

          setClasses(updatedClasses);
          alert(`Class ${classId} selected!`);
    };


  return (
    <div className="card-container my-5 mx-4">
    <h1 className='text-center text-white'>Classes</h1>
    <p className='text-center text-white mb-5'>Enroll in our exciting music classes and embark on a transformative journey to discover and explore your passion for music. With our wide range of instrument options and highly skilled instructors, you will have the opportunity to delve deeper into the world of music like never before.</p>
      <Row>
        {classes.map((classItem) => (
          <Col key={classItem.id} xs={12} sm={6} md={4} lg={3}>
            <div className="card mb-3">
              <div className="card-img">
                <img src={classItem.image} alt="Class" />
              </div>
              <div className="card-body">
                <h3 className="card-title">{classItem.name}</h3>
                <p className="card-text">Instructor: {classItem.instructor}</p>
                <p className="card-text">Available Seats: {classItem.seats}</p>
                <p className="card-text">Price: ${classItem.price}</p>
                <button
                  className="card-button"
                  onClick={() => handleSelectClass(classItem.id)}
                  disabled={classItem.seats === 0 || isAdmin}
                >
                  Select
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
