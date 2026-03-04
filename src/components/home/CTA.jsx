import { Link } from 'react-router-dom';
import { Download, Zap } from 'lucide-react';
import { GlassCard } from '../GlassCard';

export const CTA = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <GlassCard className="bg-emerald-500 text-white p-12 md:p-20 text-center relative overflow-hidden border-none hover:shadow-emerald-500/40">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Zap size={200} />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 relative z-10">
            Ready to build something <br className="hidden md:block" /> extraordinary?
          </h2>
          <p className="text-emerald-100 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Let's collaborate to create a digital experience that sets you apart from the competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link 
              to="/portfolio" 
              className="bg-white text-emerald-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all"
            >
              View Portfolio
            </Link>
            <a 
              href="https://drive.google.com/file/d/1-GBj8QDsUaZIqSLtf8KEaGbCVuDwpJKM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all border border-emerald-400/30 flex items-center gap-2"
            >
              <Download size={20} /> Resume
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
