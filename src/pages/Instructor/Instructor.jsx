import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import './Instructor.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useUserInfo from '../../hooks/useUserInfo';


  const animationEffects = [
      'fade-up',
      'fade-down',
      'flip-up',
      'flip-down',
      'flip-left',
      'flip-right',
      'slide-up',
      'flip-down',
      'flip-left',
      'flip-right',
      'slide-up',
    ];

const Instructor = () => {
  const [userData, loading] = useUserInfo("all");
  const instructor = userData.filter((data) => data.role == "instructor");

    useEffect(() => {
        AOS.init({
          once: false, // Allow animations to occur multiple times
          mirror: true, // Mirror animations when scrolling up
        });
      }, []);


      const getRandomAnimationEffect = (index) => {
        const effectsLength = animationEffects.length;
        const effectIndex = index % effectsLength;
        return animationEffects[effectIndex];
      };

  return (
    <Container className='my-5'
    style={{
        backgroundImage:
          "url('https://www.seekpng.com/png/full/821-8215450_music-note-background-musical-note.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    <h1 className='text-white text-center'>Instructors</h1>
    {
      loading && <Spinner className="d-flex justify-content-center align-items-center" animation="grow" variant="light" />
    }
    <Row>
      {!loading &&
        Array.isArray(instructor) &&
        instructor.map((instructor, index) => (
        <Col className='my-4 px-4 text-secondary' key={instructor._id} xs={12} md={6} lg={4}>
          <div className="instructor-card"
          data-aos={getRandomAnimationEffect(index)}
          data-aos-duration="2000"
          >
            <div className="card-image">
              <img className='w-100 rounded-3' src={instructor.image} alt={instructor.name} />
            </div>
            <div className="card-body">
              <h2>{instructor.name}</h2>
              <p>{instructor.email}</p>
              {instructor.classesTaken && (
                <div>
                  <p>Classes Taken: {instructor.classesTaken}</p>
                  <p>Classes: {instructor.classes.join(', ')}</p>
                </div>
              )}
              <Button variant="success" href={`/instructors/${instructor._id}`}>
                See Classes
              </Button>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
  );
};

export default Instructor;
