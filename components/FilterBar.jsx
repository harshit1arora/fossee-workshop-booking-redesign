import React from 'react';

const FilterBar = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex space-x-4 mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
            activeFilter === filter
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;