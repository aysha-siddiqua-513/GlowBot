import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Stack,
  Badge,
} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";

// Products List
const products = [
  // Updated Cleanser Products
  { id: 1, name: "Cerave Hydrating Cleanser", category: "Cleanser", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvTWGAJiJfzGUsX1gFhp-qbppceh2EuvTUwGa4-zTPMi2jQ8txDpmuvgSoLgMd5DFtWi4SJyhoJA1CINLTL4O67pA_F-neQR7CScr42tplYdHSDUUwGSLR", price: 315 },
  { id: 2, name: "Minimalist 2% Salicylic Acid + LHA Face Cleanser", category: "Cleanser", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQw-HGAjoSz9vBUk-Wxe9L9-viEaBt00L3tkKqC8Byqfz_H4cUKiJ0h0QQX6av1Pv8azYwIkiHbc0a2QAD6FtAAjiPAeEmKced_tJFzk1AHvj17lDwrvxsE", price: 284 },
  { id: 3, name: "Cetaphil Cleanser Oily Skin", category: "Cleanser", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSeWrk_3-QVaJHtC3YKzyLQtSsPupomqw3OZHaeT6jeSkf-fpAPAfoJEAAH4Ic-3tE52kIZuNbkeKdoGcy7TNpyXW--tZDcLdJ8kcyttvl5TMEirRSVTVqcJg", price: 584 },
  { id: 4, name: "Muuchstac Ocean Foam Face Wash ", category: "Cleanser", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSohZrWcs2govJBOQPg86roz0qBB4T7o3e_trSdgpUgPWniVs0sh9Sqor-Tj8sgdY2opg2_NTbA-p56zGar_An8ciWWlhJYYF4x-CcLZI", price: 279 },
  { id: 5, name: "SkinKraft Normal Skin Syndet Face Cleanser For Women", category: "Cleanser", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQuFXwkusy8kINMJcLzrM_YZwxB3MN9UJxvNFi8tm-acwmzSs3PFC6ZlN4CgHDlKNrm7AcT4m5c5DT4Pf7ACFS7uPKW3SyDYE2zYDEyilvr79_wxnMxqp1J", price: 499 },

  // Serum Products
  { id: 6, name: "Pilgrim 24K Gold Serum with Niacinamide & Hyaluronic Acid", category: "Serum", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScF9FL3fRbo7ISp5mEUE86SxYY-5N-iMv5clzok4PfMMMicflPCvbznEegJyqseAgw_QqbQRH62gCEu6otDB5hU7wto0sXevXhJ9njCR5lBiResYlaKvfSpQ", price: 508 },
  { id: 7, name: "Cetaphil Optimal Hydration Activation Serum", category: "Serum", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtFq4qguFtmlNn46a4iy6PGQb86okdh64sztG3H46p4EsXios_Ke917O1QOL-SsgE_vVihfqJyi1g6Oh6fRU62VpafxrWk8kvy-9nYin02YOnX1md1G4Nr", price: 622 },
  { id: 8, name: "Garnier Bright Complete Vitamin C Booster Face Serum", category: "Serum", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSUZGZbFSS_N150nTPHNxKExD-JJsJvMWAMZYIlUAheJnimG_akIIoP5uKRmXEHYnAWMrOY7F82OLhwh0wX8oNUP39bWRNqYAdleQQuDYjteWLHgF40WEkhWmk", price: 225 },
  { id: 9, name: "L'Oreal Paris Glycolic Bright Skin Brightening Serum", category: "Serum", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQKSwIbtstvZiyfX80xCdzTL9KacbedsjSlQMIyuqul9OqiiH7BcxS63pvXS5n_J7M9br80Qxxk48BDFKLSk6pErKHlA-nXmwDdXZtGuJSDR-B1m1_wkBcTkQ", price: 256 },
  { id: 10, name: "Minimalist 10% Niacinamide Face Serum", category: "Serum", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7cLKemGLBDSChRso-HSKwWDTWHVKa7pZwaBc452QdztWL2L0G2oXp5BMGHVJsDIF1yhZpmDM_BfIKiLred_EdKT9_gYPXww", price: 122 },
  { id: 11, name: "The Derma Co Vitamin C Face Serum", category: "Serum", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRPZxa_3kmbbN2vFuwk_lgxVbkFHzRIxCDHRpfz5pgxIJkbOStE2afi7xxOQ2Ah0D89J0AFqh2aDj75Wmh_lQt7I8HxfCaAFIRKC8u0QhmK_7THylUjIQyt", price: 313 },

  // Moisturizer Products
  { id: 12, name: "Foxtale Super Glow Moisturizer| 50ml", category: "Moisturizer", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQI0qN1zmXYtQJj6uSjyjyYPyXkRs5Muc2OOVXeZ5_EAG7gfi9y2e77IISElWHLYbCGs8-2suRKWbhjVcMrX0sD4XCuOt5EYyL9p1m2cPGo&usqp=CAE", price: 445 }, 
{ id: 13, name: "Pilgrim Squalane Glow Moisturizer - 50gm", category: "Moisturizer", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQuonQyfQkU6I-WSI_sZokXVx7MglEGkJfcUqZLGfqjtFY3ZW6NmSxMPHCXVC_uzKJ4SnQ6fNluFQ6CQQsj_jutOauOJbfIC9UtLoHlS8u-FgJH7jPfuovfwQ&usqp=CAE", price: 550 }, 
{ id: 14, name: "Emolene Cream for Dry Skin (100g)", category: "Moisturizer", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTuKyeGuObzcRWWyC_3X8tcM7Hnbrdmd6GEbMrDvfq6PxAVkVypb8rpDhD6OwlYQFgl2b9e1OQWt-hENejgZp5QSK6c7rgVsKnFHTrq0QJ7Z4AqRaxMJSHJgJ6aADo9p88TM0ZHMg&usqp=CAc", price: 328 }, 
{ id: 15, name: "Ceramides Barrier Repair Face Moisturizer ", category: "Moisturizer", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzXsW7geN0ofEexBcwAt2AQ3yKR5mj0-n437iJJmSro243WDnLHX2TNkA97x0jQAey_uhRY5vwHPjzSlbpl4jVLCQux1ysM8om6hT8nYISPmTyhOXEbOxdoA&usqp=CAE", price: 445 }, 
{ id: 16, name: "Gabit Ceramide & Hyaluronic Face Moisturizer, 50ml", category: "Moisturizer", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTatGxYvHbm-e3sYVIHEeuHzZgxWdNnUC4cBfLJe-BpS1Mlx5UJApp5QNQwUktyPr01mDi6r87BWPjyfj0PXqC1bnusP7C0GIiIx00w6r6MmJrZTl77J-xZxA&usqp=CAE", price: 400 },

// Sunscreen Products
{ id: 17, name: "Gel Sunscreen Combo For Oily Skin - SPF 55+ And PA+++ ", category: "Moisturizer", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMWT4ci-U1dvSEXvAwBHH24SQBvjiW6Q183Xqk6YIyS-3GG9MYh9P1jBZ74OvmoCP-2k1z9OBUs8e6rwaOnh-jDwoRpWXe_CkcGcCtzIgO_xod5KtnEt_DmUwDHN0ueV3OBSCZtIc&usqp=CAc", price: 593 }, 
{ id: 18, name: "Aqualogica Radiance+ Dewy Sunscreen with Watermelon & Niacinamide | SPF 50+ PA+++ w| 30g", category: "Sunscreen", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdYL5ipdGXKX92v1a7H-K5-iz5hq84ZzcRjcNz8t3bDbK94g9DLzeS7uyMgyg-m9dVafeQlMkmHd1QOrQA2lGVTqvYUO0HdZVIQNsthCMwgBfG_d6pIfVl&usqp=CAc", price: 299 }, 
{ id: 19, name: "Beauty of Joseon Relief Sun: Rice + Probiotics With SPF 50+ PA++++ (10 ml)", category: "Sunscreen", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4DJQ8s4XbYJGxBBJRbFYmomgU9ayLJcPaYNBRcZpGd5eU_paOcyr-F68NFrny-2YRqPiSfNnDnd8s5lAlrf7rIXx1b0kzk7qxv56uLVITzpmSsMXVj8WydVlw11nqNn_IHVURtvg&usqp=CAc", price: 315 }, 
{ id: 20, name: "Foxtale Matte Sunscreen For Oily, Acne Prone Skin | SPF 70 | 50 ml", category: "Sunscreen", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1ACs374OOVlYINCSivSK87DdjNArrRxc5_fvTHkf6SJjedFwlNSCh5bd8Zx9UEI-tBzWke2Ux9U2ZmMxPXjqtlwKhLzzOi1q2N0dec-ru&usqp=CAc", price: 595 }, 
{ id: 21, name: "Gabit 100% Mineral Sunscreen with SPF 50+ & PA++++ 50 ml", category: "Sunscreen", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMWT4ci-U1dvSEXvAwBHH24SQBvjiW6Q183Xqk6YIyS-3GG9MYh9P1jBZ74OvmoCP-2k1z9OBUs8e6rwaOnh-jDwoRpWXe_CkcGcCtzIgO_xod5KtnEt_DmUwDHN0ueV3OBSCZtIc&usqp=CAc", price: 465 }, 
{ id: 22, name: "SUN MILK 100% MINERAL SUNSCREEN SPF 50 PA++++", category: "Sunscreen", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_pMDPWtJrPk_xNahOPFsuRUR3Rt-2uJIoHbb9Ht-Q1WwfRuzwYAns0vVc0FIHrDLSrUXdGwXp3nYxcA0Ko7p4L-V59OF6VveG6xQ3ASFo0s7kfRfF5P7T&usqp=CAc", price: 649 }, 
{ id: 23, name: "The Derma Co 1% Hyaluronic Sunscreen Aqua Gel | SPF 50 PA++++  50g", category: "Sunscreen", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTanDkL4gnAjCMywfKKNh5H_bCq91AOoswJ2eWakzBT6GxDYwgZyzCS5dNLi8l1x2mqhJHlK1A1-iwEyWArDFXTkuvSAIucV513TdKcev9t2DvQ3SlBFriv9A&usqp=CAc", price: 439 }, 
{ id: 24, name: "Matte Max Velvet Touch Sunscreen SPF 70+ PA++++", category: "Sunscreen", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBTC2VwSq9a8ChiX-m8CMV_BQ7xJOp9yeiCID0JpqJLPmmW_gk-pbp42GUiD5kXrR9VyQ1acIqCmj3EbxyEVk49KvQEAtRZ-h_WDSqqnsGjJWwoQDSP1RJQ7Y&usqp=CAc", price: 499 }, 

];


const categories = [...new Set(products.map((product) => product.category))];

const SkinCarePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [carouselIndex, setCarouselIndex] = useState({});
  const [cart, setCart] = useState([]); // Cart State

  useEffect(() => {
    fetchCartItems(); // Fetch cart items on load
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:4004/cartItems");
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const addToCart = async (product) => {
    try {
      await axios.post("http://localhost:4004/cartItems", product);
      fetchCartItems(); // Refresh cart after adding
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleNext = (category) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [category]: (prev[category] || 0) + 2,
    }));
  };

  const handlePrev = (category) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [category]: Math.max((prev[category] || 0) - 2, 0),
    }));
  };

  const categoryImages = {
    All: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2PvArquS49s6un5bxao_UkDm9B0uF3KjsQ&s",
    Cleanser: "https://thefaceshop.in/cdn/shop/files/Cleanser_2.jpg?v=1700805001&width=300",
    Serum: "https://thefaceshop.in/cdn/shop/files/Sunscreen_1.jpg?v=1701078550&width=300",
    Moisturizer: "https://thefaceshop.in/cdn/shop/files/Moisturizer_efe67962-9f37-4330-92a7-b9a24a9e5995.jpg?v=1700805002&width=300",
    Sunscreen: "https://thefaceshop.in/cdn/shop/files/No-shine-hydrating-sun-cream.jpg?v=1701432152&width=300",
  };

  const displayedProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <Box sx={{ 
      backgroundColor: '#e6d9d0',
       }}>
      <Header/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Typography variant="h4" align="center" gutterBottom>
        Explore Skin Care Products
      </Typography>

      {/* Cart Icon */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 4 }}>
        <IconButton component={Link} to="/cart" color="inherit">
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>

      {/* Category Filters */}
      <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: 4 }}>
        <Grid item>
          <Stack alignItems="center">
            <IconButton
              onClick={() => {
                setSelectedCategory("All");
                setCarouselIndex({});
              }}
              sx={{
                borderRadius: "50%",
                padding: 0,
                border: "1px solid #ddd",
                overflow: "hidden",
                width: 80,
                height: 80,
              }}
            >
              <img
                src={categoryImages.All}
                alt="All"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </IconButton>
            <Typography>All</Typography>
          </Stack>
        </Grid>

        {categories.map((category) => (
          <Grid item key={category}>
            <Stack alignItems="center">
              <IconButton
                onClick={() => {
                  setSelectedCategory(category);
                  setCarouselIndex({ [category]: 0 });
                }}
                sx={{
                  borderRadius: "50%",
                  padding: 0,
                  border: "1px solid #ddd",
                  overflow: "hidden",
                  width: 80,
                  height: 80,
                }}
              >
                <img
                  src={categoryImages[category]}
                  alt={category}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </IconButton>
              <Typography>{category}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>

      {/* Product Section */}
      <Box sx={{ marginBottom: 6 }}>
        {categories.map((category) => {
          const filteredProducts = products.filter(
            (product) => product.category === category
          );
          const startIndex = carouselIndex[category] || 0;
          const visibleProducts = filteredProducts.slice(
            startIndex,
            startIndex + 4
          );

          return (
            <Box
              key={category}
              sx={{
                marginBottom: 6,
                display:
                  selectedCategory === category || selectedCategory === "All"
                    ? "block"
                    : "none",
              }}
            >
              <Typography variant="h5" gutterBottom>
                {category}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={() => handlePrev(category)}
                  disabled={startIndex === 0}
                  sx={{ backgroundColor: "#fff", borderRadius: "50%" }}
                >
                  <ArrowBackIosIcon />
                </IconButton>

                <Box sx={{ display: "flex", overflow: "hidden", flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      transform: `translateX(-${startIndex * 25}%)`,
                      transition: "transform 0.3s ease",
                      width: `${filteredProducts.length * 25}%`,
                    }}
                  >
                    {visibleProducts.map((product) => (
                      <Card
                        key={product.id}
                        sx={{ flex: "0 0 25%", marginRight: 2 }}
                      >
                        <CardMedia
                          component="img"
                          height="200"
                          image={product.image}
                          alt={product.name}
                          sx={{ objectFit: "contain" }}
                        />
                        <CardContent>
                          <Typography variant="h6">{product.name}</Typography>
                          <Typography>₹{product.price}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button onClick={() => addToCart(product)} color="primary">
                            Add to Cart
                          </Button>
                        </CardActions>
                      </Card>
                    ))}
                  </Box>
                </Box>

                <IconButton
                  onClick={() => handleNext(category)}
                  disabled={startIndex + 2 >= filteredProducts.length}
                  sx={{ backgroundColor: "#fff", borderRadius: "50%" }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Footer/>
    </Box>
  );
};

export default SkinCarePage;

