import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-20">
      <div className="container mx-auto px-6 sm:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Discover Amazing Workshops
        </h1>
        <p className="text-lg md:text-xl text-indigo-200 mb-4">
          Learn new skills, connect with experts, and grow your knowledge.
        </p>
        <p className="text-sm mt-2 opacity-80 text-indigo-100">
          Trusted by 1000+ students across India
        </p>
        <a
          href="#workshops"
          onClick={() => document.getElementById('workshops').scrollIntoView()}
          className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mt-6 inline-block"
        >
          Explore Workshops
        </a>
      </div>
    </section>
  );
};

export default Hero;