import { motion } from 'framer-motion';
import { Download, CheckCircle2, Award, Briefcase, GraduationCap, Heart, Zap } from 'lucide-react';
import { GlassCard } from '@/src/components/GlassCard';
import { IMAGES } from '../constants';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'] },
  { category: 'Performance', items: ['Web Vitals', 'Code Splitting', 'Lazy Loading', 'Image Optimization', 'Caching Strategies'] },
  { category: 'Tools & Design', items: ['Figma', 'Git', 'Docker', 'Vercel', 'CI/CD', 'Jest'] },
  { category: 'Backend (Basic)', items: ['Node.js', 'Express', 'PostgreSQL', 'Firebase', 'GraphQL'] },
];

const timeline = [
  {
    year: '2025 - Present',
    role: 'System Engineer',
    company: 'TCS',
    description: 'Currently working as a System Engineer, contributing to large-scale enterprise solutions and engineering excellence.'
  },
  {
    year: '2024 - 2025',
    role: 'Software Development Engineer (SDE)',
    company: 'Park+',
    description: 'Worked for 6 months as an SDE, focusing on backend systems and mobile application performance.'
  },
  {
    year: '2023 - 2024',
    role: 'SDE Intern',
    company: 'Coding Ninjas',
    description: 'Gained hands-on experience in full-stack development and mentored students in advanced data structures and algorithms.'
  },
  {
    year: '2022 - 2023',
    role: 'Web Development Intern',
    company: 'A1 Network and ID Solution',
    description: 'Started my professional journey building responsive web interfaces and learning industry best practices.'
  },
  {
    year: '2021 - Present',
    role: 'Freelance Frontend Engineer',
    company: 'Self-Employed',
    description: 'Delivering high-quality digital products for various clients over the past 3 years, specializing in React and performance optimization.'
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
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
                src={IMAGES.ABOUT} 
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

        {/* Skills Section */}
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

        {/* Career Timeline */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">Career Journey</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-12 border-l border-white/10 pb-12 last:pb-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <span className="text-emerald-500 font-mono text-sm px-3 py-1 glass rounded-full">{item.year}</span>
                </div>
                <p className="text-zinc-300 font-medium mb-4">{item.company}</p>
                <p className="text-zinc-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Mindset */}
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
      </div>
    </div>
  );
}
