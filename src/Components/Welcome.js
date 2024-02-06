// import React, { useState } from 'react';
// import { Paper } from '@mui/material';

// const WelcomePage = () => {
//   const [hovered, setHovered] = useState(false);

//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '95vh',
//     backgroundImage: 'url("https://images.pexels.com/photos/4553124/pexels-photo-4553124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     padding: '20px',
//   };

//   const titleStyle = {
//     fontSize: '2rem',
//     marginBottom: '20px',
//     textAlign: 'center',
//   };

//   const descriptionStyle = {
//     fontSize: '1.2rem',
//     marginBottom: '20px',
//     textAlign: 'center',
//   };

//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     fontSize: '1rem',
//     cursor: 'pointer', // add pointer cursor
//     margin: '0 10px', // add margin between buttons
//     transition: 'background-color 0.3s', // smooth transition for hover effect
//     textDecoration: 'none', // remove underline
//     textAlign: 'center', // center text
//   };

//   const buttonHoverStyle = {
//     backgroundColor: '#0056b3', // darker color on hover
//   };

//   const handleGetStarted = () => {
//     // Add functionality here if needed
//     console.log('Get Started clicked');
//   };

//   const handleLogin = () => {
//     // Add functionality here for login
//     console.log('Login clicked');
//   };

//   const handleSignup = () => {
//     // Add functionality here for signup
//     console.log('Signup clicked');
//   };

//   return (
//     <div style={containerStyle}>
//       <Paper variant="outlined" style={{ width: '900px', borderRadius: '25px', opacity: '0.8', padding: '20px' }}>
//         <h1 style={titleStyle}>Welcome to Expense Tracker</h1>
//         <p style={descriptionStyle}>Track your expenses easily with our simple and intuitive expense tracker app.</p>
//         <div style={buttonContainerStyle}>
//           <button 
//             style={{ ...buttonStyle, ...(hovered ? buttonHoverStyle : null) }} // apply hover style when hovered
//             onMouseEnter={() => setHovered(true)} // set hovered state to true on mouse enter
//             onMouseLeave={() => setHovered(false)} // set hovered state to false on mouse leave
//             onClick={handleGetStarted}
//           >
//             Login
//           </button>
//           <button 
//             style={{ ...buttonStyle, backgroundColor: '#28a745' }} // different style for login button
//             onClick={handleLogin}
//           >
//             Signup
//           </button>
          
//         </div>
//       </Paper>
//     </div>
//   );
// };

// export default WelcomePage;
import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const WelcomePage = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '95vh',
    backgroundImage: 'url("https://images.pexels.com/photos/4553124/pexels-photo-4553124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer', // add pointer cursor
    margin: '0 10px', // add margin between buttons
    transition: 'background-color 0.3s', // smooth transition for hover effect
    textDecoration: 'none', // remove underline
    textAlign: 'center', // center text
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3', // darker color on hover
  };

  // function handleGetStarted() {
  //   // Add functionality here if needed
  //   console.log('Get Started clicked');
  // }

  const handleLogin = () => {
    // Redirect to login page
    navigate('/login');
  };

  const handleSignup = () => {
    // Redirect to signup page
    navigate('/signup');
  };

  return (
    <div style={containerStyle}>
      <Paper variant="outlined" style={{ width: '900px', borderRadius: '25px', opacity: '0.8', padding: '20px' }}>
        <h1 style={titleStyle}>Welcome to Weather App</h1>
        <p style={descriptionStyle}>Welcome to our weather app! Stay informed about the latest forecasts, current conditions, and upcoming weather events in your area</p>
        <div style={buttonContainerStyle}>
          <button 
            style={{ ...buttonStyle, ...(hovered ? buttonHoverStyle : null) }} // apply hover style when hovered
            onMouseEnter={() => setHovered(true)} // set hovered state to true on mouse enter
            onMouseLeave={() => setHovered(false)} // set hovered state to false on mouse leave
            onClick={handleLogin}
          >
            Login
          </button>
          <button 
            style={{ ...buttonStyle, backgroundColor: '#28a745' }} // different style for login button
            onClick={handleSignup}
          >
            Signup
          </button>
          
        </div>
      </Paper>
    </div>
  );
};

export default WelcomePage;
