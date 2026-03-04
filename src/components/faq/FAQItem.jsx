import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { cn } from '../../lib/utils';

export const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <GlassCard 
      className={cn(
        "p-0 overflow-hidden transition-all duration-300",
        isOpen ? "border-emerald-500/30" : "hover:border-white/20"
      )}
      hover={false}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
      >
        <span className="text-lg font-bold text-white">{faq.question}</span>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-all",
          isOpen ? "bg-emerald-500 text-white rotate-180" : "bg-white/5 text-zinc-400"
        )}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-8 text-zinc-400 leading-relaxed border-t border-white/5 pt-6">
          {faq.answer}
        </div>
      </motion.div>
    </GlassCard>
  );
};
