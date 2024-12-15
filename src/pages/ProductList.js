import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom';

const products = [
  { id: 1, name: 'Cerave Hydrating Cleanser', price: 315, image: 'image_url_1' },
  { id: 2, name: 'Minimalist Face Cleanser', price: 284, image: 'image_url_2' },
  // Add other products here
];

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  return (
    <Grid container spacing={4} style={{ padding: '20px' }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia component="img" height="200" image={product.image} alt={product.name} />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography>₹{product.price}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" onClick={() => handleAddToCart(product)}>
                Add to Cart
                <ShoppingCartIcon style={{ marginLeft: '10px' }} />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <Button
        variant="contained"
        color="secondary"
        component={RouterLink}
        to="/cart"
        style={{ marginTop: '20px' }}
      >
        View Cart ({cartItems.length})
      </Button>
    </Grid>
  );
};

export default ProductList;
