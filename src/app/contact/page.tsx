import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch for Agriculture Export Inquiries',
  description: 'Contact Senthur Velavan Traders Pvt Ltd for premium agriculture product export inquiries. Phone: +91 70105 01482, +91 63690 54818. Email: senthurvelavantraders16@gmail.com.',
  keywords: ['contact agriculture exporter India', 'agriculture export inquiry', 'Coimbatore exporter contact', 'Senthur Velavan Traders contact'],
  alternates: { canonical: 'https://senthurvelavantraders.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — clean white */}
      <section className="relative bg-white pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
            <span className="w-8 h-[2px] bg-primary-500" />
            Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 max-w-3xl leading-tight">
            Let&apos;s Start a <span className="text-primary-500">Conversation</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Get in touch for inquiries about premium turmeric and mango pulp exports, pricing, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Phone, title: 'Phone', value: '+91 70105 01482', sub: '+91 63690 54818', href: 'tel:+917010501482' },
              { icon: Mail, title: 'Email', value: 'senthurvelavantraders16@gmail.com', href: 'mailto:senthurvelavantraders16@gmail.com' },
              { icon: MapPin, title: 'Office', value: '2/108B, Velliankadu, Mettuppalayam', sub: 'Coimbatore-641104, Tamil Nadu' },
              { icon: Clock, title: 'Hours', value: 'Mon - Sat: 9 AM - 6 PM', sub: 'Sunday: Closed' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-500/20 hover:shadow-md transition-all group">
                <div className="w-11 h-11 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                  <item.icon className="w-5 h-5 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-sm text-primary-500 hover:underline block">{item.value}</a>
                ) : (
                  <p className="text-sm text-gray-600">{item.value}</p>
                )}
                {item.sub && <p className="text-xs text-gray-400 mt-1">{item.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
                <span className="w-8 h-[2px] bg-primary-500" />
                Send a Message
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">We&apos;d love to hear from you</h2>
              <ContactForm />
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 space-y-8">
              {/* Company details */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Company Information</h3>
                <div className="bg-gray-50 rounded-xl border border-gray-100 divide-y divide-gray-100">
                  {[
                    { label: 'Company', value: 'Senthur Velavan Traders Pvt Ltd' },
                    { label: 'GST', value: '33ABRCS5820R1ZJ' },
                    { label: 'CIN', value: 'U46305TZ2025PTC036358' },
                    { label: 'Established', value: '2025' },
                    { label: 'Type', value: 'Private Limited Company' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center px-5 py-3">
                      <span className="text-sm text-gray-500">{item.label}</span>
                      <span className="text-sm font-medium text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Coimbatore, Tamil Nadu, India</p>
                      <p className="text-xs text-gray-500 mt-1">2/108B, Velliankadu, Mettuppalayam, Coimbatore-641104</p>
                      <p className="text-xs text-gray-400 mt-1">11.0168&deg;N, 76.9558&deg;E</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
              <span className="w-8 h-[2px] bg-primary-500" />
              FAQ
              <span className="w-8 h-[2px] bg-primary-500" />
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'What are your minimum order quantities?', a: 'For most spices and turmeric, we accept orders from 100kg. For mango pulp, minimum orders start from 500kg. Contact us for specific requirements.' },
              { q: 'Do you provide samples for testing?', a: 'Yes, we provide product samples for quality testing and evaluation. Sample costs and shipping charges apply, adjusted against confirmed orders.' },
              { q: 'What are your payment terms?', a: 'We accept LC (Letter of Credit), TT (Telegraphic Transfer), and DP (Documents Against Payment). Credit terms available for established customers.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
