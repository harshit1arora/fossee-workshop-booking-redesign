import React from 'react';
import { BookOpen, Twitter, Share2, Github, Linkedin, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-32 pb-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl text-white">
              <BookOpen size={24} />
            </div>
            <span className="text-2xl font-black tracking-tight dark:text-white uppercase tracking-widest">
              FOSSEE <span className="text-blue-600">Workshops</span>
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
            Revolutionizing education through open-source software and expert-led training. Join us to reshape your future.
          </p>
          <div className="flex gap-4">
            {[Twitter, Github, Linkedin, Share2].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-14 h-14 bg-white dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            {['About Us', 'Success Stories', 'Partner Programs', 'Privacy Policy'].map(item => (
              <li key={item}>
                <a href="#" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-blue-600 dark:hover:text-blue-400 group transition-all">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest">Resources</h4>
          <ul className="flex flex-col gap-4">
            {['Self-Learning', 'Project Documentation', 'Community Forum', 'Career Portal'].map(item => (
              <li key={item}>
                <a href="#" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-blue-600 dark:hover:text-blue-400 group transition-all">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <div className="p-10 bg-blue-600 rounded-3xl text-white relative overflow-hidden shadow-2xl flex flex-col gap-4">
            <div className="relative z-10">
              <h4 className="text-2xl font-black uppercase tracking-widest mb-2">Be Updated</h4>
              <p className="text-blue-100 font-bold mb-6">Get premium workshop alerts delivered to your inbox weekly.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full h-14 px-6 bg-white/20 border-2 border-white/20 rounded-2xl outline-none placeholder:text-blue-100/60 font-black focus:bg-white/40 transition-all text-white"
                />
                <button className="p-4 bg-white text-blue-600 rounded-2xl hover:scale-110 active:scale-95 transition-transform shadow-lg">
                  <ExternalLink size={24} />
                </button>
              </div>
            </div>
            {/* Background Sphere */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 dark:text-slate-400 font-bold text-base flex items-center gap-2">
          © 2026 FOSSEE Workshop Booking. Made with <Heart size={20} className="text-rose-500 fill-rose-500" /> for Open Education.
        </p>
        <div className="flex items-center gap-8">
          <span className="text-slate-400 font-black text-sm uppercase tracking-widest">IIT Bombay Initiative</span>
          <span className="text-slate-400 font-black text-sm uppercase tracking-widest">NMEICT</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
