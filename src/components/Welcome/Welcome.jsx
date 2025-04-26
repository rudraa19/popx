import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-text">
          Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.
        </p>
        
        <button 
          className="create-account-btn"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>
        
        <button 
          className="login-btn"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;