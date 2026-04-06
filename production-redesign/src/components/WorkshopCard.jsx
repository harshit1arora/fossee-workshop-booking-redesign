import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkshopCard = ({ workshop, onBook }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="card-premium group relative flex flex-col h-full"
    >
      <div className="relative h-60 rounded-3xl overflow-hidden mb-6 mt-2">
        <img 
          src={workshop.image} 
          alt={workshop.title} 
          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-4 py-2 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
            {workshop.category}
          </span>
          <span className="px-4 py-2 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
            {workshop.level}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow gap-4">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {workshop.title}
        </h3>
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"><User size={16} /></div>
            <span>{workshop.instructor}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"><Calendar size={16} /></div>
            <span>{workshop.date}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"><Clock size={16} /></div>
            <span>{workshop.time}</span>
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 line-clamp-2 italic">
          "{workshop.description}"
        </p>

        <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
          <span className="text-2xl font-black text-green-600 dark:text-green-400">{workshop.price}</span>
          <button 
            onClick={onBook}
            className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 group/btn hover:translate-x-2 transition-transform"
          >
            Book Now <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkshopCard;
