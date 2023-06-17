/* eslint-disable react/prop-types */
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useClasses from '../../hooks/useClasses';
import { useEffect, useState } from 'react';

const Classes = () => {
  const [classesData, loading] = useClasses();
  const sortedByStudents = classesData
    .sort((a, b) => {
      return b.enrolledStudents - a.enrolledStudents;
    })
    .slice(0, 6);

  return (
    <Container className="my-5">
      <h2 className="text-center text-white mb-4">Popular Classes</h2>
      <p className="text-center text-white">
        Enroll in our exciting music classes and discover your passion for music. Choose from a variety of instruments and expert instructors.
      </p>
      <Row xs={1} md={2} lg={3}>
        {!loading &&
          Array.isArray(sortedByStudents) &&
          sortedByStudents.map((classItem, index) => (
            <ClassItem key={classItem._id} classItem={classItem} index={index} />
          ))}
      </Row>
    </Container>
  );
};

// eslint-disable-next-line no-unused-vars
const ClassItem = ({ classItem, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isVisible, setIsVisible] = useState(false);

  const cardVariants = {
    hidden: { scale: 0.3, opacity: 0, rotate: -90 },
    visible: { scale: 1, opacity: 1, rotate: 0 },
  };

  const handleScroll = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Col className="my-5">
      <motion.div
        ref={ref}
        initial={isVisible ? "visible" : "hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={cardVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="h-100">
          <Card.Img
            variant="top"
            src={classItem.image}
            alt={classItem.name}
            style={{ width: '100%', height: '250px' }}
          />
          <Card.Body>
            <Card.Title>{classItem.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Instructor: {classItem.instructor}
            </Card.Subtitle>
            <Card.Text>{classItem.description}</Card.Text>
            <Card.Text>
              <strong>Number of Students:</strong> {classItem.enrolledStudents}
            </Card.Text>
            <Card.Text>
              <strong>Price: $</strong> {classItem.price}
            </Card.Text>
            <Button variant="success">Enroll Now!</Button>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
};

export default Classes;
