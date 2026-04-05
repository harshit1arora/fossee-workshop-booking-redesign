import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WorkshopCard from '../components/WorkshopCard';
import FilterBar from '../components/FilterBar';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

const workshopsData = [
  { id: 1, title: 'Intro to Python', date: 'April 10, 2026', description: 'Learn the basics of Python programming.', level: 'Beginner' },
  { id: 2, title: 'Advanced React', date: 'April 15, 2026', description: 'Deep dive into React hooks and performance.', level: 'Advanced' },
  { id: 3, title: 'Data Science 101', date: 'April 20, 2026', description: 'Introduction to data analysis and visualization.', level: 'Beginner' },
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredWorkshops =
    activeFilter === 'All'
      ? workshopsData
      : workshopsData.filter((workshop) => workshop.level === activeFilter);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleBookingSubmit = (formData) => {
    console.log('Booking submitted:', formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50" id="workshops">
          <FilterBar
            filters={['All', 'Beginner', 'Advanced']}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
          {filteredWorkshops.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              No workshops available 😕
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkshops.map((workshop) => (
                <WorkshopCard
                  key={workshop.id}
                  title={workshop.title}
                  date={workshop.date}
                  description={workshop.description}
                  level={workshop.level}
                  onBookNow={() => console.log(`Booking workshop: ${workshop.title}`)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white" id="booking-form">
          <BookingForm workshops={workshopsData} onSubmit={handleBookingSubmit} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;