import React from 'react';
import { Play, Sparkles, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden dark:bg-slate-950">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[150px] mix-blend-multiply opacity-50 pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-80 h-80 bg-purple-500/20 blur-[120px] mix-blend-multiply opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-20">
        <div className="flex flex-col gap-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="flex items-center gap-3 px-4 py-2 bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full w-fit"
          >
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-sm font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest leading-none">
              Premier Learning Platform
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter"
          >
            Master <span className="text-blue-600">Open-Source</span> <br /> 
            Anytime, Anywhere.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
          >
            Elevate your skills with FOSSEE's expert-led workshops. From beginner basics to expert mastery in open-source software, documentation, and beyond.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 mt-4"
          >
            <button className="btn-primary flex items-center gap-3">
              Enroll Now <TrendingUp size={20} />
            </button>
            <button className="px-6 py-3 border-2 border-slate-200 dark:border-slate-800 rounded-xl font-bold flex items-center gap-3 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              Watch Demo <Play size={20} />
            </button>
          </motion.div>

          {/* Social Proof */}
          <div className="flex items-center gap-8 pt-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/100?img=${i+10}`} 
                  className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 object-cover grayscale hover:grayscale-0 transition-all cursor-pointer" 
                  alt="Student" 
                />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black dark:text-white">10K+ Students</span>
              <span className="text-sm text-slate-500 font-medium">Joined this month</span>
            </div>
          </div>
        </div>

        {/* Visual Content Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative group hidden lg:block"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
              alt="Programming Lab" 
              className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-12">
              <div className="p-6 glassmorphism rounded-3xl w-fit flex flex-col gap-2">
                <div className="flex items-center gap-2 text-blue-500 font-black tracking-widest text-sm uppercase">
                  <Users size={16} /> Featured Workshop
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Python For AI & Robotics</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
