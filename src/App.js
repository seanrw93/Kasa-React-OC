import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import './scss/base/_resets.scss';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AccommodationDetails from './pages/AccommodationDetails';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/accommodation/:id" element={<AccommodationDetails />} /> 
            <Route path="*" element={<ErrorPage 
                                        errorCode={404} 
                                        errorMessage="Oops! It looks like this page doesn’t exist."
                                      />} 
            />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;