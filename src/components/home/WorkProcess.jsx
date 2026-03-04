import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { GlassCard } from '../GlassCard';

const processSteps = [
  { title: 'Discovery', description: 'Understanding your goals, audience, and project requirements.' },
  { title: 'Design', description: 'Creating high-fidelity prototypes and visual systems.' },
  { title: 'Development', description: 'Writing clean, maintainable, and performant code.' },
  { title: 'Launch', description: 'Deploying your project with best-in-class infrastructure.' },
  { title: 'Support', description: 'Ongoing maintenance and iterative improvements.' }
];

export const WorkProcess = () => {
  return (
    <section className="py-32 px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">My Work Process</h2>
            <p className="text-zinc-400 text-lg mb-12">
              A structured approach to building successful digital products, ensuring quality and consistency at every stage.
            </p>
            
            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-500 font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                    <p className="text-zinc-500 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <GlassCard className="aspect-square flex items-center justify-center overflow-hidden p-0">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 border-2 border-dashed border-white/10 rounded-full flex items-center justify-center"
              >
                <div className="w-48 h-48 border-2 border-dashed border-emerald-500/20 rounded-full" />
              </motion.div>
              <div className="absolute flex flex-col items-center gap-4">
                <Rocket size={48} className="text-emerald-500" />
                <span className="text-xl font-display font-bold">Ready for Takeoff</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
