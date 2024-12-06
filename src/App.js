import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/App.scss';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import AccommodationDetails from './components/AccommodationDetails';

export default function App() {
  const [accommodations, setAccomodations] = React.useState(null);

  useEffect(() => {
    fetch('/api/accommodations')
      .then((res) => res.json())
      .then((data) => setAccomodations(data.accommodations));
  }, []);

  console.log(accommodations);

  return (
    <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home accommodations={accommodations} />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/accommodation/:id" element={<AccommodationDetails accommodations={accommodations} />} /> 
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  );
}
