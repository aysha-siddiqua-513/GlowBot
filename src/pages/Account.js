import React, { useState, useEffect } from 'react';
import { updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, storage, db } from './FireBase';
import { TextField, Button, Typography, Box, Avatar, Grid, Paper, Divider, CircularProgress } from '@mui/material';
import CustomAppBar from './AppBar';
import CustomFooter from './Footer';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import axios from 'axios';

const API_KEY = 'f676ad766a124f79364d5ac5700d59f9';

const Account = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (auth.currentUser) {
          setUsername(auth.currentUser.displayName || '');
          setEmail(auth.currentUser.email || '');
          setProfilePicUrl(auth.currentUser.photoURL || '');

          const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setBio(userData.bio || '');
            setLocation(userData.location || '');
          }
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);



  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert('File size exceeds 5MB or no file selected.');
    }
  };

  const handleUpdateProfile = async () => {
    if (!auth.currentUser) {
      alert('User is not authenticated.');
      return;
    }

    setLoading(true);
    try {
      let downloadURL = profilePicUrl;

      if (file) {
        const fileRef = ref(storage, `profile_pics/${auth.currentUser.uid}/${file.name}`);
        await uploadBytes(fileRef, file);
        downloadURL = await getDownloadURL(fileRef);
      }

      await updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: downloadURL
      });

      
      setProfilePicUrl(downloadURL);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLocationBlur = async () => {
    if (auth.currentUser) {
      try {
        await setDoc(doc(db, 'users', auth.currentUser.uid), {
          location: location,
        }, { merge: true });
        alert('Location updated successfully!');
      } catch (error) {
        console.error('Error updating location:', error);
        alert('Error updating location. Please try again.');
      }
    }
  };

  return (
    <>
      <CustomAppBar />
      <Box sx={{ p: 4, maxWidth: 800, margin: 'auto' }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Account Settings
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={4} textAlign="center">
              <Avatar
                src={profilePicUrl}
                alt="Profile"
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ marginTop: '1rem' }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                disabled
              />
              <TextField
                label="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
              <TextField
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onBlur={handleLocationBlur}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateProfile}
                disabled={loading}
                sx={{ mt: 2 }}
              >
                {loading ? 'Updating...' : 'Update Profile'}
              </Button>
            </Grid>
          </Grid>



          <Divider sx={{ my: 3 }} />
          <Typography variant="body2" color="textSecondary">
            Please note that changes to your username and profile picture will be reflected across all devices where you are logged in.
          </Typography>
        </Paper>
      </Box>
      <CustomFooter />
    </>
  );
};

export default Account;
