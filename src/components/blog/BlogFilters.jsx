import { Search } from 'lucide-react';
import { cn } from '../../lib/utils';

export const BlogFilters = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all border",
              activeCategory === cat 
                ? "bg-emerald-500 border-emerald-500 text-white" 
                : "glass border-white/10 text-zinc-400 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};
