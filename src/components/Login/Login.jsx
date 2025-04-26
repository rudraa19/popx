import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: '#cccccc'
  });

  useEffect(() => {
    if (formData.email && formData.password) {
      setButtonStyle({ backgroundColor: '#6c25ff' });
    } else {
      setButtonStyle({ backgroundColor: '#cccccc' });
    }
  }, [formData.email, formData.password]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const checkForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      alert('Please fill in all required fields.');
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkForm()) {
      navigate('/setting');
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Signin to your<br />PopX account</h1>
          <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <TextField
              id="email"
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              placeholder="Enter email address"
              required
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              InputLabelProps={{ required: false }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  height: '50px',
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#8753ff',
                  },
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ccc',
                },
                '& .MuiInputLabel-root': {
                  transform: 'translate(14px, -6px) scale(0.75)',
                  backgroundColor: '#f8f8f8',
                  padding: '0 5px',
                  color: '#8753ff',
                  '&.Mui-focused': {
                    color: '#8753ff'
                  }
                }
              }}
            />
          </div>

          <div className="form-group">
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              placeholder="Enter password"
              required
              margin="normal"
              value={formData.password}
              InputLabelProps={{ required: false }}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  height: '50px',
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#8753ff',
                  },
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ccc',
                },
                '& .MuiInputLabel-root': {
                  transform: 'translate(14px, -6px) scale(0.75)',
                  backgroundColor: '#f8f8f8',
                  padding: '0 5px',
                  color: '#8753ff',
                  '&.Mui-focused': {
                    color: '#8753ff'
                  }
                }
              }}
            />
          </div>

          <button type="submit" className="login-button" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;