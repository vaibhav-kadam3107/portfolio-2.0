// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side */}
          <div className="text-center md:text-left">
            <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>

          {/* Right side */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/yourprofile" className="hover:text-gray-400" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a href="https://github.com/yourusername" className="hover:text-gray-400" aria-label="GitHub">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-gray-400" aria-label="Email">
              <i className="fas fa-envelope"></i> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
