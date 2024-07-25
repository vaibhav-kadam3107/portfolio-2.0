// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Your Logo</div>
        <div className="space-x-4">
          <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
