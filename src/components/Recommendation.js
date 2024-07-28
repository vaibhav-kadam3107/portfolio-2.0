import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LeaveInfo from './LeaveInfo';
import { getRecommendations, addRecommendation } from '../api/api';

const Recommendation = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReversing, setIsReversing] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const data = await getRecommendations();
      setRecommendations(data);
    };
    fetchRecommendations();
  }, []);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (isReversing) {
          if (prevIndex === 0) {
            setIsReversing(false);
            return 1;
          } else {
            return prevIndex - 1;
          }
        } else {
          if (prevIndex === recommendations.length - 1) {
            setIsReversing(true);
            return prevIndex - 1;
          } else {
            return prevIndex + 1;
          }
        }
      });
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isReversing, recommendations]);

  const handleAddRecommendation = async (recommendation) => {
    const newRecommendation = await addRecommendation(recommendation);
    setRecommendations([...recommendations, newRecommendation]);
    setShowForm(false);
  };

  return (
    <div className="p-4 bg-[rgb(13,15,20)] text-white pt-10 h-screen">
      <div className="p-6 rounded-lg shadow-lg text-white border border-gray-700 max-w-[1080px] mx-auto px-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Recommendations</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg isolate"
            onClick={() => setShowForm(true)}
          >
            Recommend Vaibhav
          </button>
        </div>
        <div className="">
          <h2 className="font-mullish text-xl text-white text-opacity-70">Received</h2>
          <div className="w-6 h-1 bg-green-400 mt-1"></div>
        </div>

        {showForm && <LeaveInfo onAddRecommendation={handleAddRecommendation} onClose={() => setShowForm(false)} />}

        <div className="mt-4">
          <Carousel
            showThumbs={false}
            dynamicHeight={true}
            showStatus={false}
            infiniteLoop={false}
            autoPlay={false}
            selectedItem={currentIndex}
            showArrows={false}
            className="rounded-lg shadow-lg border border-gray-700"
          >
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-gradient-to-r p-10 px-10 from-gray-800 to-gray-900 rounded-lg shadow-lg mb-4 text-left h-[300px] overflow-y-auto">
                <p className="font-bold text-lg">{rec.name}</p>
                <p className="text-sm text-gray-400">{rec.position}</p>
                <p className="mt-2">{rec.text}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
