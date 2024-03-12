import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
