import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Alert, Row, Col } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';

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
    <div className="login-container my-5">
      <Row className="justify-content-center">
        <Col className='d-flex align-items-center' xs={12} md={6} lg={4}>
          <div className="text-center mt-5">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/corporate-showing-something-8252908-6622767.png?f=webp" alt="Login" className="img-fluid" />
          </div>
          </Col>
          <Col className='d-flex align-items-center'  xs={12} md={6} lg={4}>
          <div className='w-100'>
          <h2 className='text-center text-white'>Login</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='my-3' controlId="formUsername">
              <Form.Control type="email" placeholder='Your Email' {...register('username', { required: true })} />
              {errors.username && <Form.Text className="text-danger">Username is required</Form.Text>}
            </Form.Group>

            <Form.Group className='my-3' controlId="formPassword">
              <Form.Control type="password" placeholder='Your Password' {...register('password', { required: true })} />
              {errors.password && <Form.Text className="text-danger">Password is required</Form.Text>}
            </Form.Group>

            {loginError && <Alert variant="danger">{loginError}</Alert>}

            <Button variant="secondary" type="submit" className="mb-3 mt-3">
              Log in
            </Button>

            <div className='d-flex align-items-center'>
            <div>
            <h3 className='text-white'>Log in with</h3>
              <div>
              <button className="ms-0 me-2 border-0  fs-2 text-secondary bg-transparent">
              <i className="fab fa-facebook"></i>
              </button>
              <button className="me-2 border-0 text-secondary  fs-2 bg-transparent">
              <i className="fab fa-github"></i>
              </button>
              <button className='me-2 border-0 text-secondary fs-2 bg-transparent'>
              <i className="fab fa-google"></i>
              </button>
              </div>
            </div>
            </div>
            <p className='mt-3 text-secondary'>New to Here? Please <Link className='text-primary fs-3' to='/register'>Register</Link> </p>
          </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
