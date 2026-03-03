import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useShop } from '../context/ShopContext';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop();
  const isWishlisted = isInWishlist(product.id);

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-brand overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isBestSeller && (
            <span className="bg-brand-black text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="bg-brand-gold text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              New Arrival
            </span>
          )}
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            {discount}% OFF
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <button 
            onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
            className={cn(
              "p-2 rounded-full shadow-md transition-colors",
              isWishlisted ? "bg-red-500 text-white" : "bg-white text-brand-black hover:bg-brand-gold hover:text-white"
            )}
          >
            <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={() => addToCart(product, 1, product.sizes[0], product.colors[0])}
            className="w-full bg-brand-black text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 hover:bg-brand-gold transition-colors shadow-lg"
          >
            <ShoppingBag size={18} />
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{product.category}</span>
          <div className="flex items-center space-x-1">
            <Star size={12} className="text-brand-gold fill-brand-gold" />
            <span className="text-xs font-bold">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-bold line-clamp-1 group-hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center space-x-2">
          <span className="text-xl font-bold text-brand-black">₹{product.price}</span>
          <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
