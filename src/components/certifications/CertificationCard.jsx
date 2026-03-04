import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { GlassCard } from '../GlassCard';

export const CertificationCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
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
  );
};
