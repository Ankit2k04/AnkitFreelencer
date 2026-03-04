import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
        Let's build something <span className="text-gradient">extraordinary</span> together.
      </h1>
      <p className="text-zinc-400 text-lg mb-12 max-w-xl">
        Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative collaborations.
      </p>

      <div className="space-y-8 mb-12">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-emerald-500">
            <Mail size={24} />
          </div>
          <div>
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Email Me</p>
            <a href="mailto:ankit2k04@gmail.com" className="text-xl font-bold hover:text-emerald-500 transition-colors">ankit2k04@gmail.com</a>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-blue-500">
            <Phone size={24} />
          </div>
          <div>
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Call Me</p>
            <a href="tel:6295184289" className="text-xl font-bold hover:text-blue-500 transition-colors">6295184289</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-purple-500">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Location</p>
            <p className="text-xl font-bold">S.P MUKHERJEE ROAD MURGASOL DILDAR NAGAR ASANSOL-03</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        {[
          { icon: Linkedin, href: "https://www.linkedin.com/in/ankit2k04/" },
          { icon: Twitter, href: "https://x.com/ankit2k04" },
          { icon: Globe, href: "#" }
        ].map((social, i) => (
          <a 
            key={i} 
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all"
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
    </motion.div>
  );
};
