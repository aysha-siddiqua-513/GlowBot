// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Skincare from './pages/SkinCare';
import Tracker from './pages/Tracker';
import Quiz from './pages/Quiz';
import SkinCarePage from './pages/SkinCarePage';
import BlogPage from './pages/BlogPage';
import Cart from './pages/Cart';
import SignInSide from './pages/SignInSide';
import SignUpSide from './pages/SignUpSide';
import Profile from './pages/Profile';
import Tutorials from './pages/Tutorials';
import Chatbot from './pages/Chatbot';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skin" element={<Skincare />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path='/shop' element={<SkinCarePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/in' element={<SignInSide />} />
        <Route path='/out' element={<SignUpSide />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/vdo' element={<Tutorials />} />
        <Route path='/chatbot' element={<Chatbot />} />
      </Routes>
    </Router>
  );
};

export default App;
