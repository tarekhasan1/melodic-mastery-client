import { Container, Row, Col, Button } from 'react-bootstrap';
import './Instructor.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const instructorsData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    classesTaken: 5,
    classes: ['Class 1', 'Class 2', 'Class 3'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    classesTaken: 3,
    classes: ['Class 4', 'Class 5'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 3,
    name: 'Mark Johnson',
    email: 'markjohnson@example.com',
    classesTaken: 2,
    classes: ['Class 6', 'Class 7'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    email: 'sarahwilliams@example.com',
    classesTaken: 4,
    classes: ['Class 8', 'Class 9'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 5,
    name: 'Michael Brown',
    email: 'michaelbrown@example.com',
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 6,
    name: 'Emily Davis',
    email: 'emilydavis@example.com',
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 7,
    name: 'James Johnson',
    email: 'jamesjohnson@example.com',
    classesTaken: 6,
    classes: ['Class 10', 'Class 11'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 8,
    name: 'Olivia Wilson',
    email: 'oliviawilson@example.com',
    classesTaken: 3,
    classes: ['Class 12', 'Class 13'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 9,
    name: 'Daniel Taylor',
    email: 'danieltaylor@example.com',
    classesTaken: 1,
    classes: ['Class 14'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 10,
    name: 'Mia Anderson',
    email: 'miaanderson@example.com',
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 11,
    name: 'Alexander Lee',
    email: 'alexanderlee@example.com',
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 12,
    name: 'Sophia Garcia',
    email: 'sophiagarcia@example.com',
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
];


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
    <Row>
      {instructorsData.map((instructor, index) => (
        <Col className='my-4 px-4 text-secondary' key={instructor.id} xs={12} md={6} lg={4}>
          <div className="instructor-card"
          data-aos={getRandomAnimationEffect(index)}
          data-aos-duration="2000"
          >
            <div className="card-image">
              <img src={instructor.image} alt={instructor.name} />
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
              <Button variant="success" href={`/instructors/${instructor.id}`}>
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
