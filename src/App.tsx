import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Group from './pages/Group';
import Income from './pages/Income';
import Profile from './pages/Profile';
import Report from './pages/Report';
function App() {
  return (
    
    <BrowserRouter>
    
    <Sidebar/>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/group" element={<Group/>} />
        <Route path='/income' element={<Income/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Report' element= {<Report/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
