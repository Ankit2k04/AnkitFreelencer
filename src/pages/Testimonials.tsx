import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { GlassCard } from '@/src/components/GlassCard';
import { IMAGES } from '../constants';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder, Bharat Media Group',
    content: "Ankit bhai ne hamari website ko ekdum premium look de diya. Performance itni fast hai ki users ko maza aa raha hai. Highly recommended for anyone looking for world-class quality in India.",
    rating: 5,
    image: IMAGES.TESTIMONIALS.RAJESH
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Head, Desi Digital',
    content: "Working with Ankit was a breeze. Unka design sense aur technical knowledge kamaal ka hai. Hamara conversion rate 50% badh gaya hai. Best frontend engineer in the market!",
    rating: 5,
    image: IMAGES.TESTIMONIALS.PRIYA
  },
  {
    name: 'Amit Patel',
    role: 'CTO, Mumbai Tech Ventures',
    content: "Ankit understands the Indian market perfectly. Unhone hamare complex dashboard ko itna simple aur beautiful banaya ki hamare clients impress ho gaye. Great work!",
    rating: 5,
    image: IMAGES.TESTIMONIALS.AMIT
  },
  {
    name: 'Siddharth Malhotra',
    role: 'Product Manager, Bangalore Startups',
    content: "Quality aur speed ka perfect combination. Ankit's attention to detail is just wow. Next project bhi inhi ke saath karenge. Shandaar kaam!",
    rating: 5,
    image: IMAGES.TESTIMONIALS.SIDDHARTH
  },
  {
    name: 'Anjali Gupta',
    role: 'Director, Delhi Creative Agency',
    content: "Hamare design ko reality mein badalne ke liye Ankit se behtar koi nahi. Animations itne smooth hain ki website premium lagti hai. Dhanyawad Ankit!",
    rating: 5,
    image: IMAGES.TESTIMONIALS.ANJALI
  },
  {
    name: 'Vikram Singh',
    role: 'CEO, Asansol Tech Solutions',
    content: "Ankit is a gem. He delivered the project ahead of schedule and the quality was top-notch. His understanding of UI/UX is exceptional.",
    rating: 5,
    image: IMAGES.TESTIMONIALS.VIKRAM
  },
  {
    name: 'Neha Verma',
    role: 'Founder, Kolkata Fashion Hub',
    content: "Extremely happy with the results. Ankit transformed our slow website into a lightning-fast e-commerce platform. Our sales have seen a significant jump.",
    rating: 5,
    image: IMAGES.TESTIMONIALS.NEHA
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate testimonials for infinite loop effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        // If we're near the end of the duplicated list, jump back to the middle
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: scrollWidth / 3, behavior: 'auto' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + 400, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Initial scroll to the middle set of testimonials for seamless loop
  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth } = scrollRef.current;
      scrollRef.current.scrollTo({ left: scrollWidth / 3, behavior: 'auto' });
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      
      // Handle manual scroll loop
      if (scrollTo < 0) {
        scrollRef.current.scrollTo({ left: scrollWidth / 3, behavior: 'auto' });
      } else if (scrollTo > scrollWidth - clientWidth) {
        scrollRef.current.scrollTo({ left: scrollWidth / 3, behavior: 'auto' });
      } else {
        scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Client <span className="text-gradient">Feedback</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Hamare clients kya kehte hain hamare kaam ke baare mein. Real feedback from real Indian businesses.
          </p>
        </div>

        <div className="relative group">
          {/* Slider Controls */}
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-emerald-500 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-emerald-500 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              perspective: '1000px'
            }}
          >
            {duplicatedTestimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center"
              >
                <GlassCard className="p-10 h-full flex flex-col relative border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500">
                  <Quote className="absolute top-6 right-6 text-emerald-500/10" size={80} />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-zinc-300 text-lg italic mb-10 leading-relaxed flex-grow">
                    "{t.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/20"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-white">{t.name}</h4>
                      <p className="text-zinc-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Indicator */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {testimonials.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-zinc-800" />
          ))}
        </div>
      </div>
    </div>
  );
}
