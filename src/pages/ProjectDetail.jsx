import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { GlassCard } from '../components/GlassCard';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <NotFound />;

  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-500 transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">{project.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="aspect-video rounded-3xl overflow-hidden glass mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  {project.description} This project was specifically designed to address the unique challenges of the Indian market, focusing on scalability and user experience for a diverse audience.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
                <p className="text-zinc-400 mb-8">
                  The primary goal was to create a solution that works seamlessly across various network conditions in India, from high-speed fiber in metros to 3G networks in rural areas. We needed to maintain a premium feel while ensuring extreme performance.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-white">The Solution</h3>
                <p className="text-zinc-400 mb-8">
                  We implemented advanced code-splitting, image optimization, and a custom caching layer. The UI was built with a mobile-first approach, considering that the majority of Indian users access the web via smartphones.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <GlassCard className="p-8">
                <h4 className="text-zinc-500 text-xs uppercase tracking-widest mb-6">Project Info</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Client</p>
                    <p className="font-bold text-white">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Category</p>
                    <p className="font-bold text-white">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Tech Stack</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 border-emerald-500/20">
                <h4 className="text-emerald-500 text-xs uppercase tracking-widest mb-6">Results</h4>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                  <p className="text-zinc-300 font-medium">{project.results}</p>
                </div>
              </GlassCard>

              <div className="flex flex-col gap-4">
                <Link to="/portfolio" className="w-full bg-emerald-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all">
                  Back to Portfolio <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
