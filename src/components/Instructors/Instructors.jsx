import { Card, Button, Col, Row } from 'react-bootstrap';
import './Instructions.css'
import useUserInfo from '../../hooks/useUserInfo';

const Instructors = () => {
  const [userData, loading] = useUserInfo("all");
  const instructors = userData.filter((data) => data.role == "instructor");
  const sortedByStudent = instructors
      .sort((a, b) => b.students - a.students)
      .slice(0, 6);

  return (
    <div className="container">
      <h1 className="text-center text-white mt-5">Popular Instructors</h1>
      <p className='text-center text-white mt-4 mb-5'>Our instructors are talented music teachers and skilled instrument players. With their expertise and passion for music, they create an engaging learning environment where students can develop their musical abilities. They offer personalized guidance and support, helping students master their instruments and explore various musical genres. Their dedication and commitment inspire students to cultivate a lifelong love for music.</p>
      <Row className="justify-content-center">
        {!loading &&
          Array.isArray(sortedByStudent) &&
          sortedByStudent.map(
              ({
                  _id,
                  image,
                  name,
                  email,
                  classesTaken
              }) => (
          <Col key={_id} xs={12} md={6} lg={4} className="mb-4 d-flex align-items-center">
            <Card className='w-100 box-shade' style={{ height: '100%' }}>
            <Card.Img variant="top" src={image} alt={name} style={{ objectFit: 'contain', width: '100%', height: '450px' }} />
              <Card.Body className='text-center'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{email}</Card.Text>
                <Card.Text>{classesTaken} classes</Card.Text>
                <Button variant="success">See Classes</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Instructors;
