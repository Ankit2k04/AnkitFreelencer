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

export const CareerJourney = () => {
  return (
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
  );
};
