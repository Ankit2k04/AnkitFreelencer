import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ShieldCheck, Zap } from 'lucide-react';
import { GlassCard } from '@/src/components/GlassCard';
import { IMAGES } from '../constants';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    org: 'Amazon Web Services',
    date: 'Jan 2026',
    badge: IMAGES.CERTIFICATIONS.AWS
  },
  {
    title: 'Meta Frontend Developer Professional',
    org: 'Meta',
    date: 'Nov 2025',
    badge: IMAGES.CERTIFICATIONS.META
  },
  {
    title: 'Google UX Design Professional',
    org: 'Google',
    date: 'Sep 2025',
    badge: IMAGES.CERTIFICATIONS.GOOGLE
  },
  {
    title: 'Advanced React Patterns',
    org: 'Frontend Masters',
    date: 'Jun 2025',
    badge: IMAGES.CERTIFICATIONS.FM
  },
  {
    title: 'Full Stack Web Development',
    org: 'IIT Bombay (Executive)',
    date: 'Mar 2025',
    badge: IMAGES.CERTIFICATIONS.IITB
  },
  {
    title: 'Mobile App Development',
    org: 'Udacity Nanodegree',
    date: 'Jan 2025',
    badge: IMAGES.CERTIFICATIONS.UDACITY
  },
  {
    title: 'Cloud Computing Specialization',
    org: 'IBM',
    date: 'Dec 2024',
    badge: IMAGES.CERTIFICATIONS.IBM
  },
  {
    title: 'UI/UX Design Masterclass',
    org: 'Design Academy India',
    date: 'Oct 2024',
    badge: IMAGES.CERTIFICATIONS.DESIGN
  }
];

export default function Certifications() {
  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Professional <span className="text-gradient">Certifications</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Continuous learning is at the core of my engineering philosophy. Here are some of the certifications I've earned recently (2024-2026).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="text-center group h-full flex flex-col">
                <div className="w-24 h-24 mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full group-hover:bg-emerald-500/40 transition-all" />
                  <img 
                    src={cert.badge} 
                    alt={cert.title} 
                    className="w-full h-full object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors">{cert.title}</h3>
                <p className="text-zinc-500 text-sm mb-6">{cert.org}</p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-center text-xs text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} /> {cert.date}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <GlassCard className="bg-zinc-900/50 p-12 text-center">
            <ShieldCheck className="text-emerald-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-display font-bold mb-4">Verified Expertise</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              I maintain a high standard of technical excellence through rigorous certification and continuous hands-on experience with the latest web technologies in the Indian tech ecosystem.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
