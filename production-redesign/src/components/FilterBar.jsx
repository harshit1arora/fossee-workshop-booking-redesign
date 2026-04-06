import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { categories } from '../data/workshops';

const FilterBar = ({ currentFilter, setFilter, search, setSearch }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-6 w-full lg:w-auto">
      <div className="flex bg-slate-100 dark:bg-slate-900 rounded-2xl p-2 gap-2 overflow-x-auto w-full lg:w-auto invisible-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 h-12 rounded-xl text-sm font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
              currentFilter === cat
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative group w-full md:w-80">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
          <Search size={20} />
        </div>
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Workshops..." 
          className="w-full h-16 pl-14 pr-14 bg-slate-100 dark:bg-slate-900 border-2 border-transparent focus:border-blue-500/30 dark:focus:border-blue-400/30 rounded-2xl outline-none text-slate-800 dark:text-white font-bold transition-all placeholder:text-slate-400"
        />
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
          <SlidersHorizontal size={18} />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
