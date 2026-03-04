import { motion } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlassCard } from '@/src/components/GlassCard';
import { cn } from '@/src/lib/utils';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in premium frontend development, UI/UX design, performance optimization, and technical consulting. Whether you need a brand new web application or want to optimize an existing one, I provide end-to-end solutions tailored to your business goals."
  },
  {
    question: "What is your pricing model?",
    answer: "I offer both project-based fixed pricing and hourly rates depending on the scope and complexity of the project. For long-term collaborations, I also offer retainer models. Every project starts with a free discovery call to understand your needs and provide a transparent quote."
  },
  {
    question: "How long does a project take?",
    answer: "Timeline varies significantly based on project scope. A high-converting landing page typically takes 2-3 weeks, while a complex SaaS platform can take 2-4 months. I prioritize quality and performance, ensuring we hit milestones without compromising on the final result."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. I believe in long-term partnerships. I offer maintenance packages that include performance monitoring, security updates, and iterative improvements to ensure your digital product continues to perform at its best."
  },
  {
    question: "Do you work internationally?",
    answer: "Yes, I work with clients globally. I'm experienced in collaborating across different time zones and use modern communication tools to ensure seamless project management regardless of location."
  },
  {
    question: "How can I start a project with you?",
    answer: "The best way to start is by filling out the contact form or sending me an email. We'll schedule a discovery call to discuss your vision, requirements, and how I can help you achieve your goals."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h1>
          <p className="text-zinc-400 text-lg">
            Everything you need to know about working with me and my process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <GlassCard 
              key={i} 
              className={cn(
                "p-0 overflow-hidden transition-all duration-300",
                openIndex === i ? "border-emerald-500/30" : "hover:border-white/20"
              )}
              hover={false}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                  openIndex === i ? "bg-emerald-500 text-white rotate-180" : "bg-white/5 text-zinc-400"
                )}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 text-zinc-400 leading-relaxed border-t border-white/5 pt-6">
                  {faq.answer}
                </div>
              </motion.div>
            </GlassCard>
          ))}
        </div>

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
      </div>
    </div>
  );
}
