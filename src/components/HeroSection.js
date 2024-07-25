// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen bg-gray-200 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-6">I am a passionate developer specializing in modern web technologies.</p>
      <a href="#projects" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">See My Work</a>
    </section>
  );
};

export default HeroSection;
