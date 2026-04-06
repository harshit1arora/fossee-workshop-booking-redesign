import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, Sparkles, User, Mail, Book, BookOpen } from 'lucide-react';

const BookingModal = ({ workshop, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', college: '', course: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-3xl animate-in fade-in duration-500">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 100 }}
        className="w-full max-w-2xl bg-white dark:bg-slate-950 rounded-[3rem] shadow-4xl relative overflow-hidden flex flex-col border border-white/20"
      >
        {/* Background Decorative Blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] pointer-events-none" />

        <div className="relative p-10 md:p-14">
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all transform hover:rotate-90"
          >
            <X size={24} />
          </button>

          {step === 1 ? (
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-blue-600 font-black tracking-widest text-sm uppercase">
                  <Sparkles size={20} /> Secure Booking
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Join <span className="text-blue-600">"{workshop.title}"</span>
                </h2>
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-3xl flex items-start gap-4">
                  <div className="p-3 bg-blue-600 text-white rounded-2xl">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tighter text-lg leading-tight">Workshop Detail Highlights</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-base leading-snug">Expert instruction, interactive coding labs, and a prestigious certificate upon completion.</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Full Name", name: "name", icon: <User size={20} />, type: "text" },
                  { label: "Email Address", name: "email", icon: <Mail size={20} />, type: "email" },
                  { label: "College / Org", name: "college", icon: <Book size={20} />, type: "text" },
                  { label: "Field of Study", name: "course", icon: <BookOpen size={20} />, type: "text" }
                ].map(field => (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label className="text-sm font-black uppercase text-slate-400 tracking-wider pl-1">{field.label}</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-blue-500 transition-colors">
                        {field.icon}
                      </div>
                      <input 
                        required
                        type={field.type}
                        value={formData[field.name]}
                        onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                        className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-blue-500/20 rounded-2xl outline-none font-bold text-slate-800 dark:text-white transition-all focus:bg-white dark:focus:bg-black"
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />
                    </div>
                  </div>
                ))}

                <button 
                  disabled={isLoading}
                  type="submit" 
                  className="col-span-full mt-4 h-16 bg-blue-600 text-white rounded-2xl font-black text-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-70 shadow-2xl shadow-blue-500/30"
                >
                  {isLoading ? <Loader2 size={24} className="animate-spin" /> : "Confirm My Seat Now"}
                </button>
              </form>
            </div>
          ) : (
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="flex flex-col items-center text-center gap-6 py-12"
            >
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={64} className="animate-in zoom-in duration-500" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Booking Confirmed!</h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed font-medium">
                Awesome {formData.name}! We've sent all the workshop details to <span className="font-black text-blue-600">{formData.email}</span>. See you there!
              </p>
              <button 
                onClick={onClose}
                className="mt-6 px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black uppercase tracking-widest text-lg hover:scale-105 active:scale-95 transition-transform"
              >
                Back To Workshops
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BookingModal;
