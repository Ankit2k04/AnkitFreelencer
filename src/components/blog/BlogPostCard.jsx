import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard } from '../GlassCard';

export const BlogPostCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <GlassCard className="p-0 overflow-hidden group h-full flex flex-col">
        <Link to={`/blog/${post.id}`} className="block aspect-video overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </Link>
        <div className="p-8 flex-grow flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest px-3 py-1 glass rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-zinc-500 text-xs">
              <Calendar size={14} /> {post.date}
            </div>
          </div>
          
          <Link to={`/blog/${post.id}`}>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors leading-tight">
              {post.title}
            </h3>
          </Link>
          
          <p className="text-zinc-400 mb-8 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <User size={16} />
              </div>
              <span className="text-sm font-medium text-zinc-300">{post.author}</span>
            </div>
            <Link to={`/blog/${post.id}`} className="text-white text-sm font-bold flex items-center gap-2 group/btn">
              Read More <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
