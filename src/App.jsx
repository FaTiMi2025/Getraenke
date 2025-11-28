import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Getraenke from './pages/Getraenke';
import Essen from './pages/Essen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/getraenke" replace />} />
        <Route path="/getraenke" element={<Getraenke />} />
        <Route path="/essen" element={<Essen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
