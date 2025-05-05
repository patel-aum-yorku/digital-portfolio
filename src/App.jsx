// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage.jsx";
import ProjectsPage from "./Pages/ProjectsPage.jsx";
import NebulaBackground from "./components/NebulaBackground";
import WorkPage from './Pages/WorkPage.jsx';
import Navbar from "./components/Navbar.jsx"; 
import ContactPage from "./Pages/ContactPage.jsx";
//





function App() {
 
  return (
    <div>
       
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/work" element={<WorkPage />} />
       <Route path="/contact" element={<ContactPage />} />
         {/*<Route path="/chat" element={<ChatPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </div>
  );

}

export default App;
