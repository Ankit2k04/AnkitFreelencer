import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { GlassCard } from '../GlassCard';

export const ContactForm = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Redirect to Google Form as requested
    window.open('https://forms.gle/8xsoLZPCEJyc1JM88', '_blank');
    
    // Show success state locally as well
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <GlassCard className="p-8 md:p-12">
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send size={40} />
            </div>
            <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
            <p className="text-zinc-400 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-emerald-500 font-bold hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="6295184289"
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="Project Inquiry"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Message *</label>
              <textarea 
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </form>
        )}
      </GlassCard>
    </motion.div>
  );
};
