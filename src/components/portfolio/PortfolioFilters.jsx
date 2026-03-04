import { cn } from '../../lib/utils';

export const PortfolioFilters = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all border",
            activeCategory === category 
              ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
              : "glass border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
