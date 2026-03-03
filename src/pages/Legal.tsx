import React from 'react';

const Legal = ({ title }: { title: string }) => {
  return (
    <div className="pt-24 pb-24">
      <div className="bg-brand-gold-light py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{title}</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Last Updated: January 2026
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-brand-black">1. Introduction</h2>
            <p>Welcome to DesignCraftsWork. We value your trust and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you visit our website or make a purchase.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-brand-black">2. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact our support team. This may include your name, email address, shipping address, and payment information.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-brand-black">3. How We Use Your Information</h2>
            <p>We use the information we collect to process your orders, communicate with you about your account, and improve our services. We may also use your information to send you promotional offers and updates, which you can opt-out of at any time.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-brand-black">4. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data is encrypted and transmitted via Secure Socket Layer (SSL) technology.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-brand-black">5. Contact Us</h2>
            <p>If you have any questions about this policy, please contact us at legal@designcraftswork.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
