// Importing necessary libraries and components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Background from "../src/components/Background.jsx";
//import ScrollSoundToggle from "../src/components/ScrollSoundToggle.jsx";
// import About from "../src/pages/About";
// import Work from "../src/pages/Work";
// import Projects from "../src/pages/Projects";
// import Services from "../src/pages/Services";
// import Contact from "../src/pages/Contact";
// import Assistant from "../src/pages/Assistant";

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-slate-900 text-white">
      {/*<ScrollSoundToggle />*/}
      <Background />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Uncomment the following routes when the components are available */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/work" element={<Work />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/assistant" element={<Assistant />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
