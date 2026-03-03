import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you shortly.');
  };

  return (
    <div className="pt-24 pb-24">
      <div className="bg-brand-gold-light py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have a question about our products or need help with an order? Our team is here to help you create beautiful walls.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Info Cards */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 text-center space-y-6 hover:border-brand-gold transition-colors">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto text-brand-gold">
              <Phone size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold">Call Us</h3>
            <p className="text-gray-500">Mon-Sat, 10am to 7pm</p>
            <p className="text-xl font-bold">+91 98765 43210</p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 text-center space-y-6 hover:border-brand-gold transition-colors">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto text-brand-gold">
              <Mail size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold">Email Us</h3>
            <p className="text-gray-500">We reply within 24 hours</p>
            <p className="text-xl font-bold">hello@designcraftswork.com</p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 text-center space-y-6 hover:border-brand-gold transition-colors">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto text-brand-gold">
              <MapPin size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold">Our Studio</h3>
            <p className="text-gray-500">Visit us for custom designs</p>
            <p className="text-xl font-bold">Mumbai, Maharashtra, India</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-serif font-bold mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Name</label>
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
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-gold"
                  placeholder="Order Inquiry / Custom Design"
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                <textarea 
                  rows={5}
                  required
                  className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-gold"
                  placeholder="How can we help you?"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-black text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-brand-gold transition-all shadow-xl"
              >
                <Send size={20} />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>

          {/* Additional Info & Map */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries. International shipping rates apply." },
                  { q: "Can I customize the size of any sticker?", a: "Absolutely! Most of our designs can be resized. Contact us for custom dimensions." },
                  { q: "What if my sticker arrives damaged?", a: "We offer a 100% replacement guarantee for any transit damage. Just send us a photo." }
                ].map((faq, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-bold text-brand-gold">{faq.q}</h4>
                    <p className="text-gray-500 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-gold-light p-8 rounded-[2rem] border border-brand-gold/20 space-y-6">
              <h3 className="font-serif text-2xl font-bold">Connect on WhatsApp</h3>
              <p className="text-gray-600">Get instant support and exclusive custom design previews on WhatsApp.</p>
              <a 
                href="https://wa.me/919876543210" 
                className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle size={24} fill="currentColor" />
                <span>CHAT WITH US</span>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-200 relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 space-y-4">
                <MapPin size={48} />
                <p className="font-bold uppercase tracking-widest text-xs">Google Maps Placeholder</p>
              </div>
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
