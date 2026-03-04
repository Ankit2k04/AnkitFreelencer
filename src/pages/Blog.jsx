import { useState } from 'react';
import { posts } from '../data/posts';
import { BlogHeader } from '../components/blog/BlogHeader';
import { BlogFilters } from '../components/blog/BlogFilters';
import { BlogPostCard } from '../components/blog/BlogPostCard';

const categories = ['All', 'Web App', 'Design', 'Career'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = posts.filter(post => 
    activeCategory === 'All' || post.category === activeCategory
  );

  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <BlogHeader />
        
        <BlogFilters 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredPosts.map((post, i) => (
            <BlogPostCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
