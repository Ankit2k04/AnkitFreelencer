import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, ArrowRight } from 'lucide-react';
import { GlassCard } from '@/src/components/GlassCard';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const categories = ['All', 'Web App', 'E-commerce', 'Dashboard', 'Landing Page'];

export const projects = [
  {
    id: 'nexus-saas',
    title: 'Bharat Nexus SaaS',
    category: 'Web App',
    description: 'A comprehensive project management tool for Indian remote teams with real-time collaboration features.',
    image: IMAGES.PROJECTS.NEXUS,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    client: 'Bharat Media Group',
    results: '40% increase in team productivity across 5 cities.'
  },
  {
    id: 'luxe-commerce',
    title: 'Desi Luxe Commerce',
    category: 'E-commerce',
    description: 'Premium fashion marketplace for Indian ethnic wear with headless Shopify integration.',
    image: IMAGES.PROJECTS.LUXE,
    tech: ['React', 'Shopify API', 'Framer Motion', 'Stripe'],
    client: 'Ethnic Trends India',
    results: '₹2Cr+ in sales within the first 3 months of launch.'
  },
  {
    id: 'crypto-pulse',
    title: 'Mumbai Crypto Pulse',
    category: 'Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard for Indian investors with INR support.',
    image: IMAGES.PROJECTS.CRYPTO,
    tech: ['React', 'D3.js', 'WebSockets', 'Tailwind'],
    client: 'Mumbai Tech Ventures',
    results: '10k+ active daily users from Tier 1 cities.'
  },
  {
    id: 'eco-sphere',
    title: 'Green India Sphere',
    category: 'Landing Page',
    description: 'High-converting landing page for an Indian environmental NGO with immersive scroll animations.',
    image: IMAGES.PROJECTS.ECO,
    tech: ['Next.js', 'GSAP', 'Three.js', 'Tailwind'],
    client: 'Eco Bharat Foundation',
    results: '₹50L+ in donations raised in the first campaign.'
  },
  {
    id: 'insight-analytics',
    title: 'Zomato Insight Analytics',
    category: 'Dashboard',
    description: 'Enterprise analytics platform providing deep insights into Indian food delivery trends.',
    image: IMAGES.PROJECTS.INSIGHT,
    tech: ['React', 'Recharts', 'Node.js', 'PostgreSQL'],
    client: 'Foodie Data Corp',
    results: 'Optimized delivery routes by 15% in Delhi NCR.'
  },
  {
    id: 'swift-delivery',
    title: 'Delhi Swift Delivery',
    category: 'Web App',
    description: 'Logistics and delivery management system for hyper-local delivery in Delhi.',
    image: IMAGES.PROJECTS.SWIFT,
    tech: ['React', 'Google Maps API', 'Firebase', 'Tailwind'],
    client: 'Delhi Logistics Ltd',
    results: 'Reduced average delivery time by 12 minutes.'
  },
  {
    id: 'interior-design',
    title: 'Aura Interior Design',
    category: 'Landing Page',
    description: 'A luxurious landing page for a premium interior design studio in Mumbai, featuring high-end visual storytelling.',
    image: IMAGES.PROJECTS.INTERIOR,
    tech: ['React', 'Framer Motion', 'Tailwind'],
    client: 'Aura Designs',
    results: '30% increase in high-value lead generation.'
  },
  {
    id: 'dental-clinic',
    title: 'SmileCare Dental Clinic',
    category: 'Web App',
    description: 'Modern appointment booking and patient management system for a multi-specialty dental clinic.',
    image: IMAGES.PROJECTS.DENTAL,
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    client: 'SmileCare India',
    results: 'Streamlined booking process for 500+ monthly patients.'
  },
  {
    id: 'restaurant-app',
    title: 'The Spice Route',
    category: 'Web App',
    description: 'Interactive digital menu and table reservation system for a fine-dining restaurant chain.',
    image: IMAGES.PROJECTS.RESTAURANT,
    tech: ['React', 'Node.js', 'MongoDB'],
    client: 'Spice Route Hospitality',
    results: 'Reduced wait times by 20% during peak hours.'
  },
  {
    id: 'yoga-studio',
    title: 'Prana Yoga Studio',
    category: 'Landing Page',
    description: 'Calm and minimalist landing page for a yoga studio with integrated class scheduling.',
    image: IMAGES.PROJECTS.YOGA,
    tech: ['React', 'Tailwind', 'Motion'],
    client: 'Prana Wellness',
    results: 'Doubled online class registrations in 2 months.'
  },
  {
    id: 'elearning-platform',
    title: 'SkillUp India',
    category: 'Web App',
    description: 'A specialized e-learning platform for vocational training in rural India.',
    image: IMAGES.PROJECTS.ELEARNING,
    tech: ['Next.js', 'PostgreSQL', 'AWS'],
    client: 'SkillUp Foundation',
    results: 'Empowered 5000+ students with digital skills.'
  },
  {
    id: 'real-estate',
    title: 'Skyline Realty',
    category: 'Web App',
    description: 'Premium real estate portal for luxury properties in South Mumbai with virtual tour integration.',
    image: IMAGES.PROJECTS.REAL_ESTATE,
    tech: ['React', 'Google Maps', 'Tailwind'],
    client: 'Skyline Group',
    results: '₹50Cr+ in property inquiries generated.'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Selected <span className="text-gradient">Works</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A collection of premium digital experiences built for the Indian market with precision and performance.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all border",
                activeCategory === category 
                  ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                  : "glass border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
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
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
