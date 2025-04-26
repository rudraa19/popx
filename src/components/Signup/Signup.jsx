import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

// Custom TextField component
const TextField = ({ label, id, name, type, value, onChange, required = false, autoComplete = "on" }) => {
  return (
    <div className="form-group">
      <label className="input-label" htmlFor={id}>
        {label}{required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="input-field"
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  );
};

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'Yes'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const checkForm = () => {
    const { fullName, phoneNumber, email, password } = formData;
    if (!fullName || !phoneNumber || !email || !password) {
      alert('Please fill in all required fields.');
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="create-account-page">
      <div className="create-account-container">
        <div className="create-account-header">
          <h1>Create your<br />PopX account</h1>
        </div>
        
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required={true}
          />
          
          <TextField
            label="Phone number"
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            required={true}
          />
          
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required={true}
            autoComplete="email"
          />
          
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required={true}
            autoComplete="new-password"
          />
          
          <TextField
            label="Company name"
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
          />
          
          <div className="radio-group">
            <p className="radio-label">Are you an Agency?<span className="required">*</span></p>
            <div className="radio-options">
              <label className="radio-container">
                <input
                  type="radio"
                  name="isAgency"
                  value="Yes"
                  checked={formData.isAgency === 'Yes'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span className="radio-text">Yes</span>
              </label>
              
              <label className="radio-container">
                <input
                  type="radio"
                  name="isAgency"
                  value="No"
                  checked={formData.isAgency === 'No'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span className="radio-text">No</span>
              </label>
            </div>
          </div>
          <button 
            onClick={(e) => {
              e.preventDefault();
              if(checkForm()){
                navigate('/setting');
              }
            }} 
            className="signup-button"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;