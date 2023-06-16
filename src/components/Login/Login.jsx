import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const { logIn, signInWithGoogle, signInWithGithub, signInWithFacebook } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    console.log("data:", data);
    try {
      await logIn(data.email, data.password);
      Navigate(from, { replace: true });
      alert("Successfully Logged in!");
    } catch (error) {
      setLoginError(error.message);
      console.log(error);
    }
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        createUserData(
          loggedInUser.displayName,
          loggedInUser.photoURL,
          loggedInUser.email
        );
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignInWithGithub = () => {
    signInWithGithub()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        createUserData(
          loggedInUser.displayName,
          loggedInUser.photoURL,
          loggedInUser.email
        );
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleSignInWithFacebook = () => {
    signInWithFacebook()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        createUserData(
          loggedInUser.displayName,
          loggedInUser.photoURL,
          loggedInUser.email
        );
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
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
    <div className="login-container bg-image d-flex align-items-center">
      <Row className="justify-content-center w-100">
        <Col className="d-flex align-items-center" xs={12} md={6} lg={4}>
          <div className="text-center mt-5">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/corporate-showing-something-8252908-6622767.png?f=webp"
              alt="Login"
              className="img-fluid"
            />
          </div>
        </Col>
        <Col className="d-flex align-items-center" xs={12} md={6} lg={4}>
          <div className="w-100">
            <h2 className="text-center text-white">Login</h2>
            <div className="form-cont">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="my-3" controlId="formUsername">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                />
                {errors.username && (
                  <Form.Text className="text-danger">
                    Username is required
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="my-3" controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Your Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <Form.Text className="text-danger">
                    Password is required
                  </Form.Text>
                )}
              </Form.Group>

              {loginError && <Alert variant="danger">{loginError}</Alert>}

              <Button variant="secondary" type="submit" className="mb-3 mt-3">
                Log in
              </Button>
            </Form>
              <div className="d-flex align-items-center">
                <div>
                  <h3 className="text-white">Log in with</h3>
                  <div>
                    <button
                    onClick={handleSignInWithFacebook} className="ms-0 me-2 border-0  fs-2 text-secondary bg-transparent">
                      <i className="fab fa-facebook"></i>
                    </button>
                    <button onClick={handleSignInWithGithub} className="me-2 border-0 text-secondary  fs-2 bg-transparent">
                      <i className="fab fa-github"></i>
                    </button>
                    <button
                      onClick={handleSignInWithGoogle}
                      className="me-2 border-0 text-secondary fs-2 bg-transparent"
                    >
                      <i className="fab fa-google"></i>
                    </button>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-white">
                New to Here? Please{" "}
                <Link className="text-warning fs-3" to="/register">
                  Register
                </Link>{" "}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
