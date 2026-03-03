import React, { useState } from 'react';
import { Upload, Type, Palette, Maximize, CheckCircle2, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const CustomName = () => {
  const [name, setName] = useState('Your Name');
  const [font, setFont] = useState('serif');
  const [color, setColor] = useState('#D4AF37');
  const [size, setSize] = useState('Medium');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fonts = [
    { id: 'serif', name: 'Elegant Serif', family: 'Playfair Display' },
    { id: 'sans', name: 'Modern Sans', family: 'Poppins' },
    { id: 'cursive', name: 'Graceful Cursive', family: 'cursive' },
    { id: 'bold', name: 'Bold Impact', family: 'Impact' }
  ];

  const colors = [
    { id: 'gold', name: 'Royal Gold', hex: '#D4AF37' },
    { id: 'black', name: 'Classic Black', hex: '#1A1A1A' },
    { id: 'silver', name: 'Sleek Silver', hex: '#C0C0C0' },
    { id: 'rose', name: 'Rose Gold', hex: '#B76E79' },
    { id: 'white', name: 'Pure White', hex: '#FFFFFF' }
  ];

  const sizes = [
    { id: 'Small', price: 499, desc: '12" Width' },
    { id: 'Medium', price: 899, desc: '24" Width' },
    { id: 'Large', price: 1499, desc: '48" Width' }
  ];

  const currentPrice = sizes.find(s => s.id === size)?.price || 899;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Custom design added to cart!');
    }, 1500);
  };

  return (
    <div className="pt-24 pb-24">
      <div className="bg-brand-gold-light py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Personalized Decor</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Custom Name Stickers</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Create a unique identity for your space. Choose your name, font, and color to design a wall sticker that is truly yours.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Preview */}
          <div className="sticky top-32 space-y-8">
            <div className="bg-gray-100 rounded-[2rem] aspect-video flex items-center justify-center p-12 relative overflow-hidden border-4 border-white shadow-2xl">
              {/* Wall Texture Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/white-wall-2.png)' }} />
              
              <motion.div 
                key={`${name}-${font}-${color}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ 
                  color: color, 
                  fontFamily: fonts.find(f => f.id === font)?.family,
                  textShadow: color === '#FFFFFF' ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-center break-all drop-shadow-lg"
              >
                {name || 'Your Name'}
              </motion.div>

              <div className="absolute bottom-6 left-6 flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                <Maximize size={12} />
                <span>Live Preview</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Premium Vinyl</h4>
                  <p className="text-xs text-gray-400">High-grade waterproof material</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Easy Removal</h4>
                  <p className="text-xs text-gray-400">Leaves zero residue on walls</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Customization Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Name Input */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest">
                  <Type size={18} className="text-brand-gold" />
                  <span>Enter Name / Text</span>
                </label>
                <input 
                  type="text" 
                  maxLength={20}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 text-xl font-bold focus:ring-2 focus:ring-brand-gold"
                  placeholder="e.g. The Sharmas"
                />
                <p className="text-xs text-gray-400 text-right">{name.length}/20 characters</p>
              </div>

              {/* Font Selection */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest">
                  <Maximize size={18} className="text-brand-gold" />
                  <span>Select Font Style</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {fonts.map(f => (
                    <button 
                      key={f.id}
                      type="button"
                      onClick={() => setFont(f.id)}
                      className={cn(
                        "p-4 rounded-xl border-2 text-left transition-all",
                        font === f.id ? "border-brand-black bg-brand-black text-white" : "border-gray-50 hover:border-brand-gold"
                      )}
                    >
                      <span className="block text-xs text-gray-400 mb-1">{f.name}</span>
                      <span style={{ fontFamily: f.family }} className="text-lg">Abc</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest">
                  <Palette size={18} className="text-brand-gold" />
                  <span>Select Color</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {colors.map(c => (
                    <button 
                      key={c.id}
                      type="button"
                      onClick={() => setColor(c.hex)}
                      className={cn(
                        "w-12 h-12 rounded-full border-4 transition-all flex items-center justify-center",
                        color === c.hex ? "border-brand-gold scale-110" : "border-transparent"
                      )}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {color === c.hex && <CheckCircle2 size={20} className={c.id === 'white' ? 'text-black' : 'text-white'} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest">
                  <Maximize size={18} className="text-brand-gold" />
                  <span>Select Size</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {sizes.map(s => (
                    <button 
                      key={s.id}
                      type="button"
                      onClick={() => setSize(s.id)}
                      className={cn(
                        "p-4 rounded-xl border-2 text-center transition-all",
                        size === s.id ? "border-brand-black bg-brand-black text-white" : "border-gray-50 hover:border-brand-gold"
                      )}
                    >
                      <span className="block font-bold mb-1">{s.id}</span>
                      <span className="block text-[10px] opacity-60">{s.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Upload Option */}
              <div className="p-6 bg-brand-gold-light rounded-2xl border border-dashed border-brand-gold/50 text-center space-y-3">
                <Upload size={24} className="mx-auto text-brand-gold" />
                <h4 className="font-bold text-sm">Have a specific design?</h4>
                <p className="text-xs text-gray-500">Upload your own font or logo and we'll make it for you.</p>
                <button type="button" className="text-brand-gold text-xs font-bold underline">Upload Design</button>
              </div>

              {/* Summary & Submit */}
              <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 uppercase font-bold block">Estimated Price</span>
                  <span className="text-3xl font-bold">₹{currentPrice}</span>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="bg-brand-black text-white px-10 py-5 rounded-2xl font-bold flex items-center space-x-3 hover:bg-brand-gold transition-all shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>ADDING...</span>
                  ) : (
                    <>
                      <ShoppingBag size={20} />
                      <span>ADD TO CART</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomName;
