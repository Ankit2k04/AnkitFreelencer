import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { GlassCard } from '@/src/components/GlassCard';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Using Formspree for a functional contact form
    try {
      const response = await fetch('https://formspree.io/f/ankit2k04@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Something went wrong. Please try again or email me directly.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
              Let's build something <span className="text-gradient">extraordinary</span> together.
            </h1>
            <p className="text-zinc-400 text-lg mb-12 max-w-xl">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative collaborations.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-emerald-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:ankit2k04@gmail.com" className="text-xl font-bold hover:text-emerald-500 transition-colors">ankit2k04@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-blue-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Call Me</p>
                  <a href="tel:6295184289" className="text-xl font-bold hover:text-blue-500 transition-colors">6295184289</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-purple-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold">S.P MUKHERJEE ROAD MURGASOL DILDAR NAGAR ASANSOL-03</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/ankit2k04/" },
                { icon: Twitter, href: "https://x.com/ankit2k04" },
                { icon: Globe, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Full Name *</label>
                      <input 
                        type="text" 
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
        </div>

        {/* Map Section */}
        <div className="mt-32 rounded-3xl overflow-hidden glass h-[450px] relative border border-white/5 shadow-2xl">
          <iframe
            src="https://maps.google.com/maps?q=S.P%20MUKHERJEE%20ROAD%20MURGASOL%20DILDAR%20NAGAR%20ASANSOL-03&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
          
          {/* Overlay for aesthetic blending */}
          <div className="absolute inset-0 pointer-events-none border-[12px] border-zinc-950/20 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
}
