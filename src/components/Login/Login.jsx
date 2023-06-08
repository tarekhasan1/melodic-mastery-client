import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Alert, Row, Col } from 'react-bootstrap';
import { Particles } from 'react-tsparticles';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');

  const onSubmit = (data) => {
    // Simulate login request
    setTimeout(() => {
      if (data.username === 'admin' && data.password === 'password') {
        // Successful login
        alert('Login successful!');
      } else {
        // Failed login
        setLoginError('Invalid username or password');
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: '#ffffff'
            }
          },
          particles: {
            number: {
              value: 80
            },
            size: {
              value: 3
            }
          }
        }}
      />

      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <div className="text-center mb-4">
            <img src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="Login" className="img-fluid" />
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" {...register('username', { required: true })} />
              {errors.username && <Form.Text className="text-danger">Username is required</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" {...register('password', { required: true })} />
              {errors.password && <Form.Text className="text-danger">Password is required</Form.Text>}
            </Form.Group>

            {loginError && <Alert variant="danger">{loginError}</Alert>}

            <Button variant="primary" type="submit" className="mb-3">
              Log in
            </Button>

            <div>
              <Button variant="outline-primary" className="me-2">
                Log in with Facebook
              </Button>
              <Button variant="outline-dark" className="me-2">
                Log in with GitHub
              </Button>
              <Button variant="outline-danger">
                Log in with Google
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
