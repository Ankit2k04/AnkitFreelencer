import { testimonials } from '../data/testimonials';
import { TestimonialHeader } from '../components/testimonials/TestimonialHeader';
import { TestimonialSlider } from '../components/testimonials/TestimonialSlider';

export default function Testimonials() {
  return (
    <div className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <TestimonialHeader />
        <TestimonialSlider testimonials={testimonials} />
        
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
