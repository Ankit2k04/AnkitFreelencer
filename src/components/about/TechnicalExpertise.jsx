import { CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../GlassCard';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'] },
  { category: 'Performance', items: ['Web Vitals', 'Code Splitting', 'Lazy Loading', 'Image Optimization', 'Caching Strategies'] },
  { category: 'Tools & Design', items: ['Figma', 'Git', 'Docker', 'Vercel', 'CI/CD', 'Jest'] },
  { category: 'Backend (Basic)', items: ['Node.js', 'Express', 'PostgreSQL', 'Firebase', 'GraphQL'] },
];

export const TechnicalExpertise = () => {
  return (
    <section className="mb-32">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Technical Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <GlassCard key={i}>
            <h3 className="text-emerald-500 font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 size={18} /> {skill.category}
            </h3>
            <ul className="space-y-3">
              {skill.items.map((item, j) => (
                <li key={j} className="text-zinc-400 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
