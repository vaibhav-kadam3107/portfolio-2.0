import React from 'react';
import bgImage from '../assets/pattern.png';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      techStack: ['React', 'Node.js', 'CSS'],
      link: 'https://example.com/project1',
      github: 'https://github.com/example/project1',
      image: './images/project1.png',
      mobileIcon: './images/mobile-icon1.png',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      techStack: ['Python', 'Django', 'Bootstrap'],
      link: 'https://example.com/project2',
      github: 'https://github.com/example/project2',
      image: './images/project2.png',
      mobileIcon: './images/mobile-icon2.png',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      techStack: ['JavaScript', 'Express', 'MongoDB'],
      link: 'https://example.com/project3',
      github: 'https://github.com/example/project3',
      image: './images/project3.png',
      mobileIcon: './images/mobile-icon3.png',
    },
    {
      title: 'Project 4',
      description: 'Description of Project 4',
      techStack: ['Vue.js', 'Firebase', 'SASS'],
      link: 'https://example.com/project4',
      github: 'https://github.com/example/project4',
      image: './images/project4.png',
      mobileIcon: './images/mobile-icon4.png',
    },
  ];

  return (
    <section id="projects" className="relative isolate bg-[rgb(13,15,20)] text-white pt-28">
      {/* Background Image with Transparency */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{ bgImage: `url(${bgImage})`}}
        aria-hidden="true"
      />
      
      <div className="w-full md:w-10/12 max-w-[1080px] mx-auto px-4 relative">
        <h2 className="hidden md:block font-mullish text-center text-2xl leading-[1.2] font-extrabold">
          Collection Of Some Recent Projects
        </h2>
        <h2 className="inline-block md:hidden font-mullish text-[2rem] leading-[1.2] font-extrabold mx-auto">
          Collection Of Some Recent Projects
        </h2>
        <div className="w-6 h-1 bg-green-400 md:mx-auto mt-4 mb-6 md:mb-20"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row w-full min-h-[440px] border border-grayText border-opacity-50 rounded-md relative">
              <img
                alt=""
                src="./images/x-flame-1.png"
                loading="lazy"
                className="hidden md:block -top-[240px] -scale-x-[1] rotate-180 md:scale-x-[1] md:rotate-0 -right-[50px] md:right-auto md:-top-[142px] md:-left-[140px] w-[180px] md:w-[200px] absolute z-10"
              />
              <img
                alt=""
                src="./images/x-flame-2.png"
                loading="lazy"
                className="hidden md:block top-[150px] -right-[180px] w-[270px] absolute z-10"
              />

              <div className="flex-shrink-0 md:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4 md:p-10 py-12 bg-[#181c2e] z-20">
                <img
                  src={project.mobileIcon}
                  alt="Mobile Icon"
                  className="bg-lightBlue absolute right-2 top-12 w-12 h-12 rounded-full z-10 featureCardIcon transition-all duration-200 drop-shadow-xl md:hidden"
                />
                <div className="absolute border-t-[6rem] border-l-[6rem] border-t-transparent border-l-[#181c2e] z-20 top-6 right-0 md:hidden"></div>

                <div className="flex flex-col space-y-10 items-start w-full h-full z-20">
                  <h3 className="md:hidden font-mullish text-xl md:leading-10 md:text-[28px] font-bold md:max-w-[500px] max-w-[190px]">
                    {project.title}
                  </h3>
                  <span className="text-greenLight">Featured Project</span>
                  <h3 className="hidden md:block font-mullish text-xl md:leading-8 md:text-[25px] font-bold md:max-w-[500px] max-w-[190px]">
                    {project.title}
                  </h3>
                  <p className="font-mullish text-grayText mt-4 md:leading-6 md:text-[14px] md:max-w-[500px] max-w-[300px]">
                    {project.description}
                  </p>
                  <ul className="space-x-5 my-6 md:my-0 flex">
                    {project.techStack.map((tech, i) => (
                      <li key={i} className="font-consolas flex items-center space-x-2">
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-x-5">
                    <span className="font-mullish font-bold text-lightBlue500 transition-all duration-200">Know More</span>
                    <a href={project.link} aria-label={`Link to ${project.title}`}>
                      <i className="fa-sharp fa-solid fa-link" style={{ color: '#0b72e7' }}></i>
                    </a>
                    {project.github && (
                      <a href={project.github} aria-label={`GitHub repository for ${project.title}`}>
                        <i className="fa-brands fa-github fa-lg" style={{ color: '#0b72eb' }}></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Check out some more projects Section */}
        <div className="hidden md:flex max-w-[1080px] mx-auto mt-10 items-center gap-y-6 justify-between flex-wrap md:border border-grayText border-opacity-50 rounded-md relative py-10 p-8">
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

        {/* Mobile View Adjustment */}
        <div className="md:hidden mb-24 max-w-[1080px] mx-auto mt-10 px-4 py-6 bg-[#181c2e] rounded-md">
          <p className="font-mullish text-lg text-center mb-4">
            <span className="font-bold">Check out some more projects and related work!</span>
          </p>
          <a href="https://drive.google.com/drive/folders/1_VT4dxKu1BC9-enJ6ZE2I9hJg95huyCt" target="_blank" rel="noopener noreferrer">
            <button className="relative bg-lightBlue w-full flex items-center justify-center text-white py-[14px] px-[18px] rounded-md font-mullish font-bold hover:bg-blue-500 transition-all duration-200">
              Check out
              <div className="z-10 w-12 h-[60px] bg-green-400 skew-x-[20deg] absolute right-6 grid place-items-center">
                <svg viewBox="0 0 24 24" focusable="false" className="w-[20px] h-[20px] -skew-x-[20deg]">
                  <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg>
              </div>
            </button>
          </a>
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
    </section>
  );
};

export default Projects;
