import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Header from './Header';
import Footer from './Footer';

const articles = [
  {
    id: 1,
    title: "When To Apply Hair Oil And Hair Serum For Healthy Hair?",
    image: "https://www.vilvahstore.com/cdn/shop/articles/Hair_oil_Serum.jpg?v=1708517621&width=300",
    summary: "Although it's hard to follow, our mothers are always right.",
    description: `
    <div style="padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Why Use Hair Oil?</h2>
        <p>Hair oil application is a multi-faceted hair care routine with scientific perks. 
        The moisture-locking properties prevent dehydration, especially beneficial for dry or damaged strands. 
        Scalp massage with oil stimulates blood circulation and reduces stress.</p>

        <p>Applying hair oil transcends aesthetics – it's a scientifically backed, haircare routine 
        to nurture and beautify your hair. Men need hair care too, and for this, choose the 
        <strong>best hair oil for men</strong> for optimal results.</p>

        <h3>Which is the Best Time to Apply Hair Oil?</h3>
        <p>The optimal time to apply hair oil is before bedtime. During sleep, your body goes into repair mode, 
        allowing the oil to penetrate deeply, nourishing the roots and preventing dryness. A nighttime application 
        also ensures the oil is not washed away during the day, maximizing its benefits. The calming ritual of a 
        pre-sleep hair massage promotes relaxation, contributing to better sleep quality.</p>

        <p>You can also use it as a pre-wash in your hair care routine. Before showering, generously coat your strands 
        with oil. Choose a nourishing oil like hair growth oil, the <strong>best hair oil for hair fall</strong>. 
        The oil acts as a pre-treatment, detangling knots and minimizing breakage during the cleansing process.</p>

        <h3>How to Use Hair Oil?</h3>
        <p>The inversion oiling method is one of the best oil application techniques. Start by flipping your head 
        upside down to enhance the benefits of hair oil. Warm the oil and gently massage it into your scalp while 
        your head is inverted, increasing blood flow and promoting hair growth. Leave the oil on for at least 
        15-20 minutes or overnight before washing it off.</p>

        <h2>Why Use Hair Serum?</h2>
        <p>Hair serums offer numerous benefits. They help tame frizz, smooth split ends, and add shine by sealing the 
        hair cuticle. They detangle, reduce breakage, and enhance manageability. The <strong>best hair serum for women</strong> 
        contains nourishing oils like hibiscus and arnica oil, which penetrate deeply to moisturize and strengthen the 
        hair follicles.</p>

        <h3>Which is the Best Time to Apply Hair Serum?</h3>
        <p>The best time to apply hair serum is after washing and towel-drying your hair. This is when your hair cuticles 
        are open, allowing the serum to penetrate deeply and provide maximum benefits.</p>

        <p>For best results, apply the serum when your hair is slightly damp. It helps lock in moisture and prevent frizz 
        throughout the day. Start with a pea-sized amount for short hair and adjust accordingly for longer strands.</p>

        <p>Applying hair serum before styling with heat tools acts as a protective barrier, minimizing damage caused by 
        excessive heat exposure. The serum creates a smooth surface, making it easier to manage and style your hair.</p>

        <h3>How to Use Hair Serum?</h3>
        <ul>
          <li>Use a lightweight formula for even distribution without weighing down your locks.</li>
          <li>Start with a small amount, usually a dime-sized drop, and adjust based on your hair length and thickness.</li>
          <li>Ensure uniform application to prevent concentrated spots.</li>
          <li>Focus on the mid-lengths to the ends, avoiding the roots to prevent greasiness.</li>
          <li>Apply with your fingers for targeted application or use a wide-tooth comb to distribute it evenly.</li>
        </ul>

        <p><strong>Wrapping Up:</strong> Next time your mom suggests applying hair oil, don't refuse it. 
        Instead, enjoy the relaxing massage filled with care and love. Save time by checking out the Vilvah store online, 
        where you’ll find the best natural hair care products formulated with you in mind.</p>
      </div>
    `,
    tags: ['Hair Care'],
  },
  {
    id: 2,
    title: "Does Castor Oil Help Hair Growth?",
    image: "https://www.vilvahstore.com/cdn/shop/articles/Castor-Oil.jpg?v=1724740350&width=300",
    summary: "An age-old ingredient that your scalp will thank you for.",
    description: `
          <div style="padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Ah, Castor Oil!</h2>
            <p>
              The gooey, thick, and often misunderstood beauty potion that has graced the shelves 
              of grandmas, moms, and now the Instagram generation. Whether you're dealing with 
              hair thinning or simply trying to fix damaged hair, castor oil has likely been recommended to you.
            </p>
            <h3>The Buzz Around Castor Oil for Hair</h3>
            <p>
              Before we start, let’s get to know our star ingredient. Castor oil is extracted 
              from the seeds of the castor plant, <em>Ricinus Communis</em>. This haircare oil 
              has been a multitasker in beauty routines for centuries—moisturizing skin, aiding 
              digestion (though we won’t go there today), and now becoming the darling of hair growth remedies 
              with influencers swearing by its magic.
            </p>
            <h3>What Makes Castor Oil Special?</h3>
            <ul>
              <li><strong>Ricinoleic Acid:</strong> Known for its anti-inflammatory and antimicrobial properties.</li>
              <li><strong>Omega-6 and Omega-9 Fatty Acids:</strong> Nourish the hair and scalp.</li>
              <li><strong>Vitamin E:</strong> A potent antioxidant that protects against free radicals and prevents split ends.</li>
            </ul>
            <h3>How Does Castor Oil Work for Hair Growth?</h3>
            <ul>
              <li><strong>Scalp Health:</strong> Ricinoleic acid helps reduce inflammation, balances the scalp’s pH, and reduces dandruff, creating the foundation for healthy hair.</li>
              <li><strong>Moisturization:</strong> Its thick nature locks in moisture, strengthening the hair shaft and preventing breakage, though it may not speed up growth directly.</li>
              <li><strong>Blood Circulation:</strong> Massaging castor oil stimulates blood flow, ensuring more nutrients reach hair roots.</li>
              <li><strong>Antimicrobial Properties:</strong> Keeps the scalp free from infections and soothes itching or irritation.</li>
            </ul>
            <p>
              With regular use, castor oil can transform your hair. Be patient—hair growth takes time, 
              but the results are worth it!
            </p>
            <p>
              <strong>If you’re looking for a good product, try Vilvah’s Hair Growth Oil.</strong> Infused with 
              pure castor oil, it promises visible results in just 90 days. Visit our website or check 
              out your nearest Vilvah outlet!
            </p>
          </div>`,
    tags: ['Hair Care'],
  },
  {
    id: 3,
    title: "What's The Difference Between Water-based And Oil-based Face Serum?",
    image: "https://www.vilvahstore.com/cdn/shop/articles/Vilvah_Face_Serums.jpg?v=1706694354&width=800",
    summary: "Why settle for one when you can have twice the goodness (both the serum) in your skincare routine?",
    description: `
      <h2>Water-based vs. Oil-based Serums</h2>
      <p>Water-based serums hydrate and absorb quickly, while oil-based ones lock in moisture. 
      Use both to enjoy balanced, glowing skin.</p>
      <h3>How to Use Them Together?</h3>
      <p>Apply the water-based serum first, followed by the oil-based serum to seal the hydration.</p>
    `,
    tags: ['Milk Range'],
  },
  {
    id: 4,
    title: "The Best CTM Routine For Skin Hydration",
    image: "https://www.vilvahstore.com/cdn/shop/articles/Best_CTM_Routine_For_Skin_Hydration.jpg?v=1710918277&width=300",
    summary: "The battle against dryness and unhealthy skin requires a dedicated CTM routine",
    description: `
      <h2>Essential Steps for a Hydrating CTM Routine</h2>
      <p>Cleansing removes impurities, toning balances the skin, and moisturizing locks in hydration. 
      Stick to this routine for soft, healthy skin.</p>
      <h3>Pro Tip</h3>
      <p>Use a lightweight toner and moisturizer for daytime and richer formulas at night.</p>
    `,
    tags: ['Milk Range', 'Skin Care'],
  },
  {
    id: 5,
    title: "Best 10 Tips To Regrow Your Hair Naturally",
    image: "https://www.vilvahstore.com/cdn/shop/articles/Haircare_Products.jpg?v=1700805038&width=300",
    summary: "But what if the path to regrowing your hair naturally was a return to simplicity, a journey back...",
    description: `
      <h2>Top 10 Tips For Natural Hair Regrowth</h2>
      <p>Unlock the secret to natural hair regrowth with simple habits. Nourish your scalp with oils, avoid harsh chemicals, 
      and massage regularly to stimulate circulation.</p>
      <h3>Consistency Is Key</h3>
      <p>Follow these practices daily for best results. Healthy hair growth is a journey, not a sprint!</p>
    `,
    tags: ['Hair Care', 'Wellness'],
  },
  {
    id: 6,
    title: "Why Moisturiser & Sunscreen Are A Must-have This Winter Season?",
    image: "https://www.vilvahstore.com/cdn/shop/articles/Both_together_1.jpg?v=1703585763&width=800",
    summary: "Moisturiser makes sense, but why sunscreen?, now that's where you are missing the whole point.",
    description: `
      <h2>Winter Skincare Essentials: Moisturizer and Sunscreen</h2>
      <p>Moisturizer prevents dryness, while sunscreen protects your skin from UV rays even in winter. 
      Together, they keep your skin healthy and glowing.</p>
      <h3>Don’t Skip Sunscreen!</h3>
      <p>Use SPF even on cloudy days to prevent long-term damage and aging.</p>
    `,
    tags: ['Skin Care'],
  },
  {
    id: 7,
    title: "5 Easy Asanas (Yoga Poses) for Hair Growth & Strength",
    image: "https://www.vilvahstore.com/cdn/shop/articles/Yoga_cove.jpg?v=1724991468&width=300",
    summary: "5 best asanas that help in natural hair growth and vitality.",
    description: `
      <h2>Yoga Poses That Promote Hair Growth</h2>
      <p>Include yoga poses like downward dog and headstand in your routine to boost circulation 
      and strengthen hair follicles.</p>
      <h3>Breathe and Relax</h3>
      <p>Practice these asanas daily for best results and stress relief.</p>
    `,
    tags: ['Wellness'],
  },
  {
    id: 8,
    title: "Morning Shots For Glowing Skin",
    image: "https://www.vilvahstore.com/cdn/shop/articles/lemon_1.jpg?v=1723637307&width=300",
    summary: "A shot a day keeps your skin concerns away.",
    description: `
      <h2>Morning Shots for Radiant Skin</h2>
      <p>Start your day with shots of lemon water or green juice to flush out toxins and promote healthy skin. 
      Hydration from the inside out makes all the difference.</p>
      <h3>Pro Tip</h3>
      <p>Add a spoonful of honey for extra glow-boosting benefits.</p>
    `,
    tags: ['Skin Care'],
  }  
];

const BlogPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Hair Care', 'Skin Care', 'Milk Range', 'Wellness'];

  const filteredArticles =
    selectedTag === 'All'
      ? articles
      : articles.filter((article) => article.tags.includes(selectedTag));

  const handleOpenDialog = (article) => {
    setSelectedArticle(article);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedArticle(null);
  };

  return (
    <>
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
        </Toolbar>
      </AppBar> */}
<Header/>

<br/>
<br/>
<br/>
      <Box
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/1600x900/?skincare)',
          backgroundSize: 'cover',
          backgroundColor:'#e6d9d0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          // height: 30,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Glow Naturally: Skincare Tips & Trends
        </Typography>
      </Box>

      <Container>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              variant={selectedTag === tag ? 'filled' : 'outlined'}
              onClick={() => setSelectedTag(tag)}
              // color={selectedTag === tag ? 'primary' : 'default'}
              clickable
            />
          ))}
        </Stack>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {filteredArticles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={article.image}
                  alt={article.title}
                  sx={{
                    objectFit: "contain",  // Ensures the whole image is visible
                    width: "100%",          // Makes it responsive
                    height: "100%",         // Fixed height as per the requirement
                    // backgroundColor: "#f0f0f0" // Optional: Adds a background color
                  }}
                />
                <CardContent>
                  <Typography variant="h6">{article.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {article.summary}
                  </Typography>
                <Button
                  size="small"
                  sx={{ mt: 2 }}
                  variant="contained"
                  onClick={() => handleOpenDialog(article)}
                  >
                  Read More
                </Button>
                  </CardContent>
              </Card>
              
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, p: 2, backgroundColor: '#f9f9f9' }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Trending Skincare Tips
          </Typography>
          <List>
            {[
              'Use SPF daily, even indoors.',
              'Double cleanse for a deeper clean.',
              'Incorporate Vitamin C serum into your routine.',
              'Avoid over-exfoliating your skin.',
            ].map((tip, index) => (
              <ListItem key={index}>
                <ListItemText primary={`• ${tip}`} />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Newsletter Subscription Section */}
        {/* <Box sx={{ mt: 6, p: 2, textAlign: 'center', backgroundColor: '#e0f7fa' }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Join Our Newsletter
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <TextField label="Your Email" variant="outlined" />
            <Button variant="contained">Sign Me Up</Button>
          </Stack>
        </Box> */}
      </Container>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{selectedArticle?.title}</DialogTitle>
        <DialogContent dividers>
          <div dangerouslySetInnerHTML={{ __html: selectedArticle?.description }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
      <Footer/>
    </>
  );
};

export default BlogPage;



