// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Project'; // Ensure the file is named Project.js
import Recommendations from './components/Recommendation'; // Ensure the file is named Recommendation.js
import LeaveInfo from './components/LeaveInfo';
import Skills from './pages/skills'; // Ensure the file is named Skills.js
import Footer from './components/Footer';
import TechStack from './components/TechStack';
import Publications from './components/Publications'; //
import Certifications from './components/Certifications';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <main className="container">
        <Recommendations />
        {/* <TechStack /> */}
        {/* <Projects /> */}
        {/* <LeaveInfo /> */}
      </main>
      <Publications />
      <Certifications/>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
