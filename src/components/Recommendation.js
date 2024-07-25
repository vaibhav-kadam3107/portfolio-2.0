// src/components/Recommendations.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Recommendations = () => {
  const items = [
    // Sample data
    { id: 1, text: "Great service!" },
    { id: 2, text: "Highly recommended!" },
    { id: 3, text: "Exceptional quality!" }
  ];

  return (
    <div className="recommendations">
      <h2>Recommendations</h2>
      <Carousel>
        {items.map(item => (
          <div key={item.id}>
            <p>{item.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Recommendations;
