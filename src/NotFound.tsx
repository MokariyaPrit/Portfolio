// NotFound.tsx

import './NotFound.css';  // Import the CSS for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! This page is not available.</p>
        <button className="back-home-btn" onClick={() => window.location.href = '/'}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
