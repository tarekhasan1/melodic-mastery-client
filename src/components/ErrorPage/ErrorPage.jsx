import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const ErrorPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://seahawkmedia.com/wp-content/uploads/2021/08/How-to-redirect-your-404-page-to-the-home-page-in-WordPress-01-1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h1>Error 404</h1>
        <p>Oops! Page not found.</p>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#27ae60',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
