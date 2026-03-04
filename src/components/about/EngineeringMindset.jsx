import { Award, Zap, Briefcase } from 'lucide-react';
import { GlassCard } from '../GlassCard';

export const EngineeringMindset = () => {
  return (
    <section>
      <GlassCard className="bg-zinc-900/50 p-12 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mx-auto mb-6">
              <Award size={32} />
            </div>
            <h4 className="text-lg font-bold mb-4">Quality Focused</h4>
            <p className="text-zinc-500 text-sm">I prioritize clean, maintainable code and thorough documentation to ensure long-term project success.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mx-auto mb-6">
              <Zap size={32} />
            </div>
            <h4 className="text-lg font-bold mb-4">Modern Engineering</h4>
            <p className="text-zinc-500 text-sm">I leverage the latest tools and best practices to build reliable, high-quality web applications.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mx-auto mb-6">
              <Briefcase size={32} />
            </div>
            <h4 className="text-lg font-bold mb-4">Business Focused</h4>
            <p className="text-zinc-500 text-sm">I build solutions that solve real problems and drive measurable business growth.</p>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};
