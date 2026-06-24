import type { Metadata } from 'next';
import { Truck, Shield, Globe, FileText, Users, Package, Clock, CheckCircle, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Export Services - Comprehensive Agriculture Export Solutions',
  description: 'End-to-end export services for agriculture products including product sourcing, quality assurance, export logistics, documentation support, and customer support.',
  keywords: ['agriculture export services', 'export logistics', 'export documentation', 'customs clearance', 'quality assurance', 'product sourcing India'],
  alternates: { canonical: 'https://senthurvelavantraders.com/services' },
};

const services = [
  {
    icon: Package,
    title: 'Product Sourcing',
    description: 'Direct sourcing from verified farmers across Tamil Nadu, ensuring premium quality and competitive pricing.',
    features: ['Verified farmer network', 'Quality inspection at source', 'Competitive pricing', 'Seasonal crop planning'],
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Comprehensive quality control from procurement to export, meeting international standards.',
    features: ['Laboratory testing', 'Pesticide residue testing', 'Microbiological analysis', 'Quality certification'],
  },
  {
    icon: Truck,
    title: 'Export Logistics',
    description: 'End-to-end logistics including packaging, documentation, customs clearance, and global shipping.',
    features: ['Custom packaging solutions', 'Container loading supervision', 'Shipping documentation', 'Insurance coverage'],
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    description: 'Complete export documentation services including certificates, permits, and customs compliance.',
    features: ['Phytosanitary certificates', 'Certificate of origin', 'Health certificates', 'Customs documentation'],
  },
  {
    icon: Globe,
    title: 'Market Intelligence',
    description: 'Expert guidance on international markets, pricing trends, and regulatory requirements.',
    features: ['Market research', 'Competitor analysis', 'Pricing strategy', 'Regulatory updates'],
  },
  {
    icon: Users,
    title: 'Customer Support',
    description: 'Dedicated support throughout the export process, from inquiry to post-delivery.',
    features: ['Quick inquiry response', 'Order tracking', 'Technical assistance', 'After-sales support'],
  },
];

const processSteps = [
  { step: '01', title: 'Inquiry', desc: 'Discuss requirements, specifications, and export destination' },
  { step: '02', title: 'Selection & Sampling', desc: 'Product recommendation with samples for evaluation' },
  { step: '03', title: 'Order & Pricing', desc: 'Competitive pricing with agreed terms and conditions' },
  { step: '04', title: 'Processing & QC', desc: 'Sourcing, processing, and quality testing' },
  { step: '05', title: 'Packaging & Docs', desc: 'Custom packaging and export documentation' },
  { step: '06', title: 'Ship & Deliver', desc: 'Customs clearance, shipping, and follow-up' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero — clean white */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
            <span className="w-8 h-[2px] bg-primary-500" />
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 max-w-3xl leading-tight">
            End-to-End <span className="text-primary-500">Export Solutions</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            From sourcing premium agriculture products to delivering them at your doorstep — we handle every step of the export process.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
              <span className="w-8 h-[2px] bg-primary-500" />
              What We Offer
              <span className="w-8 h-[2px] bg-primary-500" />
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Comprehensive Export Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-500/20 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors">
                  <service.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
              <span className="w-8 h-[2px] bg-primary-500" />
              How It Works
              <span className="w-8 h-[2px] bg-primary-500" />
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              From Inquiry to Delivery, <span className="text-primary-500">in 6 Steps</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item, i) => (
              <div key={i} className="relative p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary-500/20 hover:shadow-md transition-all group">
                <div className="text-3xl font-extrabold text-primary-500/20 group-hover:text-primary-500/40 transition-colors mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
                <span className="w-8 h-[2px] bg-primary-500" />
                Why Us
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Why Choose Our Export Services?
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Experience the difference of working with a dedicated export partner committed to quality, reliability, and your success.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: 'Fast Turnaround', desc: 'Quick response and efficient processing for on-time delivery' },
                { icon: Shield, title: 'Quality Guarantee', desc: 'Rigorous testing to meet international standards' },
                { icon: Globe, title: 'Global Network', desc: 'Reliable delivery to any destination worldwide' },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-xl bg-white border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gray-900" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/15 rounded-full blur-[80px]" />
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Start Exporting?</h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Contact us to discuss your export requirements. From turmeric to mango pulp — we deliver quality worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                  <Phone className="w-5 h-5" />
                  Get Started
                </a>
                <a href="/about" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors border border-white/20">
                  <Mail className="w-5 h-5" />
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
