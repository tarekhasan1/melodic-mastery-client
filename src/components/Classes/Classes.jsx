import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const classesData = [
  {
    id: 1,
    className: 'Piano Class',
    image: 'https://cdn.omahaschoolofmusicanddance.com/wp-content/uploads/2019/07/11143731/music-2113875_1920.jpg',
    numStudents: 10,
    instructorName: 'John Doe',
    description: 'Learn to play the piano with experienced instructor John Doe.',
  },
  {
    id: 2,
    className: 'Guitar Class',
    image: 'https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg',
    numStudents: 8,
    instructorName: 'Jane Smith',
    description: 'Master the guitar techniques with renowned guitarist Jane Smith.',
  },
  {
    id: 3,
    className: 'Violin Class',
    image: 'https://www.worldofmusicandarts.com/wp-content/uploads/2015/06/violin-lessons.jpg',
    numStudents: 6,
    instructorName: 'Sarah Johnson',
    description: 'Discover the enchanting world of the violin with Sarah Johnson, an accomplished violinist.',
  },
  {
    id: 4,
    className: 'Drum Class',
    image: 'https://tansensuryanagar.in/wp-content/uploads/2021/02/drums-coaching-in-Ghaziabad.jpg',
    numStudents: 5,
    instructorName: 'Mike Thompson',
    description: 'Rock your rhythm skills in our dynamic drum class led by expert drummer Mike Thompson.',
  },
  {
    id: 5,
    className: 'Saxophone Class',
    image: 'https://verbnow.com/wp-content/uploads/2021/06/man-playing-saxophone-jun112021.jpg',
    numStudents: 4,
    instructorName: 'Robert Davis',
    description: 'Immerse yourself in the soulful melodies of the saxophone under the guidance of Robert Davis, a renowned saxophonist.',
  },
  {
    id: 6,
    className: 'Vocal Training',
    image: 'https://images.squarespace-cdn.com/content/v1/5ada15b1fcf7fd78510a7cfd/1531018081433-RY796PRNLHPQPT7Q5CXE/image-asset.jpeg?format=1000w',
    numStudents: 12,
    instructorName: 'Emily Roberts',
    description: 'Unlock the power of your voice and refine your vocal skills with Emily Roberts, a professional vocal coach.',
  },
];


const sortedClasses = [...classesData].sort((a, b) => {
    return b.numStudents - a.numStudents;
});

const Classes = () => {
  return (
    <Container className='my-5'>
      <h2 className="text-center text-white mb-4">Popular Classes</h2>
      <p className="text-center text-white">
        Enroll in our exciting music classes and discover your passion for music. Choose from a variety of instruments and expert instructors.
      </p>
      <Row xs={1} md={2} lg={3}>
        {sortedClasses.map((classItem) => (
          <Col className='my-5' key={classItem.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={classItem.image} alt={classItem.className} style={{ width: '100%', height: '250px' }} />
              <Card.Body>
                <Card.Title>{classItem.className}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Instructor: {classItem.instructorName}
                </Card.Subtitle>
                <Card.Text>{classItem.description}</Card.Text>
                <Card.Text>
                  <strong>Number of Students:</strong> {classItem.numStudents}
                </Card.Text>
                <Button variant='success'>Enroll Now!</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Classes;
