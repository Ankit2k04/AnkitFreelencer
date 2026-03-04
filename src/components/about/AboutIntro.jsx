import { motion } from 'framer-motion';
import { Download, Heart } from 'lucide-react';
import { IMAGES } from '../../constants';

export const AboutIntro = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
          Engineering <span className="text-gradient">Experiences</span> for Digital India.
        </h1>
        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
          <p>
            I'm Ankit, a passionate frontend engineer based in Mumbai. With a focus on mastering the art of web performance for the unique challenges of the Indian internet.
          </p>
          <p>
            My philosophy is simple: a website should be as fast as it is beautiful, even on a 3G connection in a Tier 3 city. I bridge the gap between complex engineering and elegant design, ensuring that every pixel serves a purpose for the Indian consumer.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or mentoring aspiring developers in the Indian tech community.
          </p>
        </div>
        
        <div className="mt-10 flex gap-4">
          <a 
            href="https://drive.google.com/file/d/1-GBj8QDsUaZIqSLtf8KEaGbCVuDwpJKM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
          >
            <Download size={20} /> Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-2">
          <img 
            src="./ankit-gpt.png"
            alt="Ankit" 
            className="w-full h-full object-cover rounded-2xl grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl max-w-xs hidden md:block">
          <Heart className="text-emerald-500 mb-4" size={32} fill="currentColor" />
          <p className="text-sm text-zinc-300 font-medium">
            "Ankit's attention to detail and commitment to performance is unparalleled. He truly understands the modern web."
          </p>
          <p className="text-xs text-zinc-500 mt-4">— CTO, TechFlow</p>
        </div>
      </motion.div>
    </div>
  );
};
