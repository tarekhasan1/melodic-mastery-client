import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Alert, Row, Col } from 'react-bootstrap';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
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
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-showing-something-8252907-6622766.png" alt="Login" className="img-fluid" />
          </div>
        </Col>
        <Col className='d-flex align-items-center'  xs={12} md={6} lg={4}>
          <div className='w-100'>
            <h2 className='text-center text-white'>Register</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className='my-3' controlId="formName">
                <Form.Control type="text" placeholder='Name' {...register('name', { required: true })} />
                {errors.name && <Form.Text className="text-danger">Name is required</Form.Text>}
              </Form.Group>

              <Form.Group className='my-3' controlId="formEmail">
                <Form.Control type="email" placeholder='Email' {...register('email', { required: true })} />
                {errors.email && <Form.Text className="text-danger">Email is required</Form.Text>}
              </Form.Group>

              <Form.Group className='my-3' controlId="formPhotoURL">
                <Form.Control type="text" placeholder='Photo URL' {...register('photoURL', { required: true })} />
                {errors.photoURL && <Form.Text className="text-danger">Photo URL is required</Form.Text>}
              </Form.Group>

              <Form.Group className='my-3' controlId="formPassword">
                <Form.Control type="password" placeholder='Password' {...register('password', { required: true })} />
                {errors.password && <Form.Text className="text-danger">Password is required</Form.Text>}
              </Form.Group>

              <Form.Group className='my-3' controlId="formConfirmPassword">
                <Form.Control type="password" placeholder='Confirm Password' {...register('confirmPassword', { required: true })} />
                {errors.confirmPassword && <Form.Text className="text-danger">Confirm Password is required</Form.Text>}
              </Form.Group>

              {loginError && <Alert variant="danger">{loginError}</Alert>}

              <Button variant="secondary" type="submit" className="mb-3 mt-3">
                Register
              </Button>

              <p className='mt-3 text-secondary'>Already have an account? Please <Link className='text-primary fs-3' to='/login'>Login</Link> </p>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
