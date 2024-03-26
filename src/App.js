import './App.css';
import React from 'react';
import Homepage from './components/Homepage';
import ProductPage from './components/Productpage';
import LoginPage from './components/LoginPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;