import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your form submission logic here
    console.log(formData);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div
      className="contact-form-container"
      style={{
        backgroundImage: "url('https://www.seekpng.com/png/full/821-8215450_music-note-background-musical-note.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
      <h1 className='text-center mt-5 text-white'>Contact Us</h1>
      <p className='text-center text-white mb-5'>If you have any questions or inquiry about us, you can simply email us to about anything related to our classes, instructors etc. Feel free to mail us!</p>
        <Row className='col-container text-white'>
          <Col md={6}>
            <div className="form-container mt-5">
              <h2 className='text-center'>Send A Message!</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message:</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button className='btn btn-warning mt-3' type="submit">Send</Button>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <div className="picture-container">
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-5795988-4849052.png?f=webp" alt="Contact" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
