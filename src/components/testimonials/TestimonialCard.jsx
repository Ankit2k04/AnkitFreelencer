import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { GlassCard } from '../GlassCard';

export const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center"
    >
      <GlassCard className="p-10 h-full flex flex-col relative border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500">
        <Quote className="absolute top-6 right-6 text-emerald-500/10" size={80} />
        
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, j) => (
            <Star key={j} size={16} className="text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        
        <p className="text-zinc-300 text-lg italic mb-10 leading-relaxed flex-grow">
          "{testimonial.content}"
        </p>
        
        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/20"
            referrerPolicy="no-referrer"
          />
          <div>
            <h4 className="font-bold text-white">{testimonial.name}</h4>
            <p className="text-zinc-500 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
