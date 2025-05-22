// Card.jsx
import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src= "" alt="title" />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">title</h2>
        <p className="text-gray-600 mt-2 text-sm">description</p>
        <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          buttonText
        </button>
      </div>
    </div>
  );
};

export default Card;
