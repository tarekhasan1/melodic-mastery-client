import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "./Signup.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async(data) => {
    const { password, confirmPassword } = data;

    // Check password length
    if (password.length < 6) {
      setLoginError("Password should be at least 6 characters long");
      return;
    }

    // Check for at least one uppercase letter and one number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).*$/;
    if (!passwordRegex.test(password)) {
      setLoginError(
        "Password should contain at least one uppercase letter and one number"
      );
      return;
    }

    // Check for at least two special characters
    const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    const specialCharsCount = (password.match(specialCharsRegex) || []).length;
    if (specialCharsCount < 1) {
      setLoginError("Password should contain at least one special characters");
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setLoginError("Password and confirm password do not match");
      return;
    }

    // Password meets all requirements, continue with form submission
    console.log(data);

    try {
      await createUser(data.email, data.password, data.name, data.photoURL);
      navigate(location.state?.from || "/");
      createUserData(
        data.name,
        data.photoURL,
        data.email
      );
      alert("Successfully Registered!");
  } catch (error) {
      alert("Registered Failed! Try again.");
      console.log(error);
  }
  };


    // create user in database
    async function createUserData(name, image, email) {
      try {
        const response = await axios.post(
          `
                  ${import.meta.env.VITE_MELODIC_MASTERY_SERVER}/create-user`,
          JSON.stringify({
            name,
            image,
            email,
            role: "student",
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="signup-container signup-bg">
      <Row className="justify-content-center w-100">
        <Col className="d-flex align-items-center" xs={12} md={6} lg={4}>
          <div className="text-center mt-5">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/man-showing-something-8252907-6622766.png"
              alt="Login"
              className="img-fluid"
            />
          </div>
        </Col>
        <Col className="d-flex align-items-center" xs={12} md={6} lg={4}>
          <div className="w-100">
            <h2 className="text-center text-white">Register</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="my-3" controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <Form.Text className="text-danger">
                    Name is required
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="my-3" controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <Form.Text className="text-danger">
                    Email is required
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="my-3" controlId="formPhotoURL">
                <Form.Control
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <Form.Text className="text-danger">
                    Photo URL is required
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className='my-3' controlId="formPassword">
              <div className="password-input">
                <Form.Control type={showPassword ? 'text' : 'password'} placeholder='Password' {...register('password', { required: true })} />
                <div className="password-toggle">
                  <Button variant="link" onClick={toggleShowPassword}>
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                  </Button>
                </div>
              </div>
              {errors.password && <Form.Text className="text-danger">Password is required</Form.Text>}
            </Form.Group>
            
            <Form.Group className='my-3' controlId="formConfirmPassword">
              <div className="password-input">
                <Form.Control type={showConfirmPassword ? 'text' : 'password'} placeholder='Confirm Password' {...register('confirmPassword', { required: true })} />
                <div className="password-toggle">
                  <Button variant="link" onClick={toggleShowConfirmPassword}>
                    {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
                  </Button>
                </div>
              </div>
              {errors.confirmPassword && <Form.Text className="text-danger">Confirm Password is required</Form.Text>}
            </Form.Group>
            

              {loginError && <Alert variant="danger">{loginError}</Alert>}

              <input className="btn btn-secondary mb-3 mt-3" value='Register' type="submit" />

              <p className="mt-3 text-secondary">
                Already have an account? Please{" "}
                <Link className="text-warning fs-3" to="/login">
                  Login
                </Link>{" "}
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
