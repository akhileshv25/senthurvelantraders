import type { Metadata } from 'next';
import { Users, Target, Shield, Globe, Leaf, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Premium Agriculture Export Company from Tamil Nadu',
  description: 'Senthur Velavan Traders Pvt Ltd — exporting premium turmeric and mango pulp from Tamil Nadu, India. Direct farm sourcing, strict quality control, competitive pricing.',
  keywords: ['agriculture export company India', 'Tamil Nadu agriculture exporter', 'turmeric export', 'mango pulp export', 'Senthur Velavan Traders'],
  alternates: { canonical: 'https://senthurvelavantraders.com/about' },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero — clean white with accent */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
            <span className="w-8 h-[2px] bg-primary-500" />
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 max-w-3xl leading-tight">
            Bridging Indian Farms to <span className="text-primary-500">Global Markets</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Senthur Velavan Traders Pvt Ltd exports premium turmeric and mango pulp from Tamil Nadu, India. Founded in 2025 with a commitment to quality and direct farm sourcing.
          </p>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Story */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  Based in the heart of Tamil Nadu&apos;s agricultural belt, we source premium turmeric and mango pulp directly from verified farmers — ensuring quality from farm to shipment.
                </p>
                <p>
                  We work with trusted processing partners to deliver export-grade products that meet international standards. Our focus is simple: quality products, competitive pricing, reliable delivery.
                </p>
              </div>

              {/* Key numbers */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
                {[
                  { value: '2025', label: 'Founded' },
                  { value: 'Global', label: 'Export Reach' },
                  { value: '100%', label: 'Quality Focus' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-extrabold text-primary-500">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why choose us */}
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Why Choose Us</h2>
              {[
                { icon: Users, title: 'Direct Farm Sourcing', desc: 'Products procured directly from verified farmers across Tamil Nadu' },
                { icon: Shield, title: 'Quality at Every Stage', desc: 'Strict quality control from procurement through processing to export' },
                { icon: Globe, title: 'Export Documentation', desc: 'Complete documentation support for seamless international trade' },
                { icon: Target, title: 'Competitive Pricing', desc: 'Premium quality products at competitive market pricing' },
                { icon: Leaf, title: 'Sustainable Practices', desc: 'Supporting sustainable agriculture and farming communities' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary-500/20 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors">
                    <item.icon className="w-5 h-5 text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-0.5">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision — side by side cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
              <span className="w-8 h-[2px] bg-primary-500" />
              Our Purpose
              <span className="w-8 h-[2px] bg-primary-500" />
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative p-8 md:p-10 rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the preferred partner for premium agriculture products export, delivering exceptional quality while creating value for farmers and international buyers alike.
                </p>
              </div>
            </div>
            <div className="relative p-8 md:p-10 rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-5">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become a globally recognized exporter of Indian agriculture products, setting standards in quality and reliability while contributing to the growth of farming communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/farm.webp')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gray-900/80" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/15 rounded-full blur-[80px]" />
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Partner With Us?</h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Connect with us for premium turmeric and mango pulp at competitive export pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                  <Phone className="w-5 h-5" />
                  Get In Touch
                </a>
                <a href="/services" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors border border-white/20">
                  <Mail className="w-5 h-5" />
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
