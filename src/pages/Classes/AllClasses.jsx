import { useContext, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './AllClasses.css'
import { AuthContext } from '../../providers/AuthProviders';



const AllClasses = () => {
    const [classes, setClasses] = useState([
        {
          id: 1,
          name: 'Guitar Basics',
          instructor: 'John Smith',
          seats: 5,
          price: 50,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg',
          description: 'Learn the fundamentals of playing the guitar in this summer camp music school class.'
        },
        {
          id: 2,
          name: 'Piano for Beginners',
          instructor: 'Emily Davis',
          seats: 0,
          price: 100,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg',
          description: 'Discover the magic of playing the piano as a beginner in this summer camp music school class.'
        },
        {
          id: 3,
          name: 'Drums Workshop',
          instructor: 'Michael Johnson',
          seats: 10,
          price: 75,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg',
          description: 'Unleash your inner drummer and learn exciting beats in this summer camp music school class.'
        },
        {
          id: 4,
          name: 'Singing Techniques',
          instructor: 'Sarah Thompson',
          seats: 2,
          price: 120,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg',
          description: 'Enhance your vocal skills and learn various singing techniques in this summer camp music school class.'
        },
        {
          id: 5,
          name: 'Bass Guitar Masterclass',
          instructor: 'David Rodriguez',
          seats: 8,
          price: 90,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg',
          description: 'Dive into the world of bass guitar playing and master the art of groovy basslines in this summer camp music school class.'
        },
        {
          id: 6,
          name: 'Songwriting Workshop',
          instructor: 'Jessica Adams',
          seats: 3,
          price: 60,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg',
          description: 'Unleash your creativity and learn the techniques of crafting memorable songs in this summer camp music school class.'
        },
        {
          id: 7,
          name: 'Music Production Essentials',
          instructor: 'Daniel Wilson',
          seats: 15,
          price: 80,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg',
          description: 'Explore the world of music production and learn essential skills to create professional-quality tracks in this summer camp music school class.'
        },
        {
          id: 8,
          name: 'Keyboard Mastery',
          instructor: 'Sophia Roberts',
          seats: 12,
          price: 110,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg',
          description: 'Become a proficient keyboard player by mastering techniques and playing a variety of musical genres in this summer camp music school class.'
        },
        {
          id: 9,
          name: 'Violin Ensemble',
          instructor: 'Oliver Anderson',
          seats: 6,
          price: 70,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg',
          description: 'Experience the beauty of playing the violin in an ensemble setting and develop your skills as a violinist in this summer camp music school class.'
        },
        {
          id: 10,
          name: 'Vocal Harmony Workshop',
          instructor: 'Isabella Martinez',
          seats: 20,
          price: 95,
          image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg',
          description: 'Learn the art of harmonizing vocals and blend voices to create beautiful harmonies in this summer camp music school class.'
        }
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
                <img className='rounded-2' src={classItem.image} alt="Class" />
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
