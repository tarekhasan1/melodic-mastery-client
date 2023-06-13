import { Container, Row, Col, Button } from 'react-bootstrap';
import './Instructor.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const instructorsData = [
  {
    id: 1,
    name: 'John Smith',
    email: 'johndoe@example.com',
    classesTaken: 3,
    classes: ['Guitar Basics', 'Piano for Beginners', 'Drums Workshop'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    classesTaken: 2,
    classes: ['Singing Techniques', 'Bass Guitar Masterclass'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'markjohnson@example.com',
    classesTaken: 2,
    classes: ['Songwriting Workshop', 'Music Production Essentials'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 4,
    name: 'Sarah Thompson',
    email: 'sarahwilliams@example.com',
    classesTaken: 2,
    classes: ['Keyboard Mastery', 'Violin Ensemble'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 5,
    name: 'David Rodriguez',
    email: 'michaelbrown@example.com',
    classesTaken: 1, // Updated to 1
    classes: ['Music Theory Basics'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 6,
    name: 'Jessica Adams',
    email: 'emilydavis@example.com',
    classesTaken: 1, // Updated to 1
    classes: ['Classical Piano'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 7,
    name: 'Daniel Wilson',
    email: 'jamesjohnson@example.com',
    classesTaken: 1,
    classes: ['Vocal Harmony Workshop'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 8,
    name: 'Sophia Roberts',
    email: 'oliviawilson@example.com',
    classesTaken: 2,
    classes: ['Guitar Soloing Techniques', 'Music Composition'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 9,
    name: 'Oliver Anderson',
    email: 'danieltaylor@example.com',
    classesTaken: 1,
    classes: ['Jazz Improvisation'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 10,
    name: 'Isabella Martinez',
    email: 'miaanderson@example.com',
    classesTaken: 1,
    classes: ['Gospel Singing'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 11,
    name: 'Alexander Lee',
    email: 'alexanderlee@example.com',
    classesTaken: 1,
    classes: ['Classical Guitar'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  },
  {
    id: 12,
    name: 'Sophia Garcia',
    email: 'sophiagarcia@example.com',
    classesTaken: 1,
    classes: ['Music History'],
    image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
  }
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
