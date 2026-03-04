import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-9xl font-display font-bold text-emerald-500 mb-4"
        >
          404
        </motion.h1>
        <h2 className="text-3xl font-display font-bold mb-6">Page Not Found</h2>
        <p className="text-zinc-400 mb-12 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link 
          to="/" 
          className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-600 transition-all mx-auto w-fit"
        >
          <Home size={20} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
