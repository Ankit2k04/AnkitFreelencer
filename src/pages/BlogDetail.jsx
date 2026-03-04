import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Share2, Zap, ArrowRight } from 'lucide-react';
import { posts } from '../data/posts';
import { GlassCard } from '../components/GlassCard';
import NotFound from './NotFound';

export default function BlogDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <NotFound />;

  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-500 transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest px-3 py-1 glass rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Calendar size={16} /> {post.date}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 leading-tight">{post.title}</h1>

          <div className="flex items-center justify-between mb-12 pb-8 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <User size={24} />
              </div>
              <div>
                <p className="text-white font-bold">{post.author}</p>
                <p className="text-zinc-500 text-sm">Senior Frontend Engineer</p>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-emerald-500 transition-all">
              <Share2 size={18} />
            </button>
          </div>

          <div className="aspect-video rounded-3xl overflow-hidden glass mb-12">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-300 text-xl leading-relaxed mb-8 font-medium">
              {post.excerpt}
            </p>
            
            <div className="text-zinc-400 text-lg leading-relaxed space-y-6">
              <p>
                In the rapidly evolving tech landscape of India, performance isn't just a feature—it's a necessity. With millions of users coming online from diverse geographical locations, building web applications that cater to varying network speeds is the biggest challenge for modern developers.
              </p>
              <p>
                When we talk about "Indian internet speeds," we're looking at a wide spectrum. While 5G is rolling out in metros, a significant portion of our audience still relies on 4G or even 3G networks in Tier 2 and Tier 3 cities. This is where advanced React patterns come into play.
              </p>
              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Key Strategies for Optimization</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Dynamic Code Splitting:</strong> Only load what the user needs right now. Use React.lazy and Suspense to break down large bundles.</li>
                <li><strong>Asset Optimization:</strong> Use modern formats like WebP for images and ensure they are appropriately sized for mobile devices.</li>
                <li><strong>Service Workers:</strong> Implement offline capabilities and intelligent caching to handle intermittent connectivity.</li>
              </ul>
              <p>
                By focusing on these core areas, we can build experiences that feel premium and responsive, regardless of the user's location or device. This is how we build for the next billion users in India.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <GlassCard className="bg-emerald-500/10 border-emerald-500/20 p-12 text-center relative overflow-hidden group">
              <div className="absolute inset-0 pointer-events-none">
                <motion.div 
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full"
                />
                <motion.div 
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"
                />
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotateY: [0, 360]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 mx-auto mb-8 flex items-center justify-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-2xl rotate-45" />
                  <div className="absolute inset-0 border-2 border-blue-500/30 rounded-2xl -rotate-45" />
                  <Zap size={40} className="text-emerald-500" />
                </motion.div>

                <h3 className="text-3xl font-display font-bold mb-4">Building the Future of Web</h3>
                <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                  I'm constantly exploring new technologies and pushing the boundaries of what's possible on the web. Let's create something amazing together.
                </p>
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-all"
                >
                  Explore My Work <ArrowRight size={20} />
                </Link>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
