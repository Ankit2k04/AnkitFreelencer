import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { GlassCard } from '@/src/components/GlassCard';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const categories = ['All', 'React', 'Performance', 'Design', 'Career'];

export const posts = [
  {
    id: 'react-perf-india',
    title: 'Optimizing React for Indian Internet Speeds',
    excerpt: 'Deep dive into code-splitting and rendering patterns that keep your apps fast even on 3G/4G networks in Tier 3 cities.',
    category: 'Performance',
    date: 'Jan 12, 2026',
    author: 'Ankit',
    image: IMAGES.BLOG.POST1
  },
  {
    id: 'glassmorphism-trends',
    title: 'The Rise of Premium UI in Indian Fintech',
    excerpt: 'Exploring how Indian fintech apps are adopting glassmorphism and premium aesthetics to build trust.',
    category: 'Design',
    date: 'Dec 28, 2025',
    author: 'Ankit',
    image: IMAGES.BLOG.POST2
  },
  {
    id: 'typescript-benefits',
    title: 'Why Indian Startups are Switching to TypeScript',
    excerpt: 'How static typing is helping Indian engineering teams scale faster and reduce production bugs.',
    category: 'React',
    date: 'Nov 15, 2025',
    author: 'Ankit',
    image: IMAGES.BLOG.POST3
  },
  {
    id: 'freelance-career-india',
    title: 'Building a ₹50L+ Freelance Career in India',
    excerpt: 'My journey of building a high-ticket freelance business while working with global and Indian clients.',
    category: 'Career',
    date: 'Oct 30, 2025',
    author: 'Ankit',
    image: IMAGES.BLOG.POST4
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = posts.filter(post => 
    activeCategory === 'All' || post.category === activeCategory
  );

  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Thought <span className="text-gradient">Leadership</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Sharing insights on web engineering and the Indian tech ecosystem.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all border",
                  activeCategory === cat 
                    ? "bg-emerald-500 border-emerald-500 text-white" 
                    : "glass border-white/10 text-zinc-400 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
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
          ))}
        </div>
      </div>
    </div>
  );
}
