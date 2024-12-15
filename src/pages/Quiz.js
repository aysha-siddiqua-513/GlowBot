// export default Quiz;
import React, { useState, useEffect } from "react";
import VideoSuggestions from "./VideoSuggestions";
import styled from "styled-components";
import {
  Box,
  Button,
  Typography,
  Radio,
  FormControlLabel,
  LinearProgress,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Footer from "./Footer";
import Header from "./Header";
import { Grid } from "@mui/material"; // Import Grid for layout

// Styled Components
const QuizContainer = styled(Box)`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background-color: #f4f6f9; /* Light grey for background */
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const QuestionContainer = styled(Card)`
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const ProgressBar = styled(LinearProgress)`
  margin: 20px 0;
  height: 10px;
  border-radius: 5px;
`;

const NavigationButton = styled(Button)`
  margin-right: 10px;
  background-color: #3b3327;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3b3327;
  }
`;
const ResultContainer = styled(Paper)`
  padding: 30px;
  background-color: #dfd0c7;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
`;
const SectionTitle = styled(Typography)`
  margin-bottom: 16px;
  color: #4a4031;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
`;
const Recommendation = styled(Typography)`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #333;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
`;
const RestartButton = styled(Button)`
  background-color: white;
  color: black;
  margin-top: 30px;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 16px;
  text-transform: none;
  display: flex;
  align-items: center;
  &:hover {
    background-color: white;
  }
  & .MuiSvgIcon-root {
    margin-right: 8px;
  }
`;
const Product = styled(Box)`
  margin-bottom: 10px;
  padding: 15px;
  background-color: #e8f5e9;
  border-radius: 10px;
  font-size: 1rem;
  color: #333;
`;
const QuizQuestions = [
  {
    question: "What is your skin type?",
    choices: ["Oily", "Dry", "Combination", "Sensitive"],
  },
  {
    question: "What is your primary skin concern?",
    choices: [
      "Acne",
      "Wrinkles",
      "Hyperpigmentation",
      "Dehydration",
      "Redness/Inflammation",
    ],
  },
  {
    question: "How often do you experience breakouts?",
    choices: ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
  },
  {
    question: "Do you have any allergies to skincare products?",
    choices: ["Yes", "No"],
  },
  {
    question: "What is your age range?",
    choices: ["Under 18", "18-25", "26-35", "36-45", "46 and above"],
  },
  {
    question: "What is your daily skincare routine? (Select all that apply)",
    choices: [
      "Cleansing",
      "Exfoliating",
      "Moisturizing",
      "Sunscreen",
      "Treatment products",
    ],
  },
  {
    question: "How would you describe your skin’s sensitivity?",
    choices: ["Very sensitive", "Somewhat sensitive", "Not sensitive"],
  },
  {
    question: "What type of products do you prefer?",
    choices: [
      "Natural/Organic",
      "Dermatologist-recommended",
      "Luxury brands",
      "Drugstore brands",
    ],
  },
];

const Quiz = () => {
  const [selectedSkinType, setSelectedSkinType] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(QuizQuestions.length).fill(""));
  const [checkboxAnswers, setCheckboxAnswers] = useState(
    Array(QuizQuestions.length).fill([])
  );
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(60); // Timer set to 60 seconds
  const totalQuestions = QuizQuestions.length;

  const handleChoiceSelection = (choice) => {
    setSelectedSkinType(choice); // Set the selected skin type
  };
  useEffect(() => {
    if (timer > 0 && !showResults) {
      const countdown = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      setShowResults(true);
    }
  }, [timer, showResults]);
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };
  const handleAnswerChange = (event) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = event.target.value;
    setAnswers(newAnswers);
  };
  const productSuggestions = {
    Oily: {
      Acne: [
        {
          brand: "Neutrogena",
          product: "Oil-Free Acne Wash",
          options: ["Cleansing Gel", "Face Wash"],
        },
        {
          brand: "La Roche-Posay",
          product: "Effaclar Duo",
          options: ["Spot Treatment", "Moisturizer"],
        },
        {
          brand: "The Ordinary",
          product: "Niacinamide 10% + Zinc 1%",
          options: ["Serum", "Treatment"],
        },
        {
          brand: "Bioré",
          product: "Charcoal Cleanser",
          options: ["Face Wash", "Cleansing Gel"],
        },
      ],
      Large_Pores: [
        {
          brand: "Paula's Choice",
          product: "Skin Perfecting 2% BHA Liquid Exfoliant",
          options: ["Exfoliant", "Toner"],
        },
        {
          brand: "Benefit",
          product: "The POREfessional Face Primer",
          options: ["Primer", "Makeup Base"],
        },
      ],
      Blackheads: [
        {
          brand: "Garnier",
          product: "SkinActive Blackhead Eliminating Scrub",
          options: ["Face Scrub", "Exfoliating Cleanser"],
        },
        {
          brand: "COSRX",
          product: "BHA Blackhead Power Liquid",
          options: ["Treatment", "Exfoliant"],
        },
      ],
    },
    Dry: {
      Dehydration: [
        {
          brand: "CeraVe",
          product: "Moisturizing Cream",
          options: ["Face Cream", "Night Cream"],
        },
        {
          brand: "Clinique",
          product: "Moisture Surge",
          options: ["Hydrating Gel", "Moisturizer"],
        },
        {
          brand: "La Roche-Posay",
          product: "Hydraphase Intense",
          options: ["Moisturizer", "Hydrating Gel"],
        },
        {
          brand: "Eucerin",
          product: "Advanced Repair Lotion",
          options: ["Body Lotion", "Moisturizer"],
        },
      ],
      Flaky_Skin: [
        {
          brand: "Aquaphor",
          product: "Healing Ointment",
          options: ["Ointment", "Moisturizer"],
        },
        {
          brand: "Drunk Elephant",
          product: "Lala Retro Whipped Cream",
          options: ["Moisturizer", "Cream"],
        },
      ],
      Sensitivity: [
        {
          brand: "Aveeno",
          product: "Ultra-Calming Foaming Cleanser",
          options: ["Face Wash", "Cleansing Foam"],
        },
        {
          brand: "First Aid Beauty",
          product: "Ultra Repair Cream",
          options: ["Moisturizer", "Hydrating Cream"],
        },
      ],
    },
    Combination: {
      Oiliness: [
        {
          brand: "Clinique",
          product: "Dramatically Different Moisturizing Gel",
          options: ["Moisturizer", "Hydrating Gel"],
        },
        {
          brand: "Biore",
          product: "Blemish Control Cleanser",
          options: ["Face Wash", "Scrub"],
        },
        {
          brand: "Murad",
          product: "Oil-Control Mattifier",
          options: ["Moisturizer", "SPF"],
        },
        {
          brand: "Mario Badescu",
          product: "Drying Lotion",
          options: ["Spot Treatment", "Acne Solution"],
        },
      ],
      Dryness: [
        {
          brand: "Neutrogena",
          product: "Hydro Boost Water Gel",
          options: ["Gel Moisturizer", "Hydrating Gel"],
        },
        {
          brand: "Kiehl's",
          product: "Ultra Facial Cream",
          options: ["Moisturizer", "Cream"],
        },
      ],
      Wrinkles: [
        {
          brand: "Olay",
          product: "Regenerist Micro-Sculpting Cream",
          options: ["Moisturizer", "Anti-Aging"],
        },
        {
          brand: "RoC",
          product: "Retinol Correxion Deep Wrinkle Night Cream",
          options: ["Night Cream", "Treatment"],
        },
      ],
      Hyperpigmentation: [
        {
          brand: "SkinCeuticals",
          product: "C E Ferulic Serum",
          options: ["Serum", "Treatment"],
        },
        {
          brand: "Murad",
          product: "Rapid Dark Spot Correcting Serum",
          options: ["Serum", "Treatment"],
        },
      ],
    },
    Sensitive: {
      Redness: [
        {
          brand: "Aveeno",
          product: "Ultra-Calming Foaming Cleanser",
          options: ["Face Wash", "Cleansing Foam"],
        },
        {
          brand: "First Aid Beauty",
          product: "Ultra Repair Cream",
          options: ["Moisturizer", "Hydrating Cream"],
        },
        {
          brand: "Burt's Bees",
          product: "Sensitive Facial Cleanser",
          options: ["Gentle Cleanser", "Foam"],
        },
        {
          brand: "Eucerin",
          product: "Redness Relief Night Cream",
          options: ["Night Cream", "Moisturizer"],
        },
      ],
      Irritation: [
        {
          brand: "La Roche-Posay",
          product: "Toleriane Double Repair Face Moisturizer",
          options: ["Moisturizer", "Cream"],
        },
        {
          brand: "Cetaphil",
          product: "Gentle Skin Cleanser",
          options: ["Face Wash", "Cleanser"],
        },
      ],
    },
    // Additional skin types and their products can be added here...
  };
  const getResults = () => {
    const recommendations = [];
    const products = [];
    if (answers[0] === "Oily") {
      recommendations.push(
        "For oily skin, consider using oil-free moisturizers and lightweight gels."
      );
      recommendations.push(
        "Incorporate salicylic acid treatments to manage acne."
      );
      if (answers[1] === "Acne") {
        recommendations.push(
          "Try products with tea tree oil or benzoyl peroxide."
        );
      }
      recommendations.push("Use clay masks once a week to absorb excess oil.");
      recommendations.push(
        "Avoid heavy foundations; opt for mineral-based products."
      );
      products.push(...productSuggestions.Oily.Acne);
    } else if (answers[1] === "Large Pores") {
      recommendations.push("Use products that help minimize pore appearance.");
      products.push(...productSuggestions.Oily.Large_Pores);
    } else if (answers[1] === "Blackheads") {
      recommendations.push(
        "Look for salicylic acid or clay masks to help clear blackheads."
      );
      products.push(...productSuggestions.Oily.Blackheads);
    } else if (answers[0] === "Dry") {
      recommendations.push(
        "For dry skin, look for hydrating serums and rich moisturizers."
      );
      recommendations.push(
        "Use cream-based cleansers to prevent further dryness."
      );
      if (answers[1] === "Dehydration") {
        recommendations.push("Consider hyaluronic acid for deep hydration.");
      }
      recommendations.push(
        "Avoid alcohol-based products that can strip moisture."
      );
      recommendations.push(
        "Use a humidifier in your home to maintain moisture levels."
      );
      products.push(...productSuggestions.Dry.Dehydration);
    } else if (answers[1] === "Flaky Skin") {
      recommendations.push("Use gentle exfoliants to remove flakes.");
      products.push(...productSuggestions.Dry.Flakiness);
    } else if (answers[1] === "Sensitivity") {
      recommendations.push("Choose calming products with minimal ingredients.");
      products.push(...productSuggestions.Dry.Sensitivity);
    } else if (answers[0] === "Combination") {
      recommendations.push(
        "Use lightweight products and consider a gentle exfoliant."
      );
      recommendations.push(
        "Balance your routine with both moisturizing and mattifying products."
      );
      if (answers[1] === "Oiliness") {
        recommendations.push(
          "Use gel-based moisturizers and targeted treatments."
        );
        products.push(...productSuggestions.Combination.Oiliness);
      } else if (answers[1] === "Dryness") {
        recommendations.push("Incorporate richer moisturizers for dry areas.");
        products.push(...productSuggestions.Combination.Dryness);
      }
    } else if (answers[0] === "Sensitive") {
      recommendations.push(
        "Opt for fragrance-free and hypoallergenic products."
      );
      recommendations.push("Avoid products with alcohol or harsh exfoliants.");
      if (answers[1] === "Redness") {
        recommendations.push(
          "Look for products containing niacinamide to calm redness."
        );
        products.push(...productSuggestions.Sensitive.Redness);
      } else if (answers[1] === "Irritation") {
        recommendations.push(
          "Choose products with soothing properties to minimize irritation."
        );
        products.push(...productSuggestions.Sensitive.Irritation);
      }
      recommendations.push(
        "Consider using a soothing gel or aloe vera after cleansing."
      );
      recommendations.push(
        "Always patch test new products on a small area of skin."
      );
    }

    // Primary Skin Concern Recommendations
    if (answers[1] === "Wrinkles") {
      recommendations.push(
        "Consider using anti-aging serums with peptides or antioxidants."
      );
      recommendations.push(
        "Regular use of sunscreen is crucial to prevent further aging."
      );
      recommendations.push(
        "Hydrate with products that contain hyaluronic acid for plumper skin."
      );
      recommendations.push(
        "Consider adding a collagen supplement to your diet."
      );
      products.push(...productSuggestions.Sensitive.Irritation); // Example suggestion for sensitive skin
    } else if (answers[1] === "Hyperpigmentation") {
      recommendations.push(
        "Incorporate Vitamin C serums to brighten the skin."
      );
      recommendations.push(
        "Look for products with licorice root extract for fading dark spots."
      );
      recommendations.push(
        "Avoid sun exposure and always wear sunscreen to prevent further darkening."
      );
      products.push(...productSuggestions.Combination.Oiliness); // Example suggestion for combination skin
    } else if (answers[1] === "Dehydration") {
      recommendations.push(
        "Drink plenty of water and use a humidifier in dry environments."
      );
      recommendations.push(
        "Avoid hot showers that can strip moisture from the skin."
      );
      recommendations.push(
        "Use overnight masks for added hydration while you sleep."
      );
      products.push(...productSuggestions.Dry.Dehydration); // Example suggestion for dry skin
    } else if (answers[1] === "Acne") {
      recommendations.push(
        "Consider seeing a dermatologist for prescription treatments."
      );
      recommendations.push(
        "Avoid touching your face to reduce the spread of bacteria."
      );
      recommendations.push(
        "Keep hair clean and off your face to minimize breakouts."
      );
      products.push(...productSuggestions.Oily.Acne); // Example suggestion for oily skin
    } else if (answers[1] === "Redness/Inflammation") {
      recommendations.push("Use green-tinted primers to neutralize redness.");
      recommendations.push(
        "Look for products with chamomile or calendula for calming effects."
      );
      products.push(...productSuggestions.Sensitive.Redness); // Example suggestion for sensitive skin
    }

    // Age Recommendations
    if (answers[2] === "Under 18") {
      recommendations.push(
        "Focus on gentle cleansers and lightweight moisturizers."
      );
      recommendations.push(
        "Be cautious with strong treatments and consult a dermatologist."
      );
      recommendations.push(
        "Stay hydrated and maintain a balanced diet for healthy skin."
      );
      products.push(...productSuggestions.Sensitive.Irritation); // Example suggestion for sensitive skin
    } else if (answers[2] === "18-25") {
      recommendations.push(
        "Experiment with various products to find what suits your skin."
      );
      recommendations.push(
        "Consider adding a sunscreen to your daily routine."
      );
      recommendations.push(
        "Start a routine that focuses on prevention rather than correction."
      );
      products.push(...productSuggestions.Combination.Oiliness); // Example suggestion for combination skin
    } else if (answers[2] === "26-35") {
      recommendations.push(
        "Start incorporating anti-aging products into your routine."
      );
      recommendations.push(
        "Maintain a balanced diet rich in vitamins and antioxidants."
      );
      recommendations.push(
        "Regular facial treatments can help maintain skin health."
      );
      products.push(...productSuggestions.Dry.Dehydration); // Example suggestion for dry skin
    } else if (answers[2] === "36-45") {
      recommendations.push(
        "Focus on hydration and strengthening your skin barrier."
      );
      recommendations.push(
        "Look for products that promote collagen production."
      );
      recommendations.push(
        "Regularly visit a skincare professional for personalized treatments."
      );
      products.push(...productSuggestions.Combination.Dryness); // Example suggestion for combination skin
    } else if (answers[2] === "46 and above") {
      recommendations.push(
        "Consider more intensive treatments like chemical peels or laser therapy."
      );
      recommendations.push(
        "Consult a skincare professional for personalized advice."
      );
      recommendations.push(
        "Incorporate more hydrating products to combat dryness as skin ages."
      );
      products.push(...productSuggestions.Dry.Flakiness); // Example suggestion for dry skin
    }

    // Daily Routine Recommendations
    if (checkboxAnswers[4].includes("Cleansing")) {
      recommendations.push(
        "Ensure you are using a gentle cleanser suitable for your skin type."
      );
      products.push(...productSuggestions.Sensitive.Irritation); // Example suggestion for sensitive skin
    }
    if (checkboxAnswers[4].includes("Exfoliating")) {
      recommendations.push("Exfoliate 1-2 times a week with a mild exfoliant.");
      products.push(...productSuggestions.Combination.Oiliness); // Example suggestion for combination skin
    }
    if (checkboxAnswers[4].includes("Moisturizing")) {
      recommendations.push("Choose a moisturizer that matches your skin type.");
      products.push(...productSuggestions.Dry.Dehydration); // Example suggestion for dry skin
    }
    if (checkboxAnswers[4].includes("Sunscreen")) {
      recommendations.push(
        "Daily sunscreen application is essential for all skin types."
      );
      products.push(...productSuggestions.Oily.Acne); // Example suggestion for oily skin
    }
    if (checkboxAnswers[4].includes("Treatment products")) {
      recommendations.push(
        "Be cautious with strong actives; consult a professional if unsure."
      );
      products.push(...productSuggestions.Combination.Dryness); // Example suggestion for combination skin
    }

    // Allergies
    if (answers[3] === "Yes") {
      recommendations.push(
        "Always perform patch tests before trying new products."
      );
      recommendations.push(
        "Consult a dermatologist for recommendations tailored to your allergies."
      );
      products.push(...productSuggestions.Sensitive.Redness); // Example suggestion for sensitive skin
    }
    // Final Check
    if (recommendations.length === 0) {
      recommendations.push(
        "No specific recommendations, but keep up your good skincare routine!"
      );
    }

    // Lifestyle Factors
    recommendations.push(
      "Maintain a consistent skincare routine to see long-term benefits."
    );
    recommendations.push(
      "Ensure you're getting enough sleep for skin regeneration."
    );
    recommendations.push(
      "Eat a balanced diet rich in fruits, vegetables, and healthy fats for glowing skin."
    );
    recommendations.push(
      "Limit stress through mindfulness practices or regular exercise."
    );
    recommendations.push(
      "Stay hydrated by drinking at least 8 glasses of water a day."
    );
    return { recommendations, products };
  };
  return (
    <Box
      sx={{
        backgroundImage: "url(backquiz.jpg)", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        backgroundColor: "#fff9f0",
        borderRadius: "12px",
      }}
    >
      <Header />
      <br />
      <br />
      <QuizContainer>
        {!showResults ? (
          <div>
            <SectionTitle variant="h5">Skincare Quiz</SectionTitle>
            <ProgressBar
              variant="determinate"
              value={((currentQuestionIndex + 1) / totalQuestions) * 100}
            />
            <QuestionContainer>
              <CardContent>
                <Typography variant="h6">
                  {QuizQuestions[currentQuestionIndex].question}
                </Typography>
                {QuizQuestions[currentQuestionIndex].choices.map((choice) => (
                  <FormControlLabel
                    key={choice}
                    control={
                      <Radio
                        checked={answers[currentQuestionIndex] === choice}
                        onChange={handleAnswerChange}
                        value={choice}
                      />
                    }
                    label={choice}
                  />
                ))}
              </CardContent>
            </QuestionContainer>
            <NavigationButton onClick={handleNext}>
              {currentQuestionIndex < totalQuestions - 1 ? "Next" : "Submit"}
            </NavigationButton>
          </div>
        ) : (
          <ResultContainer>
            <SectionTitle variant="h5">Your Recommendations</SectionTitle>
            {getResults().recommendations.map((rec, index) => (
              <Recommendation key={index}>
                <CheckCircleIcon
                  style={{ color: "green", marginRight: "8px" }}
                />
                {rec}
              </Recommendation>
            ))}
            <br />
            <SectionTitle variant="h5">Recommended Products</SectionTitle>
            <br />
            <Grid container spacing={2}>
              {getResults().products.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Product>
                    <Typography
                      variant="body1"
                      style={{ fontWeight: "bold", color: "#2e7d32" }}
                    >
                      {product.brand}
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: "4px" }}>
                      {product.product}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ marginTop: "4px", color: "#555" }}
                    >
                      Options: {product.options.join(", ")}
                    </Typography>
                  </Product>
                </Grid>
              ))}
            </Grid>
            <br />
            <Box
              sx={{
                backgroundColor: "#fff9f0",
                py: 6,
                px: 4,
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
                {QuizQuestions[0].question}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                {QuizQuestions[0].choices.map((choice, index) => (
                  <Button
                  sx={{
                    backgroundColor: "lightblue", // Light cream for button background
                    color: "#4a4031", // Dark text color for button
                    fontWeight: "bold",
                    margin: 1,
                  }}
                    key={index}
                    variant="contained"
                    onClick={() => handleChoiceSelection(choice)}
                  >
                    {choice}
                  </Button>
                ))}
              </Box>

              {/* Show the video suggestions if a skin type is selected */}
              {selectedSkinType && (
                <VideoSuggestions skinType={selectedSkinType} />
              )}
            </Box>

            <RestartButton
              onClick={() => {
                setShowResults(false);
                setCurrentQuestionIndex(0);
                setAnswers(Array(QuizQuestions.length).fill(""));
                setTimer(60);
              }}
            >
              <RestartAltIcon /> Restart Quiz
            </RestartButton>
          </ResultContainer>
        )}
      </QuizContainer>
      <Footer />
    </Box>
  );
};

export default Quiz;
