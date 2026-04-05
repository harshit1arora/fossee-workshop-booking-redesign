import React from 'react';

const WorkshopCard = ({ title, date, description, level, onBookNow }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <span
          className={`bg-${
            level === 'Beginner' ? 'green-100 text-green-700' : 'blue-100 text-blue-700'
          } px-2 py-1 rounded text-xs font-medium`}
        >
          {level}
        </span>
        <button
          onClick={() => document.getElementById('booking-form').scrollIntoView()}
          className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default WorkshopCard;