import { motion, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const Counter = ({ value, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    const controls = animate(0, numericValue, {
      duration: 2,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [numericValue]);

  return <span>{displayValue}{suffix || value.replace(/[0-9]/g, '')}</span>;
};

const stats = [
  { label: 'Projects Completed', value: '50 +' },
  { label: 'Happy Clients', value: '45 +' },
  { label: 'Years Experience', value: '3 +' },
  { label: 'Satisfaction Rate', value: '90% +' },
];

export const Stats = () => {
  return (
    <section className="py-20 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                <Counter value={stat.value} />
              </h3>
              <p className="text-zinc-500 text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
