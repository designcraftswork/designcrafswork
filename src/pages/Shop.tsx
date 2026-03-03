import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, Search, SlidersHorizontal, X } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const Shop = () => {
  const { products, categories } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categoryFilter = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('search') || '';
  const sortBy = searchParams.get('sort') || 'popular';
  const priceRange = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }

    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }

    return result;
  }, [categoryFilter, searchQuery, sortBy, priceRange]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="pt-24 pb-24">
      {/* Page Header */}
      <div className="bg-brand-gold-light py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Shop All Designs</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover our full range of premium wall stickers. From spiritual calligraphy to modern 3D illusions, find the perfect match for your space.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 space-y-10">
            <div>
              <h3 className="font-serif text-xl font-bold mb-6 flex items-center space-x-2">
                <Filter size={20} className="text-brand-gold" />
                <span>Categories</span>
              </h3>
              <div className="space-y-3">
                <button 
                  onClick={() => updateFilter('category', 'all')}
                  className={cn(
                    "block w-full text-left py-2 px-4 rounded-xl transition-all",
                    categoryFilter === 'all' ? "bg-brand-black text-white font-bold" : "hover:bg-gray-100 text-gray-600"
                  )}
                >
                  All Products
                </button>
                {categories.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => updateFilter('category', cat.id)}
                    className={cn(
                      "block w-full text-left py-2 px-4 rounded-xl transition-all",
                      categoryFilter === cat.id ? "bg-brand-black text-white font-bold" : "hover:bg-gray-100 text-gray-600"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold mb-6">Price Range</h3>
              <div className="space-y-3">
                {[
                  { label: 'All Prices', value: 'all' },
                  { label: 'Under ₹500', value: '0-500' },
                  { label: '₹500 - ₹1000', value: '500-1000' },
                  { label: '₹1000 - ₹2000', value: '1000-2000' },
                  { label: 'Above ₹2000', value: '2000-10000' }
                ].map(range => (
                  <button 
                    key={range.value}
                    onClick={() => updateFilter('price', range.value)}
                    className={cn(
                      "block w-full text-left py-2 px-4 rounded-xl transition-all",
                      priceRange === range.value ? "bg-brand-black text-white font-bold" : "hover:bg-gray-100 text-gray-600"
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <button 
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-xl font-bold text-sm"
                >
                  <SlidersHorizontal size={18} />
                  <span>FILTERS</span>
                </button>
                <p className="text-sm text-gray-500">
                  Showing <span className="font-bold text-brand-black">{filteredProducts.length}</span> results
                </p>
              </div>

              <div className="flex items-center space-x-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <input 
                    type="text" 
                    placeholder="Search in shop..." 
                    value={searchQuery}
                    onChange={(e) => updateFilter('search', e.target.value)}
                    className="w-full bg-gray-50 border-none rounded-xl py-2 px-4 pl-10 text-sm focus:ring-2 focus:ring-brand-gold"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                </div>
                
                <select 
                  value={sortBy}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="bg-gray-50 border-none rounded-xl py-2 px-4 text-sm font-bold focus:ring-2 focus:ring-brand-gold outline-none"
                >
                  <option value="popular">Popularity</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(categoryFilter !== 'all' || priceRange !== 'all' || searchQuery) && (
              <div className="flex flex-wrap gap-2 mb-8">
                {categoryFilter !== 'all' && (
                  <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-2">
                    <span>Category: {categories.find(c => c.id === categoryFilter)?.name}</span>
                    <button onClick={() => updateFilter('category', 'all')}><X size={14} /></button>
                  </span>
                )}
                {priceRange !== 'all' && (
                  <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-2">
                    <span>Price: {priceRange}</span>
                    <button onClick={() => updateFilter('price', 'all')}><X size={14} /></button>
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-2">
                    <span>Search: {searchQuery}</span>
                    <button onClick={() => updateFilter('search', '')}><X size={14} /></button>
                  </span>
                )}
                <button 
                  onClick={() => {
                    setSearchParams(new URLSearchParams());
                  }}
                  className="text-xs text-gray-400 hover:text-brand-black underline font-bold"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center space-y-6">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Search size={40} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold">No products found</h3>
                  <p className="text-gray-500">Try adjusting your filters or search query.</p>
                </div>
                <button 
                  onClick={() => setSearchParams(new URLSearchParams())}
                  className="bg-brand-black text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-gold transition-colors"
                >
                  CLEAR ALL FILTERS
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed top-0 left-0 h-full w-full max-w-xs bg-white z-[101] shadow-2xl flex flex-col lg:hidden"
            >
              <div className="p-6 flex justify-between items-center border-b">
                <h2 className="text-xl font-serif font-bold">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-10">
                <div>
                  <h3 className="font-serif text-lg font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {['all', ...categories.map(c => c.id)].map(id => (
                      <button 
                        key={id}
                        onClick={() => {
                          updateFilter('category', id);
                          setIsFilterOpen(false);
                        }}
                        className={cn(
                          "block w-full text-left py-2 px-4 rounded-xl text-sm",
                          categoryFilter === id ? "bg-brand-black text-white font-bold" : "bg-gray-50 text-gray-600"
                        )}
                      >
                        {id === 'all' ? 'All Products' : categories.find(c => c.id === id)?.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold mb-4">Price Range</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'All Prices', value: 'all' },
                      { label: 'Under ₹500', value: '0-500' },
                      { label: '₹500 - ₹1000', value: '500-1000' },
                      { label: '₹1000 - ₹2000', value: '1000-2000' },
                      { label: 'Above ₹2000', value: '2000-10000' }
                    ].map(range => (
                      <button 
                        key={range.value}
                        onClick={() => {
                          updateFilter('price', range.value);
                          setIsFilterOpen(false);
                        }}
                        className={cn(
                          "block w-full text-left py-2 px-4 rounded-xl text-sm",
                          priceRange === range.value ? "bg-brand-black text-white font-bold" : "bg-gray-50 text-gray-600"
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 border-t">
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-brand-black text-white py-4 rounded-xl font-bold"
                >
                  APPLY FILTERS
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
