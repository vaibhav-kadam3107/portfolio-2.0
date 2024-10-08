import React from 'react';

const publications = [
  {
    title: "CryptoComm: A Decentralized Chat System Using Blockchain",
    publication: "2023 3rd International Conference on Mobile Networks and Wireless Communications (ICMNWC) · Feb 22, 2024",
    description: "The paper introduces a decentralized chat system that uses blockchain technology to address traditional chat systems' security flaws and privacy issues. It ensures secure, private communication without central servers by using smart contracts, MetaMask, and Solidity. ",
    link: "https://ieeexplore.ieee.org/document/10435966"
  },
  {
    title: "Automated Video Transformation for PIB Press Release: A Literature Survey",
    publication: "2024 IEEE International Conference on Smart Power Control and Renewable Energy (ICSPCRE-2024) · July 21 2024",
    description: "The paper discusses the changing trends in press release distribution, emphasizing a move from text to video formats to appeal to modern audiences' shorter attention spans. It suggests software that converts press releases into videos using copyright-free media and employs Natural Language Processing and Long Short-Term Memory algorithms for language translation.",
    link: "https://drive.google.com/file/d/1HN7ctTVD8Qg5_fPd2MsXEzOWeIaTsYkq/view?usp=sharing"
  },
  // Add more publications here
];

const Publications = () => {
  return (
    <section className="py-10 bg-[rgb(13,15,20)] text-white font-mullish " id="publications">
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
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="justify-center mx-auto text-center mb-20">
            <h2 className="text-4xl font-semibold ">Publications</h2>
            <div className="w-6 h-1 bg-green-400 md:mx-auto mt-4 mb-6 md:mb-20"></div>
        </div>
        <div className="flex flex-col items-center gap-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full max-w-4xl">
              <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
              <p className="text-blue-400 mb-2">{pub.publication}</p>
              <p className="text-gray-400 mb-4">{pub.description}</p>
              <a href={pub.link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Read Full Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
