import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu, X, Phone, User } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const Navbar = ({ onOpenCart, onOpenWishlist }: { onOpenCart: () => void, onOpenWishlist: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, wishlist } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Custom Name', path: '/custom-name' },
    { name: 'Bulk Order', path: '/bulk-order' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-black"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <span className="font-serif text-2xl font-bold tracking-tighter leading-none">DesignCraftsWork</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold">Premium Wall Decor</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path}
              className="font-medium text-sm hover:text-brand-gold transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <form onSubmit={handleSearch} className="hidden md:flex relative group">
            <input 
              type="text" 
              placeholder="Search designs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-100 border-none rounded-full py-2 px-4 pl-10 text-sm focus:ring-2 focus:ring-brand-gold w-40 lg:w-64 transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-gold" size={16} />
          </form>

          <button onClick={onOpenWishlist} className="p-2 relative hover:text-brand-gold transition-colors">
            <Heart size={22} />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {wishlist.length}
              </span>
            )}
          </button>

          <button onClick={onOpenCart} className="p-2 relative hover:text-brand-gold transition-colors">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <Link to="/contact" className="hidden sm:flex p-2 hover:text-brand-gold transition-colors">
            <Phone size={22} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-bottom">
              <span className="font-serif text-xl font-bold">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-6 flex-1 overflow-y-auto">
              <form onSubmit={handleSearch} className="relative">
                <input 
                  type="text" 
                  placeholder="Search designs..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-100 border-none rounded-xl py-3 px-4 pl-12 text-base focus:ring-2 focus:ring-brand-gold"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </form>

              <div className="flex flex-col space-y-4">
                {navLinks.map(link => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif border-b border-gray-100 pb-2 hover:text-brand-gold"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-10 space-y-4">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Contact Us</p>
                <a href="tel:+919876543210" className="flex items-center space-x-3 text-lg">
                  <Phone size={20} className="text-brand-gold" />
                  <span>+91 98765 43210</span>
                </a>
                <div className="flex space-x-4 pt-4">
                  {/* Social icons would go here */}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
