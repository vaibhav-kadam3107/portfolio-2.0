import React from 'react';

const projects = [
  { id: 1, name: 'Nivesh', description: 'Financial Literacy Web Application', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Maadhyam', description: 'Automated Video Transformation for PIB Press Releases', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'MOS', description: 'A Multiprogramming Operating System', image: 'https://via.placeholder.com/300' },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-12 bg-[rgb(13,15,20)] text-white relative isolate">
      <div className="container mx-auto px-4 max-w-[1080px]">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover transition-opacity duration-300 ease-in-out hover:opacity-75"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Check out some more projects Section */}
      <div className="hidden md:flex max-w-[1080px] mx-auto mt-10 items-center gap-y-6 justify-between flex-wrap border border-grayText border-opacity-50 rounded-md relative py-10 p-8">
        <p className="mx-auto font-mullish text-white text-xl">
          <span className="font-bold">Check out some more projects and related work!</span>
        </p>

        <a href="https://drive.google.com/drive/folders/1_VT4dxKu1BC9-enJ6ZE2I9hJg95huyCt" target="_blank" rel="noopener noreferrer">
          <button className="relative mx-auto bg-blue-700 w-full md:w-fit flex items-center justify-center md:justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-blue-500 transition-all duration-200">
            Check out
            <div className="z-10 w-12 h-[60px] bg-green-400 skew-x-[20deg] absolute right-6 grid place-items-center">
              <svg viewBox="0 0 24 24" focusable="false" className="w-[20px] h-[20px] -skew-x-[20deg]">
                <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
            </div>
          </button>
        </a>
      </div>
    </section>
  );
};

export default ProjectSection;
