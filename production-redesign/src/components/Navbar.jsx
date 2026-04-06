import React, { useState } from 'react';
import { Moon, Sun, Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism py-4">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="p-2 bg-blue-600 rounded-xl text-white group-hover:rotate-12 transition-transform duration-300">
            <BookOpen size={24} />
          </div>
          <span className="text-2xl font-black tracking-tight dark:text-white uppercase tracking-wider">
            FOSSEE <span className="text-blue-600">Workshops</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {['Explore', 'Workshops', 'Instructors', 'Support'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-slate-600 dark:text-slate-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-6 pl-6 border-l border-slate-200 dark:border-slate-800">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:scale-110 active:scale-95 transition-all"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl dark:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 glassmorphism p-6 flex flex-col gap-4"
          >
            {['Explore', 'Workshops', 'Instructors', 'Support'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-semibold h-12 flex items-center px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="btn-primary w-full mt-4">Join Community</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
