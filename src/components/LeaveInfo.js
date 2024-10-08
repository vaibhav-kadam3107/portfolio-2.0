import React, { useState } from 'react';

const LeaveInfo = ({ onAddRecommendation, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecommendation({ name, email, position, text });
    setName('');
    setEmail('');
    setPosition('');
    setText('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white border border-gray-700 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h3 className="text-xl font-bold mb-4">Add a Recommendation</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400">Your Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Your Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Your Current Position and Company</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Recommendation Text</label>
            <textarea
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg h-40"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 px-4 py-2 bg-gray-600 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveInfo;
