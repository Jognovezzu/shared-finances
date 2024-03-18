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
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='main-container'>
      
      
    
    
    <BrowserRouter>
    
    
    <Sidebar/>
      <div className='container'>
        <Navbar/>
            <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/group" element={<Group/>} />
            <Route path='/income' element={<Income/>} />
            <Route path='/Profile' element={<Profile/>} />
            <Route path='/Report' element= {<Report/>} />
            </Routes>
      </div>
    </BrowserRouter>
    
      
    </div>
  );
  
}

export default App;
