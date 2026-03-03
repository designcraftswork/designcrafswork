import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart, Share2, ShieldCheck, Truck, RotateCcw, Plus, Minus, CheckCircle2, Play } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop();
  
  const product = useMemo(() => products.find(p => p.id === id), [id, products]);
  const relatedProducts = useMemo(() => 
    products.filter(p => p.category === product?.category && p.id !== id).slice(0, 4),
    [product, id, products]
  );

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) return <div className="pt-40 text-center">Product not found</div>;

  const isWishlisted = isInWishlist(product.id);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 uppercase tracking-widest mb-8">
          <Link to="/" className="hover:text-brand-gold">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-gold">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-brand-gold">{product.category}</Link>
          <span>/</span>
          <span className="text-brand-black font-bold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 group">
              <img 
                src={product.images[selectedImage] || product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                {discount}% OFF
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "aspect-square rounded-xl overflow-hidden border-2 transition-all",
                    selectedImage === idx ? "border-brand-gold" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Installation Video Placeholder */}
            <div className="mt-12 p-8 bg-brand-black rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute inset-0 opacity-30">
                <img src={product.images[0]} alt="Video BG" className="w-full h-full object-cover blur-sm" />
              </div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-brand-black group-hover:scale-110 transition-transform cursor-pointer">
                  <Play size={24} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold">See it in action</h4>
                  <p className="text-sm text-gray-400">Watch the 60-second installation guide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-brand-gold uppercase tracking-[0.2em] font-bold text-xs">{product.category}</span>
                <div className="flex items-center space-x-1">
                  <div className="flex text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-500">({product.reviews} Reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-brand-black">₹{product.price}</span>
                <span className="text-xl text-gray-400 line-through">₹{product.mrp}</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-lg">SAVE ₹{product.mrp - product.price}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-6 pt-4 border-t border-gray-100">
              {/* Size Selector */}
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-bold uppercase tracking-widest">Select Size</span>
                  <button className="text-xs text-brand-gold font-bold underline">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "px-6 py-2 rounded-xl border-2 font-bold text-sm transition-all",
                        selectedSize === size ? "border-brand-black bg-brand-black text-white" : "border-gray-100 hover:border-brand-gold"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div>
                <span className="text-sm font-bold uppercase tracking-widest block mb-3">Select Color</span>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "px-6 py-2 rounded-xl border-2 font-bold text-sm transition-all",
                        selectedColor === color ? "border-brand-black bg-brand-black text-white" : "border-gray-100 hover:border-brand-gold"
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <span className="text-sm font-bold uppercase tracking-widest block mb-3">Quantity</span>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-50"><Minus size={18} /></button>
                    <span className="px-6 font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-50"><Plus size={18} /></button>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">Only 12 items left in stock!</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => addToCart(product, quantity, selectedSize, selectedColor)}
                className="flex-1 bg-brand-black text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-brand-gold transition-all shadow-xl"
              >
                <ShoppingBag size={20} />
                <span>ADD TO CART</span>
              </button>
              <button 
                onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
                className={cn(
                  "px-8 py-5 rounded-2xl border-2 font-bold flex items-center justify-center transition-all",
                  isWishlisted ? "bg-red-500 border-red-500 text-white" : "border-gray-100 hover:border-brand-gold"
                )}
              >
                <Heart size={24} fill={isWishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            <button className="w-full bg-brand-gold text-brand-black py-5 rounded-2xl font-bold hover:bg-brand-black hover:text-white transition-all">
              BUY IT NOW
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-8 border-y border-gray-100">
              <div className="flex flex-col items-center text-center space-y-2">
                <Truck size={24} className="text-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Free Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <RotateCcw size={24} className="text-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">7 Days Return</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <ShieldCheck size={24} className="text-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure Payment</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2 text-green-600 font-bold">
                <CheckCircle2 size={18} />
                <span>In Stock, ready to ship</span>
              </div>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-brand-gold transition-colors font-bold">
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-24">
          <div className="flex border-b border-gray-100 overflow-x-auto">
            {['description', 'size-guide', 'installation', 'shipping'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-4 font-bold text-sm uppercase tracking-widest whitespace-nowrap border-b-2 transition-all",
                  activeTab === tab ? "border-brand-gold text-brand-gold" : "border-transparent text-gray-400 hover:text-brand-black"
                )}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>
          <div className="py-12 max-w-4xl">
            {activeTab === 'description' && (
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>Elevate your living space with our premium {product.name}. Designed with meticulous attention to detail, this wall sticker brings a touch of elegance and personality to any room.</p>
                <h4 className="font-serif text-xl font-bold text-brand-black">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>High-quality waterproof vinyl material</li>
                  <li>Matte finish for a professional painted look</li>
                  <li>Easy to apply and remove without residue</li>
                  <li>Long-lasting color vibrancy (5+ years)</li>
                  <li>Suitable for all smooth surfaces (walls, glass, wood)</li>
                </ul>
              </div>
            )}
            {activeTab === 'size-guide' && (
              <div className="space-y-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border p-4 text-left font-bold uppercase text-xs">Size</th>
                      <th className="border p-4 text-left font-bold uppercase text-xs">Dimensions (Width x Height)</th>
                      <th className="border p-4 text-left font-bold uppercase text-xs">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-4 text-sm">Small</td>
                      <td className="border p-4 text-sm">12" x 12" (30cm x 30cm)</td>
                      <td className="border p-4 text-sm">Laptops, Small Cabinets, Mirrors</td>
                    </tr>
                    <tr>
                      <td className="border p-4 text-sm">Medium</td>
                      <td className="border p-4 text-sm">24" x 24" (60cm x 60cm)</td>
                      <td className="border p-4 text-sm">Bedroom Walls, Office Desks</td>
                    </tr>
                    <tr>
                      <td className="border p-4 text-sm">Large</td>
                      <td className="border p-4 text-sm">48" x 48" (120cm x 120cm)</td>
                      <td className="border p-4 text-sm">Living Room Main Walls, Hallways</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'installation' && (
              <div className="space-y-6 text-gray-600">
                <h4 className="font-serif text-xl font-bold text-brand-black">How to Apply:</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li><strong>Clean:</strong> Wipe the surface with a dry cloth to remove dust and grease.</li>
                  <li><strong>Plan:</strong> Use masking tape to temporarily position the sticker on the wall.</li>
                  <li><strong>Peel:</strong> Slowly peel off the backing paper from one corner.</li>
                  <li><strong>Stick:</strong> Apply the sticker to the surface, smoothing it out with a credit card or squeegee to remove air bubbles.</li>
                  <li><strong>Finish:</strong> Remove the top transfer tape (if applicable) and enjoy your new wall!</li>
                </ol>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="space-y-6 text-gray-600">
                <p>We offer fast and reliable shipping across India.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Processing Time:</strong> 1-2 business days</li>
                  <li><strong>Delivery Time:</strong> 3-7 business days depending on location</li>
                  <li><strong>Shipping Cost:</strong> FREE on orders above ₹999. Flat ₹99 for smaller orders.</li>
                  <li><strong>Returns:</strong> 7-day easy return policy for unused products in original packaging.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <h2 className="text-3xl font-serif font-bold mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
