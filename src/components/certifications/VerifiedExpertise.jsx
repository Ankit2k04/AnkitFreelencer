import { ShieldCheck } from 'lucide-react';
import { GlassCard } from '../GlassCard';

export const VerifiedExpertise = () => {
  return (
    <div className="mt-32">
      <GlassCard className="bg-zinc-900/50 p-12 text-center">
        <ShieldCheck className="text-emerald-500 mx-auto mb-6" size={48} />
        <h2 className="text-3xl font-display font-bold mb-4">Verified Expertise</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          I maintain a high standard of technical excellence through rigorous certification and continuous hands-on experience with the latest web technologies in the Indian tech ecosystem.
        </p>
      </GlassCard>
    </div>
  );
};
