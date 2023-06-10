import { Card, Button, Col, Row } from 'react-bootstrap';
import './Instructions.css'

const Instructors = () => {
  const instructors = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      numOfClasses: 3,
      image: 'https://images.squarespace-cdn.com/content/v1/5f5ddd1d24d62a59a4ee6716/954411ba-ce12-425b-b13a-5383f69ecf27/chris+circle+background.png',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      numOfClasses: 5,
      image: 'https://www.musicmakersacademy.ca/wp-content/uploads/elementor/thumbs/Kids-music-school-Music-Makers-Academy-ori4v6crduh9murhvq8aqd2diufu56116indb9kow0.png',
    },
    {
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      numOfClasses: 2,
      image: 'https://gssmusicschool.com/wp-content/uploads/2020/04/team-surya-01-min.png',
    },
    {
      name: 'Sarah Davis',
      email: 'sarah.davis@example.com',
      numOfClasses: 4,
      image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d5f45d1b022739d6416e9_Iris%20Sepulveda%208.png',
    },
    {
      name: 'Alex Turner',
      email: 'alex.turner@example.com',
      numOfClasses: 1,
      image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645d54aa86d3dbbcee317360_Copy%20of%20IMG_1745-min.png',
    },
    {
      name: 'Emily Clark',
      email: 'emily.clark@example.com',
      numOfClasses: 6,
      image: 'https://uploads-ssl.webflow.com/5d78444ef539c2354d8948ad/645abd0a500fdf81415a943e_Jonathan%20Rodriguez%203-min.png',
    },
  ];


  const sortedInstructors = [...instructors].sort((a, b) => {
        return b.numOfClasses - a.numOfClasses;
    });

  return (
    <div className="container">
      <h1 className="text-center text-white mt-5">Popular Instructors</h1>
      <p className='text-center text-white mt-4 mb-5'>Our instructors are talented music teachers and skilled instrument players. With their expertise and passion for music, they create an engaging learning environment where students can develop their musical abilities. They offer personalized guidance and support, helping students master their instruments and explore various musical genres. Their dedication and commitment inspire students to cultivate a lifelong love for music.</p>
      <Row className="justify-content-center">
        {sortedInstructors.map((instructor, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4 d-flex align-items-center">
            <Card className='w-100 box-shade' style={{ height: '100%' }}>
            <Card.Img variant="top" src={instructor.image} alt={instructor.name} style={{ objectFit: 'contain', width: '100%', height: '450px' }} />
              <Card.Body className='text-center'>
                <Card.Title>{instructor.name}</Card.Title>
                <Card.Text>{instructor.email}</Card.Text>
                <Card.Text>{instructor.numOfClasses} classes</Card.Text>
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
