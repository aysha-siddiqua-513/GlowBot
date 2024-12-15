// import React from 'react';

// const Footer = () => {
//   return (
//     <footer style={footerStyle}>
//       <p style={footerTextStyle}>© 2024 GLOWBOT. All rights reserved.</p>
      
//       <form style={formStyle} aria-label="Subscribe to our newsletter">
//         <input 
//           type="email" 
//           placeholder="Subscribe to our newsletter" 
//           style={inputStyle}
//           aria-label="Email address"
//         />
//         <button type="submit" style={buttonStyle}>Subscribe</button>
//       </form>

//       <div style={socialMediaStyle}>
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Facebook</a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twitter</a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram</a>
//       </div>
//     </footer>
//   );
// };

// const footerStyle = {
//   backgroundColor: '#4a4031', // light beige
//   padding: '20px',
//   textAlign: 'center',
//   borderTop: '1px solid #cfc6b8', // subtle brownish-gray
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center', // center-align content
// };

// const footerTextStyle = {
//   color: '#f8f6f1', // soft brown
//   marginBottom: '10px',
// };

// const formStyle = {
//   marginTop: '15px',
//   display: 'flex',
//   justifyContent: 'center', // center form items
// };

// const inputStyle = {
//   padding: '10px',
//   fontSize: '16px',
//   border: '1px solid #cfc6b8', // subtle brownish-gray
//   borderRadius: '4px',
//   width: '250px',
//   marginRight: '10px',
// };

// const buttonStyle = {
//   padding: '10px 20px',
//   backgroundColor: '#f8f6f1', // soft brown
//   color: '#4a4031',
//   border: 'none',
//   borderRadius: '4px',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s', // add a transition effect
// };

// const socialMediaStyle = {
//   marginTop: '15px',
// };

// const linkStyle = {
//   margin: '0 10px',
//   color: '#f8f6f1', // soft brown
//   textDecoration: 'none', // remove underline
//   fontSize: '16px',
// };

// export default Footer;
import React, { useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Email is required');
      return;
    }

    try {
      // Make POST request to save email to db1.json using json-server
      const response = await axios.post('http://localhost:5001/subscribers', { email });

      if (response.status === 201) {
        setSuccessMessage('Subscribed successfully!');
        setErrorMessage('');
        setEmail('');
      }
    } catch (error) {
      console.error('Error saving email:', error);
      setErrorMessage('Failed to subscribe. Try again later.');
    }
  };

  return (
    <footer style={footerStyle}>
      <p style={footerTextStyle}>© 2024 GLOWBOT. All rights reserved.</p>

      <form style={formStyle} aria-label="Subscribe to our newsletter" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Subscribe to our newsletter"
          style={inputStyle}
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <button type="submit" style={buttonStyle}>Subscribe</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      <div style={socialMediaStyle}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram</a>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#4a4031', // light beige
  padding: '20px',
  textAlign: 'center',
  borderTop: '1px solid #cfc6b8', // subtle brownish-gray
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // center-align content
};

const footerTextStyle = {
  color: '#f8f6f1', // soft brown
  marginBottom: '10px',
};

const formStyle = {
  marginTop: '15px',
  display: 'flex',
  justifyContent: 'center', // center form items
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #cfc6b8', // subtle brownish-gray
  borderRadius: '4px',
  width: '250px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#f8f6f1', // soft brown
  color: '#4a4031',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s', // add a transition effect
};

const socialMediaStyle = {
  marginTop: '15px',
};

const linkStyle = {
  margin: '0 10px',
  color: '#f8f6f1', // soft brown
  textDecoration: 'none', // remove underline
  fontSize: '16px',
};

export default Footer;