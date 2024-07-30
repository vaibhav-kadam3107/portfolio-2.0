import React from 'react';

const certifications = [
  {
    title: "Google Cloud Associate Cloud Engineer track",
    organization: "Google Cloud",
    description: "Certification demonstrating skills and knowledge in Google Cloud services and solutions.",
    link: "https://drive.google.com/file/d/1MTmRrYdm4yXqR4hFjFbAs2z4RG35TWOm/view?usp=sharing",
    badge: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" // Replace with actual badge URL
  },
  {
    title: "Google Cloud Computing Foundations",
    organization: "Google Cloud",
    description: "Certification demonstrates an introduction to cloud technology.",
    link: "https://drive.google.com/file/d/11jzRIzfDvvE4uaV0xLJ3BPA3A9E6tYoX/view?usp=sharing",
    badge: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" // Replace with actual badge URL
  },
  {
    title: "Google Cyber Security Analyst",
    organization: "Google",
    description: "Certification in ethical hacking and cybersecurity skills.",
    link: "https://www.example.com/certification-link",
    badge: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" // Replace with actual badge URL
  },
  // Add more certifications here
];

const Certifications = () => {
  return (
    <section className="py-16 bg-[rgb(13,15,20)] text-white" id="certifications">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <h2 className="text-4xl font-semibold text-center mb-8">Certifications</h2>
        <div className="w-6 h-1 bg-green-400 md:mx-auto mb-6 md:mb-20"></div>
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm">
              <div className="flex items-center mb-4">
                <img src={cert.badge} alt={`${cert.title} Badge`} className="w-16 h-16 mr-4 rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <p className="text-blue-400">{cert.organization}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{cert.description}</p>
              <a href={cert.link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                View Certification
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
