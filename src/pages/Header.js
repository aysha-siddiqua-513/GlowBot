import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = ({ user}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0)',
        backdropFilter: 'blur(2px)',
        boxShadow: 'none',
        position: 'absolute',
        width: '100%',
      }}
    >
      <Toolbar>
        <Typography variant="h2" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          <RouterLink to="/" style={{ textDecoration: 'none', color: '#3B3327' }}>
            GLOWBOT
          </RouterLink>
        </Typography>
        <Button component={RouterLink} to="/" color="inherit">HOME</Button>
        <Button component={RouterLink} to="/skin" color="inherit">SKINCARE</Button>
        <Button component={RouterLink} to="/shop" color="inherit">SHOP</Button>
        <Button component={RouterLink} to="/tracker" color="inherit">TRACKER</Button>
        <Button component={RouterLink} to="/blog" color="inherit">BLOG</Button>
        <Button component={RouterLink} to="/vdo" color="inherit">TUTORIALS</Button>

       {user ? (
  <>
    <Button component={RouterLink} to="/profile" color="inherit">PROFILE</Button>
    <IconButton
      edge="end"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleMenu}
      color="inherit"
    >
      {user.photoURL ? (
        <Avatar src={user.photoURL} alt={user.displayName} sx={{ width: 32, height: 32, marginRight: 1 }} />
      ) : (
        <AccountCircle />
      )}
      <Typography variant="body1" sx={{ ml: 1 }}>
        {user.displayName}
      </Typography>
    </IconButton>
    {/* Menu for account settings and logout */}
  </>
) : (
  <Button color="inherit" component={RouterLink} to="/in">LOGIN</Button>
)}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

