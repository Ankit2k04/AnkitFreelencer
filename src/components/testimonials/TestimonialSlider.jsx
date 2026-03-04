import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialSlider = ({ testimonials }) => {
  const scrollRef = useRef(null);
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: scrollWidth / 3, behavior: 'auto' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + 400, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth } = scrollRef.current;
      scrollRef.current.scrollTo({ left: scrollWidth / 3, behavior: 'auto' });
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      
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
    <div className="relative group">
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
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>
    </div>
  );
};
