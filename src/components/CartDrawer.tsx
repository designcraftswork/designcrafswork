import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, Trash2, Plus, Minus, ArrowRight, Gift } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useShop();
  const freeShippingThreshold = 999;
  const progress = Math.min((cartTotal / freeShippingThreshold) * 100, 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b">
              <div className="flex items-center space-x-2">
                <ShoppingBag size={24} className="text-brand-gold" />
                <h2 className="text-xl font-serif font-bold">Your Shopping Bag</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {/* Free Shipping Progress */}
              <div className="mb-8 p-4 bg-brand-gold-light rounded-2xl border border-brand-gold/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    {cartTotal >= freeShippingThreshold 
                      ? "🎉 You've unlocked FREE Shipping!" 
                      : `Add ₹${freeShippingThreshold - cartTotal} more for FREE Shipping`}
                  </span>
                  <Gift size={18} className="text-brand-gold" />
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-brand-gold"
                  />
                </div>
              </div>

              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <ShoppingBag size={40} className="text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Your bag is empty</h3>
                    <p className="text-gray-500">Looks like you haven't added anything yet.</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="bg-brand-black text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-gold transition-colors"
                  >
                    START SHOPPING
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex space-x-4 group">
                      <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                        <img 
                          src={item.images[0]} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-bold text-sm line-clamp-1">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Size: {item.selectedSize} | Color: {item.selectedColor}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border rounded-lg">
                            <button 
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                              className="p-1 hover:bg-gray-50"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 text-sm font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                              className="p-1 hover:bg-gray-50"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="font-bold">₹{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Shipping</span>
                    <span>{cartTotal >= freeShippingThreshold ? 'FREE' : '₹99'}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>₹{cartTotal >= freeShippingThreshold ? cartTotal : cartTotal + 99}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-brand-black text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-gold transition-colors shadow-lg">
                    <span>PROCEED TO CHECKOUT</span>
                    <ArrowRight size={18} />
                  </button>
                  <div className="flex items-center justify-center space-x-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/UPI-Logo.png/640px-UPI-Logo.png" alt="UPI" className="h-4 opacity-50" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-3 opacity-50" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-4 opacity-50" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
