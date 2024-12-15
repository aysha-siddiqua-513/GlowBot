import React, { useState } from 'react';
import {
  AppBar, Tabs, Tab, Toolbar, Avatar, Typography,
  IconButton, TextField, Box, Button
} from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';
import { uploadProfilePicture } from './FireBase'; // Import the upload function from your firebase.js

const Profile = () => {
  const [isEditing, setIsEditing] = useState({
    username: false,
    email: false,
    address: false,
    nickname: false,
    dob: false,
  });

  const [profileData, setProfileData] = useState({
    username: 'Jenny Wilson',
    email: 'jenny@gmail.com',
    address: 'New York, USA',
    nickname: 'Sky Angel',
    dob: 'April 28, 1981',
  });

  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
  const [isImageEditing, setIsImageEditing] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleEditToggle = (field) => {
    setIsEditing((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleInputChange = (field, value) => {
    setProfileData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set the new image URL
        setImageFile(file); // Save the file for uploading later
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSaveImage = async () => {
    if (imageFile) {
      // Call the upload function here
      const user = {}; // Replace with actual user object
      await uploadProfilePicture(imageFile, user); // Make sure to pass the correct user
      setIsImageEditing(false);
    }
  };

  const handleSaveProfileData = (field) => {
    // Handle saving profile data changes to your backend or Firebase
    // For example, you could call an update function from your Firebase logic
    setIsEditing((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };

  return (
    <div>
      {/* Navbar */}
      <AppBar position="static" color="default">
        <Toolbar>
          <Tabs value={false} indicatorColor="primary" textColor="inherit">
            <Tab label="Dashboard" />
            <Tab label="Edit Profile" />
            <Tab label="Edit Password" />
            <Tab label="User Logout" />
          </Tabs>
        </Toolbar>
      </AppBar>

      {/* Profile Content */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Box
          sx={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: 4,
            maxWidth: 600,
            width: '100%',
          }}
        >
          {/* Profile Picture and Name */}
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Avatar
              src={profileImage} // Use the profileImage state
              alt="Profile Picture"
              sx={{ width: 120, height: 120, marginBottom: 2 }}
            />
            <Typography variant="h5" fontWeight="bold">{profileData.username || 'No Username'}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              @{profileData.nickname || 'No Nickname'}
              <IconButton size="small" color="primary" onClick={() => handleEditToggle('nickname')}>
                <EditIcon fontSize="small" />
              </IconButton>
            </Typography>

            {/* Edit Profile Picture */}
            {isImageEditing ? (
              <Box display="flex" alignItems="center">
                <input
                  accept="image/*"
                  type="file"
                  style={{ display: 'none' }}
                  id="file-input"
                  onChange={handleImageChange}
                />
                <label htmlFor="file-input">
                  <Button variant="contained" component="span" color="primary" sx={{ marginTop: 2 }}>
                    Upload Image
                  </Button>
                </label>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={handleSaveImage} // Save the uploaded image
                >
                  <SaveIcon fontSize="small" />
                </IconButton>
              </Box>
            ) : (
              <IconButton size="small" color="primary" onClick={() => setIsImageEditing(true)}>
                <EditIcon fontSize="small" />
              </IconButton>
            )}
          </Box>

          {/* Profile Details */}
          <Box marginTop={4}>
            {Object.entries(profileData).map(([field, value]) => (
              <Box
                key={field}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginBottom={2}
              >
                <Typography variant="body1" fontWeight="bold">{field.charAt(0).toUpperCase() + field.slice(1)}</Typography>
                <Box display="flex" alignItems="center">
                  {isEditing[field] ? (
                    <TextField
                      size="small"
                      value={value}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      disabled={field === 'email'} // Disable editing for email
                    />
                  ) : (
                    <Typography variant="body1" marginRight={1}>{value || 'No data'}</Typography>
                  )}
                  {/* Only show edit icon for fields that can be edited */}
                  {field !== 'email' && (
                    <IconButton size="small" color="primary" onClick={() => {
                      if (isEditing[field]) {
                        handleSaveProfileData(field);
                      } else {
                        handleEditToggle(field);
                      }
                    }}>
                      {isEditing[field] ? <SaveIcon fontSize="small" /> : <EditIcon fontSize="small" />}
                    </IconButton>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
