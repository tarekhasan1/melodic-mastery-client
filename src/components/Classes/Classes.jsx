import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import useClasses from '../../hooks/useClasses';


const Classes = () => {
  const [classesData, loading] = useClasses();
  const sortedByStudents = classesData
      .sort((a, b) => {
          return b.enrolledStudents - a.enrolledStudents;
      })
      .slice(0, 6);

  return (
    <Container className='my-5'>
      <h2 className="text-center text-white mb-4">Popular Classes</h2>
      <p className="text-center text-white">
        Enroll in our exciting music classes and discover your passion for music. Choose from a variety of instruments and expert instructors.
      </p>
      <Row xs={1} md={2} lg={3}>
        {!loading &&
          Array.isArray(sortedByStudents) &&
          sortedByStudents.map(({
            _id,
            image,
            name,
            instructor,
            price,
            description,
            enrolledStudents
        }) => (
          <Col className='my-5' key={_id}>
            <Card className="h-100">
              <Card.Img variant="top" src={image} alt={name} style={{ width: '100%', height: '250px' }} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Instructor: {instructor}
                </Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Text>
                  <strong>Number of Students:</strong> {enrolledStudents}
                </Card.Text>
                <Card.Text>
                  <strong>Price: $</strong> {price}
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
