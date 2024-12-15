// // src/components/SignInSide.js
// import React, { useState } from 'react';
// import { TextField, Button, Typography, Box, Container, Link } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { auth, signInWithEmailAndPassword } from './FireBase';

// const SignInSide = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = async (event) => {
//     event.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/'); // Redirect to home or dashboard after successful login
//     } catch (err) {
//       setError('Failed to sign in. Please check your email and password.');
//     }
//   };

//   return (
//     <Box
//       sx={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundImage: 'url(/ho.jpg)', // Add your background image here
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <Container
//         component="main"
//         maxWidth="xs"
//         sx={{
//           backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background color
//           padding: 4,
//           borderRadius: 2,
//           boxShadow: 3,
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Typography variant="h4" component="h1" gutterBottom>
//             WELCOME TO MIDORI
//           </Typography>
//           <Typography variant="h6" component="h2" sx={{ mb: 4 }}>
//             PLEASE SIGN IN
//           </Typography>
//           <Box component="form" onSubmit={handleSignIn} sx={{ mt: 1 }}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {error && <Typography color="error">{error}</Typography>}
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Link href="/out" variant="body2">
//               Don't have an account? Sign Up
//             </Link>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default SignInSide;
// src/components/SignInSide.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from './FireBase';
import { Link as RouterLink } from 'react-router-dom';

const SignInSide = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when starting sign-in
    setError(''); // Reset error state

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home or dashboard after successful login
    } catch (err) {
      setLoading(false); // Reset loading state on error
      setError(err.message || 'Failed to sign in. Please check your email and password.');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/cosmetics.jpg)', // Add your background image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background color
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            WELCOME TO GLOWBOT
          </Typography>
          <Typography variant="h6" component="h2" sx={{ mb: 4 }}>
            PLEASE SIGN IN
          </Typography>
          <Box component="form" onSubmit={handleSignIn} sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
            <Button component={RouterLink} to="/out" color="inherit">
              Don't have an account? Sign Up
              
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignInSide;
