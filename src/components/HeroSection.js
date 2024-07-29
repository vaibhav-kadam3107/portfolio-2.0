// src/components/HeroSection.js
'use client';

import React from 'react';
import aboutImage from '../assets/about2.jpg';
import LeetCodeProgress from './LeetCodeProgress';

export default function HeroSection() {
  return (
    <div className="relative isolate px-6 pt-10 lg:px-8 bg-[rgb(13,15,20)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-blue-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex flex-col lg:flex-row items-center justify-between lg:h-[800px] h-auto pt-10">
        {/* Left Column */}
        <div className="w-full lg:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg text-white lg:h-[580px] h-auto border border-gray-700 mb-6 lg:mb-0 lg:mr-5">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={aboutImage}
              alt="Vaibhav Kadam"
              className="w-36 h-36 rounded-full border-2 border-gray-600 shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
            <h3 className="font-mullish font-bold text-lg">Vaibhav Kadam</h3>
          </div>

          <div className="flex justify-around pt-4">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full">
              <i className="fab fa-github text-white text-2xl"></i>
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full">
              <i className="fab fa-linkedin text-white text-2xl"></i>
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full">
              <i className="fab fa-twitter text-white text-2xl"></i>
            </a>
            <a href="your-website-link" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full">
              <i className="fas fa-link text-white text-2xl"></i>
            </a>
          </div>

          <hr className="border-t border-gray-700 my-4" />

          <div className="space-y-5 pt-5 px-5 text-2xl">
            <div className="flex items-center space-x-4">
              <i className="fas fa-envelope text-gray-400"></i>
              <p className="text-sm">vaibhav.kadam21@vit.edu</p>
            </div>
            <div className="flex items-center space-x-6">
              <i className="fas fa-map-marker-alt text-gray-400"></i>
              <p className="text-sm">Pune, Maharashtra, India</p>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-school text-gray-400"></i>
              <p className="text-sm">B.Tech in Computer Science</p>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-graduation-cap text-gray-400"></i>
              <p className="text-sm">Current GPA: 8.75</p>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-school text-gray-400"></i>
              <p className="text-sm">Vishwakarma Institute of Technology, Pune</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* About Section */}
          <div className="col-span-1 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h2 className="font-mullish font-bold text-xl text-white">About</h2>
            <div className="w-6 h-1 bg-green-400 mt-1"></div>
            <p className="font-mullish text-sm text-white mt-4">
              Hello! I'm <span className="text-blue-500 font-bold">Vaibhav Kadam</span>, from the vibrant city of Pune, nestled in the heart of India. 
            </p>
            <p className="font-mullish text-sm text-white text-opacity-70 mt-4">
              Currently in my Final year of pursuing a Bachelor of Technology in Computer Science Engineering at VIT Pune. With a consistent GPA of 8.75, I am eager to contribute to the ever-evolving field of technology.
            </p>
          </div>

          {/* Add LeetCode Profile Section */}
          <div className="col-span-1 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h2 className="font-mullish font-bold text-xl text-white">LeetCode Profile</h2>
            <div className="w-6 h-1 bg-green-400 mt-1"></div>
            <LeetCodeProgress />
          </div>

          {/* Skills Section */}
          <div className="col-span-1 lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 h-auto">
            <h2 className="font-mullish font-bold text-xl text-white">Technical Skills</h2>
            <div className="w-6 h-1 bg-green-400 mt-1"></div>
            <div className="mt-4 text-white">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center border-b border-gray-600 pb-2">
                  <h3 className="font-semibold text-lg w-36">Languages:</h3>
                  <p>C, C++, Python, Java (OOP), JavaScript, SQL, NoSQL</p>
                </div>
                <div className="flex items-center border-b border-gray-600 pb-2">
                  <h3 className="font-semibold text-lg w-36">Developer Tools:</h3>
                  <p>VS Code, Android Studio, Docker, AWS, Kubernetes, IntelliJ IDEA, Figma</p>
                </div>
                <div className="flex items-center border-b border-gray-600 pb-2">
                  <h3 className="font-semibold text-lg w-36">Technologies:</h3>
                  <p>Linux, GitHub, Git, Bootstrap, Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-blue-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
