import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard } from '../GlassCard';

export const FAQFooter = () => {
  return (
    <div className="mt-20 text-center">
      <GlassCard className="inline-block py-8 px-12">
        <HelpCircle className="text-emerald-500 mx-auto mb-4" size={32} />
        <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
        <p className="text-zinc-400 mb-6">I'm here to help you navigate your next big project.</p>
        <Link 
          to="/contact"
          className="bg-emerald-500 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-600 transition-all inline-block"
        >
          Contact Me Directly
        </Link>
      </GlassCard>
    </div>
  );
};
