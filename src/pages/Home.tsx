import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Instagram, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import CountdownTimer from '../components/CountdownTimer';

const Home = () => {
  const { products, categories } = useProducts();
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 8);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1616486341351-792a44a66a01?q=80&w=1920&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Premium Wall Decor</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Transform Your Walls <br /> <span className="text-brand-gold italic">In Minutes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg">
              Peel. Stick. Done. Elevate your home with our premium, waterproof, and damage-free wall stickers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/shop" 
                className="bg-brand-gold text-brand-black px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-white transition-all shadow-xl"
              >
                <span>SHOP NOW</span>
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/custom-name" 
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-white/20 transition-all"
              >
                <span>CUSTOM NAME</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold" />
          </div>
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-brand-gold-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-gold uppercase tracking-widest font-bold text-xs mb-2 block">Browse Collections</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Featured Categories</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {categories.map((cat, idx) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-brand shadow-lg"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-white text-xl md:text-2xl font-serif font-bold mb-2">{cat.name}</h3>
                  <Link 
                    to={`/shop?category=${cat.id}`}
                    className="text-brand-gold text-sm font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
                  >
                    <span>EXPLORE</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-brand-gold uppercase tracking-widest font-bold text-xs mb-2 block">Customer Favorites</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Best Sellers</h2>
            </div>
            <Link to="/shop" className="text-brand-black font-bold flex items-center space-x-2 hover:text-brand-gold transition-colors">
              <span>VIEW ALL PRODUCTS</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 bg-brand-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                    <img src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800&auto=format&fit=crop" alt="Before" className="w-full h-full object-cover grayscale" />
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Before</div>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border-2 border-brand-gold shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    <img src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800&auto=format&fit=crop" alt="After" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-brand-gold px-3 py-1 rounded-full text-[10px] text-black font-bold uppercase tracking-widest">After</div>
                  </div>
                </div>
              </div>
              {/* Decorative Gold Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-brand-gold/20 rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-brand-gold/20 rounded-full" />
            </div>

            <div className="space-y-8">
              <span className="text-brand-gold uppercase tracking-widest font-bold text-xs block">The Transformation</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">Wall Magic <br /> <span className="text-brand-gold">In Seconds</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Why spend thousands on paint or wallpaper? Our premium vinyl stickers offer a high-end look at a fraction of the cost. Perfect for renters and home owners alike.
              </p>
              <ul className="space-y-4">
                {[
                  "No professional help needed",
                  "Waterproof & Washable",
                  "Removes without leaving marks",
                  "Lasts up to 5+ years"
                ].map(item => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-brand-gold" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button className="bg-white text-brand-black px-10 py-4 rounded-xl font-bold flex items-center space-x-2 hover:bg-brand-gold transition-all">
                  <Play size={20} fill="currentColor" />
                  <span>WATCH INSTALLATION</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {[
              { title: "Waterproof Vinyl", desc: "Spill-proof and easy to clean with a damp cloth." },
              { title: "No Wall Damage", desc: "Special adhesive that leaves zero residue upon removal." },
              { title: "Easy Installation", desc: "Simple peel and stick application. No tools required." },
              { title: "Made in India", desc: "Proudly designed and manufactured in India." },
              { title: "Premium Quality", desc: "High-resolution prints with vibrant, long-lasting colors." }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-16 h-16 bg-brand-gold-light rounded-2xl flex items-center justify-center mx-auto text-brand-gold">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Sale Banner */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative rounded-[2rem] overflow-hidden bg-brand-blue text-white p-8 md:p-16">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop" alt="Pattern" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="bg-brand-gold text-brand-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Limited Time Offer</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">Grand Festival Sale <br /> <span className="text-brand-gold">Flat 50% OFF</span></h2>
                <p className="text-blue-100 text-lg">Celebrate the season with beautiful walls. Use code: <span className="font-bold text-white">FESTIVE50</span></p>
                <Link to="/shop" className="inline-flex bg-white text-brand-blue px-10 py-4 rounded-xl font-bold hover:bg-brand-gold hover:text-white transition-all shadow-xl">
                  SHOP THE SALE
                </Link>
              </div>

              <div className="flex flex-col items-center lg:items-end space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] font-bold text-brand-gold">Sale Ends In</p>
                <CountdownTimer targetDate="2026-04-01T00:00:00" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-gold uppercase tracking-widest font-bold text-xs mb-2 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">What Our Tribe Says</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", role: "Interior Designer", text: "The quality of these stickers is unmatched. I've used them in multiple projects and my clients love the spiritual collection." },
              { name: "Rahul Verma", role: "Home Owner", text: "Installation was so easy! My kids room looks like a professional mural now. Highly recommend the 3D illusion stickers." },
              { name: "Ananya Iyer", role: "Renter", text: "As a renter, I was worried about my security deposit. These stickers came off cleanly when I moved. Bought more for my new place!" }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="flex text-brand-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold-light flex items-center justify-center font-bold text-brand-gold">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.role}</p>
                  </div>
                </div>
                <div className="absolute top-8 right-8 text-brand-gold/10">
                  <Instagram size={48} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-gold uppercase tracking-widest font-bold text-xs mb-2 block">Follow Us @DesignCraftsWork</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Share Your Wall Magic</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-xl">
                <img 
                  src={`https://picsum.photos/seed/wall${i}/800/800`} 
                  alt="Instagram Post" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-gold/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
