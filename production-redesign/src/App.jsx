import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkshopCard from './components/WorkshopCard';
import FilterBar from './components/FilterBar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { workshopsData } from './data/workshops';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [workshops, setWorkshops] = useState(workshopsData);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const filtered = workshopsData.filter(ws => {
      const matchCategory = filter === 'All' || ws.category === filter;
      const matchSearch = ws.title.toLowerCase().includes(search.toLowerCase()) || 
                          ws.instructor.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
    setWorkshops(filtered);
  }, [filter, search]);

  const openBooking = (workshop) => {
    setSelectedWorkshop(workshop);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      
      <main className="container mx-auto px-4 py-12" id="workshops">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Upcoming Workshops
          </h2>
          <FilterBar 
            currentFilter={filter} 
            setFilter={setFilter} 
            search={search} 
            setSearch={setSearch} 
          />
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {workshops.map((workshop) => (
              <WorkshopCard 
                key={workshop.id} 
                workshop={workshop} 
                onBook={() => openBooking(workshop)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {workshops.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500">No workshops found matching your criteria.</p>
          </div>
        )}
      </main>

      <Footer />

      <AnimatePresence>
        {isModalOpen && (
          <BookingModal 
            workshop={selectedWorkshop} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;



