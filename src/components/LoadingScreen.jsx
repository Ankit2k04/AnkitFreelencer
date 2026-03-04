import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-zinc-950 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-6"
        />
        <motion.h2 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white font-display font-bold text-xl tracking-widest"
        >
          ANKIT<span className="text-emerald-500">.</span>
        </motion.h2>
      </div>
    </motion.div>
  );
};
