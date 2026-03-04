import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-display font-bold text-white mb-6 block">
              ANKIT<span className="text-emerald-500">.</span>
            </Link>
            <p className="text-zinc-400 max-w-md mb-8">
              Building high-performance, accessible, and premium web experiences for forward-thinking brands and startups.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/ankit2k04/" },
                { icon: Twitter, href: "https://x.com/ankit2k04" },
                { icon: Mail, href: "mailto:ankit2k04@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Portfolio', 'Blog', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-zinc-400 hover:text-emerald-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>Frontend Development</li>
              <li>Performance Optimization</li>
              <li>UI/UX Design</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Ankit. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-zinc-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-zinc-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
