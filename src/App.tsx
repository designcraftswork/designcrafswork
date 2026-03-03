import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CustomName from './pages/CustomName';
import BulkOrder from './pages/BulkOrder';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Admin from './pages/Admin';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isAdminPage && (
        <Navbar 
          onOpenCart={() => setIsCartOpen(true)} 
          onOpenWishlist={() => setIsWishlistOpen(true)} 
        />
      )}
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/custom-name" element={<CustomName />} />
          <Route path="/bulk-order" element={<BulkOrder />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Legal title="Privacy Policy" />} />
          <Route path="/shipping-policy" element={<Legal title="Shipping Policy" />} />
          <Route path="/return-policy" element={<Legal title="Return & Refund Policy" />} />
          <Route path="/terms" element={<Legal title="Terms & Conditions" />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {!isAdminPage && <Footer />}
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {/* Wishlist could use a similar drawer or page, for now we use cart drawer as placeholder or just alert */}
      
      {!isAdminPage && <WhatsAppButton />}

      {/* Mobile Sticky Add to Cart - Only on Product Page */}
      {location.pathname.startsWith('/product/') && (
        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t p-4 z-40 flex items-center space-x-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
          <div className="flex-1">
            <p className="text-[10px] uppercase font-bold text-gray-400">Total Price</p>
            <p className="text-xl font-bold">₹499</p>
          </div>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="bg-brand-black text-white px-8 py-3 rounded-xl font-bold text-sm"
          >
            ADD TO CART
          </button>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ProductProvider>
      <ShopProvider>
        <Router>
          <AppContent />
        </Router>
      </ShopProvider>
    </ProductProvider>
  );
}
