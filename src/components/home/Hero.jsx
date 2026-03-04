import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard } from '../GlassCard';
import { IMAGES } from '../../constants';
import { Zap, Layout } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-emerald-400">Available for new projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Hi, I'm Ankit — I build <span className="text-gradient">premium digital solutions</span> for Indian Media.
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Specializing in high-performance web engineering for India's top media houses and startups. I bridge the gap between world-class tech and the Indian consumer.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              to="/portfolio" 
              className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-emerald-600 hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
            >
              View Work <ArrowRight size={20} />
            </Link>
            <a 
              href="https://drive.google.com/file/d/1-GBj8QDsUaZIqSLtf8KEaGbCVuDwpJKM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="glass text-zinc-400 hover:text-white flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/10"
            >
              <Download size={18} /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* 3D Floating Element */}
          <div className="absolute -top-20 -left-20 w-40 h-40 pointer-events-none z-20">
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                rotateX: [0, 360],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="w-full h-full relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm"
                  style={{
                    transform: `rotateY(${i * 90}deg) translateZ(80px) ${i >= 4 ? `rotateX(${i === 4 ? 90 : -90}deg)` : ''}`
                  }}
                />
              ))}
            </motion.div>
          </div>

          <div className="animate-float">
            <GlassCard className="p-0 overflow-hidden border-white/20 shadow-2xl shadow-emerald-500/10">
              <img 
                src="./ankit-gpt.png" 
                alt="Ankit" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </GlassCard>
          </div>
          
          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-emerald-500/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Performance</p>
                <p className="text-sm font-bold">Optimized</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl border-blue-500/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500">
                <Layout size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Design</p>
                <p className="text-sm font-bold">Premium UX</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
