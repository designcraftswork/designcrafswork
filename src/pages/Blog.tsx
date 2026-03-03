import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: '1',
      title: '5 Spiritual Wall Decor Ideas for Your New Home',
      excerpt: 'Discover how to create a peaceful and divine atmosphere in your living space with our spiritual calligraphy collection.',
      image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=800&auto=format&fit=crop',
      date: 'Oct 12, 2025',
      author: 'Priya Sharma',
      category: 'Home Decor'
    },
    {
      id: '2',
      title: 'How to Apply Wall Stickers Like a Pro',
      excerpt: 'A step-by-step guide to achieving a bubble-free, professional finish for your wall decals. No tools required!',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
      date: 'Sep 28, 2025',
      author: 'Rahul Verma',
      category: 'DIY Guide'
    },
    {
      id: '3',
      title: 'Designing the Perfect Nursery: A Kids Room Guide',
      excerpt: 'From jungle themes to space explorers, find out how to spark your child\'s imagination with wall art.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800&auto=format&fit=crop',
      date: 'Aug 15, 2025',
      author: 'Ananya Iyer',
      category: 'Kids Room'
    },
    {
      id: '4',
      title: 'Why Wall Stickers are Better Than Paint',
      excerpt: 'Explore the benefits of vinyl decals over traditional paint, especially for renters and temporary decor.',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=800&auto=format&fit=crop',
      date: 'Jul 10, 2025',
      author: 'Design Team',
      category: 'Trends'
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="bg-brand-gold-light py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Decor Inspiration</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Wall Decor Blog</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Tips, tricks, and inspiration to help you transform your space into a masterpiece.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Blog Feed */}
          <div className="lg:col-span-2 space-y-16">
            {posts.map(post => (
              <article key={post.id} className="group">
                <Link to={`/blog/${post.id}`} className="block aspect-video rounded-[2rem] overflow-hidden mb-8 shadow-lg">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                <div className="space-y-4">
                  <div className="flex items-center space-x-6 text-xs text-gray-400 uppercase tracking-widest font-bold">
                    <span className="flex items-center space-x-2">
                      <Calendar size={14} className="text-brand-gold" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <User size={14} className="text-brand-gold" />
                      <span>{post.author}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Tag size={14} className="text-brand-gold" />
                      <span>{post.category}</span>
                    </span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold group-hover:text-brand-gold transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-brand-black font-bold border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors"
                  >
                    <span>READ MORE</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}

            {/* Pagination Placeholder */}
            <div className="flex items-center justify-center space-x-4 pt-12">
              <button className="w-12 h-12 rounded-xl bg-brand-black text-white font-bold flex items-center justify-center">1</button>
              <button className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-brand-gold hover:text-white transition-colors font-bold flex items-center justify-center">2</button>
              <button className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-brand-gold hover:text-white transition-colors font-bold flex items-center justify-center">3</button>
              <button className="px-6 h-12 rounded-xl bg-gray-100 hover:bg-brand-gold hover:text-white transition-colors font-bold flex items-center justify-center">NEXT</button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            {/* Search */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="font-serif text-xl font-bold mb-6">Search Blog</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 pr-12 text-sm focus:ring-2 focus:ring-brand-gold"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="font-serif text-xl font-bold mb-6">Categories</h3>
              <ul className="space-y-4">
                {['Home Decor', 'DIY Guide', 'Kids Room', 'Trends', 'Spiritual Decor'].map(cat => (
                  <li key={cat}>
                    <a href="#" className="flex items-center justify-between text-gray-500 hover:text-brand-gold transition-colors font-medium">
                      <span>{cat}</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-lg">12</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="font-serif text-xl font-bold mb-6">Popular Posts</h3>
              <div className="space-y-6">
                {posts.slice(0, 3).map(post => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="flex items-center space-x-4 group">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm line-clamp-2 group-hover:text-brand-gold transition-colors">{post.title}</h4>
                      <span className="text-[10px] text-gray-400 uppercase font-bold">{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-brand-black text-white p-8 rounded-[2rem] shadow-xl text-center space-y-6">
              <h3 className="font-serif text-2xl font-bold">Never Miss a Post</h3>
              <p className="text-gray-400 text-sm">Join 5,000+ decor enthusiasts and get the latest tips in your inbox.</p>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-sm outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <button className="w-full bg-brand-gold text-brand-black py-4 rounded-xl font-bold hover:bg-white transition-colors">
                SUBSCRIBE NOW
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
