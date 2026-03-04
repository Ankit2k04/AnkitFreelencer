import { Layout, Code2, Zap, Globe } from 'lucide-react';
import { GlassCard } from '../GlassCard';

const services = [
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Crafting intuitive, user-centric interfaces that convert and delight users across all devices.'
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building scalable, high-performance web applications using modern frameworks like React and Next.js.'
  },
  {
    icon: Zap,
    title: 'Technical Optimization',
    description: 'Enhancing application speed and search visibility through modern engineering practices.'
  },
  {
    icon: Globe,
    title: 'Technical Consulting',
    description: 'Providing expert guidance on architecture, tech stack selection, and engineering best practices.'
  }
];

export const Services = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Premium Services</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            I provide end-to-end digital solutions that combine cutting-edge technology with world-class design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <GlassCard key={i} className="group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
