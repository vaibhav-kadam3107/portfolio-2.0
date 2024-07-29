// src/components/TechStack.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJs, faJava, faPython, faAws, faDocker } from '@fortawesome/free-brands-svg-icons';

const techStack = [
  { name: 'React', icon: faReact, color: '#61DBFB' },
  { name: 'Tailwind CSS', icon: faCss3Alt, color: '#38B2AC' },
  { name: 'C++', icon: faDocker, color: '#00599C' }, // Placeholder icon and color for C++
  { name: 'C', icon: faDocker, color: '#A8B9CC' }, // Placeholder icon and color for C
  { name: 'Java', icon: faJava, color: '#007396' },
  { name: 'Python', icon: faPython, color: '#306998' },
  { name: 'SQL', icon: faDocker, color: '#4479A1' }, // Placeholder icon and color for SQL
  { name: 'RDBMS', icon: faDocker, color: '#A8B9CC' }, // Placeholder icon and color for RDBMS
  { name: 'HTML', icon: faHtml5, color: '#E34F26' },
  { name: 'CSS', icon: faCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
  { name: 'PostgreSQL', icon: faDocker, color: '#336791' }, // Placeholder icon and color for PostgreSQL
  { name: 'Docker', icon: faDocker, color: '#2496ED' },
  { name: 'AWS', icon: faAws, color: '#FF9900' }
];

export default function TechStack() {
  return (
    <div className="bg-[rgb(13,15,20)] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-white mb-10">
          The tech stack I have worked with
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-scroll whitespace-nowrap">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <FontAwesomeIcon icon={tech.icon} size="3x" style={{ color: tech.color }} />
                <span className="text-white mt-2">{tech.name}</span>
              </div>
            ))}
            {/* Duplicate to create an infinite scrolling effect */}
            {techStack.map((tech, index) => (
              <div key={index + techStack.length} className="flex flex-col items-center">
                <FontAwesomeIcon icon={tech.icon} size="3x" style={{ color: tech.color }} />
                <span className="text-white mt-2">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
