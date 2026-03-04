import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from '../GlassCard';

export const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <GlassCard className="p-0 overflow-hidden group h-full flex flex-col">
        <Link to={`/portfolio/${project.id}`} className="block relative aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="px-6 py-3 rounded-full bg-emerald-500 text-white font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              View Case Study
            </div>
          </div>
        </Link>
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest">{project.category}</span>
          </div>
          <Link to={`/portfolio/${project.id}`}>
            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
          </Link>
          <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
            {project.description}
          </p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/5">
                  {t}
                </span>
              ))}
            </div>
            <Link to={`/portfolio/${project.id}`} className="text-white text-sm font-bold flex items-center gap-2 group/btn">
              View Case Study <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
