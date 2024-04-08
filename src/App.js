import './App.css';
import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage';
import ProductPage from './components/Productpage';
import LoginPage from './components/LoginPage';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={isLoggedIn ? <ProductPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage onLogin={() => {
          setIsLoggedIn(true);
          console.log('Logged in');
          }} />} />      
      </Routes>
    </Router>
  );
}

export default App;