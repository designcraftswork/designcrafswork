import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, Package, Users, Zap } from 'lucide-react';

const BulkOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '50-100',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our bulk order specialist will contact you within 24 hours.');
  };

  const pricingTiers = [
    { qty: '10 - 50 Units', discount: '15% OFF', bestFor: 'Small Boutiques' },
    { qty: '51 - 200 Units', discount: '25% OFF', bestFor: 'Corporate Gifting' },
    { qty: '201 - 500 Units', discount: '40% OFF', bestFor: 'Real Estate Projects' },
    { qty: '500+ Units', discount: 'Custom Pricing', bestFor: 'Wholesale / Export' }
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="bg-brand-black text-white py-24 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop" alt="Pattern" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-brand-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block">B2B & Wholesale</span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6">Bulk Orders & <br /> <span className="text-brand-gold">Partnerships</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Looking for corporate gifts, interior projects, or wholesale? We offer premium quality wall stickers at competitive bulk prices.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 text-center space-y-6">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto text-brand-gold">
              <Zap size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold">Fast Turnaround</h3>
            <p className="text-gray-500">Priority production for bulk orders. Get your designs delivered in record time.</p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 text-center space-y-6">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto text-brand-gold">
              <Users size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold">Dedicated Manager</h3>
            <p className="text-gray-500">A single point of contact to handle your customization and logistics needs.</p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 text-center space-y-6">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto text-brand-gold">
              <Package size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold">Custom Packaging</h3>
            <p className="text-gray-500">White-label or custom branded packaging options available for your brand.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Pricing Table */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Bulk Pricing Tiers</h2>
              <div className="space-y-4">
                {pricingTiers.map((tier, idx) => (
                  <div key={idx} className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-brand-gold transition-colors">
                    <div>
                      <h4 className="font-bold text-lg">{tier.qty}</h4>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">{tier.bestFor}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-brand-gold">{tier.discount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-gold-light p-8 rounded-[2rem] border border-brand-gold/20">
              <h3 className="font-serif text-2xl font-bold mb-6">Why Partner With Us?</h3>
              <ul className="space-y-4">
                {[
                  "Highest quality 3M/Avery vinyl materials",
                  "GST Invoicing for business tax benefits",
                  "Custom design assistance from our experts",
                  "Worldwide shipping capabilities",
                  "Eco-friendly, non-toxic inks"
                ].map(item => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-brand-gold" size={20} />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-6 p-8 bg-gray-50 rounded-[2rem]">
              <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle size={32} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Prefer WhatsApp?</h4>
                <p className="text-gray-500 mb-2">Chat directly with our B2B head.</p>
                <a href="https://wa.me/919876543210" className="text-brand-gold font-bold underline">Message +91 98765 43210</a>
              </div>
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-serif font-bold mb-8">Get a Custom Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-gold"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-gold"
                    placeholder="john@company.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-gold"
                    placeholder="+91 98765 43210"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-gold"
                    placeholder="Optional"
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Estimated Quantity</label>
                <select 
                  className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-gold outline-none"
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                >
                  <option value="10-50">10 - 50 Units</option>
                  <option value="50-100">50 - 100 Units</option>
                  <option value="100-500">100 - 500 Units</option>
                  <option value="500+">500+ Units</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message / Requirements</label>
                <textarea 
                  rows={4}
                  className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-gold"
                  placeholder="Tell us about your project..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-black text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-brand-gold transition-all shadow-xl"
              >
                <Send size={20} />
                <span>SEND INQUIRY</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkOrder;
