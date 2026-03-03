import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-tighter leading-none">DesignCraftsWork</span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold">Premium Wall Decor</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming Indian homes with premium, spiritual, and modern wall stickers. 
              Peel, stick, and watch your space come alive.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-brand-gold">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
              <li><Link to="/custom-name" className="hover:text-white transition-colors">Custom Name Stickers</Link></li>
              <li><Link to="/bulk-order" className="hover:text-white transition-colors">Bulk Orders</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Wall Decor Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-brand-gold">Policies</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/return-policy" className="hover:text-white transition-colors">Return & Refund Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-brand-gold">Join Our Tribe</h3>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to get special offers, free decor tips, and once-in-a-lifetime deals.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-brand-gold outline-none"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-gold text-brand-black px-4 rounded-lg font-bold hover:bg-white transition-colors">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Call Us</p>
              <p className="font-bold">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Email Us</p>
              <p className="font-bold">hello@designcraftswork.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Visit Us</p>
              <p className="font-bold">Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-xs">
          <p>© 2026 DesignCraftsWork. All rights reserved. Made with ❤️ in India.</p>
          <div className="flex items-center space-x-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/UPI-Logo.png/640px-UPI-Logo.png" alt="UPI" className="h-4 grayscale opacity-50" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-3 grayscale opacity-50" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-4 grayscale opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
