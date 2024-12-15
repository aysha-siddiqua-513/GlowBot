
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Grid, Box, Button, Typography, CardMedia, Container, 
  AppBar, Toolbar, IconButton, Badge 
} from '@mui/material';
import axios from 'axios';
import { 
  ArrowUpward, Home as HomeIcon, ShoppingCart as ShoppingCartIcon, 
  Payment as PaymentIcon 
} from '@mui/icons-material';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:4004/cartItems');
      setCartItems(response.data);
      calculateTotal(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:4004/cartItems/${id}`);
      const updatedItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedItems);
      calculateTotal(updatedItems);
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  const calculateTotal = (items) => {
    const total = items.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    );
    setTotalAmount(total);
  };

  const handleCheckoutClick = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
  };

  return (
    <Container style={{ backgroundColor: '#e0ffe0', padding: '20px', borderRadius: '8px', marginTop: '80px' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" component={RouterLink} to="/" color="inherit">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>
          <Typography variant="h6" style={{ marginRight: '20px' }}>
            Total: ₹{totalAmount.toFixed(2)}
          </Typography>
          <IconButton component={RouterLink} to="/cart" color="inherit">
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton edge="end" color="inherit" onClick={handleCheckoutClick}>
            <PaymentIcon />
          </IconButton>
          {isCheckoutOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              backgroundColor: 'white',
              padding: '10px',
              borderRadius: '4px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              zIndex: 1300
            }}>
              {/* Payment logic goes here */}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      {cartItems.length === 0 ? (
        <Box display="flex" flexDirection="column" alignItems="center" height="30vh">
          <img
            src="https://images.apollo247.in/images/ic-empty-cart.svg"
            alt="Empty Cart"
            style={{ width: '200px', height: '200px' }}
          />
          <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'center' }}>
            Your cart is empty
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            style={{ marginTop: '20px' }} 
            component={RouterLink} 
            to="/care"
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Box>
          <Grid container spacing={2}>
            {cartItems.map((item) => (
              <Grid 
                item xs={12} 
                key={item.id} 
                style={{ 
                  backgroundColor: '#e0ffe0', 
                  margin: '10px 0', 
                  padding: '10px', 
                  borderRadius: '8px' 
                }}
              >
                <Grid container alignItems="center">
                  <Grid item xs={2}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.name}
                      style={{ borderRadius: '8px', width: '100%' }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography>₹{item.price}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button 
                      variant="outlined" 
                      color="secondary" 
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      <IconButton 
        onClick={scrollToTop} 
        style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#fff' }}
      >
        <ArrowUpward />
      </IconButton>
    </Container>
  );
};

export default Cart;
