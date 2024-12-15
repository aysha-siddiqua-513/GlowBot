import React, { useState } from 'react';

// Array of predefined questions and answers
const qaData = [
    { question: "Hello", answer: "Hi there! How can I help you with makeup today?" },
    { question: "What is the best foundation for oily skin?", answer: "For oily skin, a matte, oil-free foundation works best. Try products labeled as 'matte' or 'long-wear'." },
    { question: "What foundation is good for dry skin?", answer: "For dry skin, go for a hydrating or dewy foundation to keep your skin moisturized throughout the day." },
    { question: "How do I choose the right lipstick shade?", answer: "Choose a lipstick shade based on your skin tone. Warm undertones go well with reds and oranges, while cool undertones match pinks and purples." },
    { question: "What is the difference between BB cream and foundation?", answer: "BB cream is lighter and offers more natural coverage, while foundation is used for fuller coverage and a more polished look." },
    { question: "How do I apply eyeliner?", answer: "For a classic look, use a pencil or liquid liner close to your lash line, starting from the inner corner of the eye and drawing outward." },
    { question: "How can I make my makeup last all day?", answer: "Use a primer before applying makeup, set it with a setting powder, and finish with a setting spray." },
    { question: "What is a good skincare routine before applying makeup?", answer: "Cleanse your face, apply moisturizer, and use a primer to create a smooth base for makeup." },
    { question: "What is the best way to remove makeup?", answer: "Use a gentle makeup remover or micellar water, followed by a cleanser to ensure all makeup is removed." },
    { question: "How do I contour my face?", answer: "To contour, use a matte bronzer along the hollows of your cheeks, sides of your nose, and jawline, and a highlighter on the high points of your face like the cheekbones and nose bridge." },
    { question: "How do I highlight my cheekbones?", answer: "Apply a highlighter above your cheekbones in a C-shape to add a natural glow to your face." },
    { question: "What are the best makeup brands?", answer: "Some top makeup brands include Fenty Beauty, MAC Cosmetics, NARS, and Too Faced." },
    { question: "How do I choose the right concealer shade?", answer: "Pick a concealer shade that is 1-2 shades lighter than your skin tone for brightening, or match it to your skin tone for covering blemishes." },
    { question: "How can I make my lips look fuller?", answer: "Overline your lips slightly with a lip liner, then apply lipstick. A gloss in the center of your lips can also create the illusion of fuller lips." },
    { question: "What is the best way to fill in eyebrows?", answer: "Use a pencil or powder to fill in your eyebrows in short, feathery strokes, following the natural shape of your brows." },
    { question: "What is the best mascara for volume?", answer: "For volume, try mascaras with a thick, full brush like Maybelline’s Lash Sensational or Too Faced Better Than Sex." },
    { question: "How do I apply false lashes?", answer: "Apply lash glue along the lash band, wait a few seconds for it to get tacky, then carefully place the lashes as close to your natural lashes as possible." },
    { question: "What is a makeup primer?", answer: "A primer creates a smooth surface for makeup application and helps your makeup last longer." },
    { question: "How do I choose the right blush?", answer: "Pick a blush shade that complements your skin tone: peach for warm tones, pink for cool tones, and rose or berry for neutral tones." },
    { question: "How do I prevent makeup from settling into fine lines?", answer: "Use a hydrating primer and lightweight foundation, and avoid applying too much product to avoid settling into fine lines." },
    { question: "What is dewy makeup?", answer: "Dewy makeup has a fresh, glowing finish, achieved with hydrating products and a bit of highlighter." },
    { question: "How do I stop my eyeliner from smudging?", answer: "Use a long-wear eyeliner, and set it with a matching eyeshadow to prevent smudging." },
    { question: "How do I keep my makeup from melting?", answer: "Use mattifying primer, long-wear foundation, and setting spray to help your makeup stay in place throughout the day." },
    { question: "What is the best makeup remover?", answer: "Micellar water, oil-based cleansers, and makeup wipes are all great options for removing makeup effectively." },
    { question: "What is a setting spray?", answer: "A setting spray locks your makeup in place and helps it last longer without fading or transferring." },
    { question: "How do I fix a broken lipstick?", answer: "Melt the broken pieces with a lighter and press them back together, or melt and pour the lipstick into a new container." },
    { question: "What is the best makeup for beginners?", answer: "Start with a basic foundation, mascara, neutral eyeshadow, and lip gloss or lipstick for a simple, everyday look." },
    { question: "What is the best way to organize makeup?", answer: "Use makeup organizers or acrylic drawers to keep your makeup tidy and easy to access." }  
];

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([{ sender: "bot", text: "Hi there! How can I help you with makeup today?" }]);
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);  // Toggle visibility

  const handleUserInput = (e) => setUserInput(e.target.value);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userQuestion = userInput.toLowerCase();
    const answerObj = qaData.find(qa => qa.question.toLowerCase() === userQuestion);
    const botResponse = answerObj ? answerObj.answer : "I'm sorry, I don't have an answer for that question.";

    setChatHistory([...chatHistory, { sender: "user", text: userInput }, { sender: "bot", text: botResponse }]);
    setUserInput("");
  };

  const toggleChatbotVisibility = () => setIsChatbotVisible(!isChatbotVisible);

  return (
    <div>
      {/* Floating Chatbot Icon */}
      <div onClick={toggleChatbotVisibility} style={styles.chatbotIcon}>
        💬
      </div>

      {/* Chatbot Container */}
      {isChatbotVisible && (
        <div style={styles.chatbotContainer}>
          <div style={styles.chatHistory}>
            {chatHistory.map((chat, index) => (
              <div key={index} style={chat.sender === "user" ? styles.userMessage : styles.botMessage}>
                {chat.text}
              </div>
            ))}
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              placeholder="Ask a makeup question..."
              style={styles.input}
            />
            <button onClick={handleSend} style={styles.sendButton}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styling for chatbot and icon
const styles = {
  chatbotIcon: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#d49f5a',
    color: 'white',
    fontSize: '24px',
    padding: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    zIndex: 9999,
  },
  chatbotContainer: {
    position: 'fixed',
    bottom: '70px',
    right: '20px',
    width: '350px',
    maxHeight: '450px',
    background: '#fff9f0',
    borderRadius: '10px',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e5e5e5',
    zIndex: 9999,
  },
  chatHistory: {
    maxHeight: '350px',
    overflowY: 'auto',
    padding: '15px',
    backgroundColor: '#f7f3e3',
    borderBottom: '1px solid #e5e5e5',
    color: '#5f5f5f',
  },
  userMessage: {
    textAlign: 'right',
    margin: '10px 0',
    padding: '10px',
    backgroundColor: '#c9a98b',
    borderRadius: '20px',
    color: 'white',
    maxWidth: '80%',
    marginLeft: 'auto',
    fontSize: '14px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    wordWrap: 'break-word',
  },
  botMessage: {
    textAlign: 'left',
    margin: '10px 0',
    padding: '10px',
    backgroundColor: '#f2e8d5',
    borderRadius: '20px',
    color: '#5f5f5f',
    maxWidth: '80%',
    fontSize: '14px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    wordWrap: 'break-word',
  },
  inputContainer: {
    display: 'flex',
    borderTop: '1px solid #e5e5e5',
    padding: '10px',
    backgroundColor: '#f9f4e5',
  },
  input: {
    width: '80%',
    padding: '10px',
    border: 'none',
    borderRadius: '20px',
    backgroundColor: '#f3e6d1',
    color: '#5f5f5f',
    fontSize: '14px',
    marginRight: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  sendButton: {
    width: '20%',
    backgroundColor: '#d49f5a',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
};

export default Chatbot;
