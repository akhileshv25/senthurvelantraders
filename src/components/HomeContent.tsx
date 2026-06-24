'use client';

import { motion } from 'framer-motion';
import HeroCarousel from './HeroCarousel';
import { Truck, Shield, Globe, Award, Users, Phone, Mail } from 'lucide-react';

const featuredProducts = [
  {
    name: 'Premium Turmeric',
    subtitle: 'Fingers & Powder',
    description: 'High-quality turmeric fingers and powder, rich in curcumin content, sourced directly from verified farms in Tamil Nadu.',
    specs: [
      { label: 'Curcumin', value: '5-7%' },
      { label: 'Moisture', value: '<12%' },
      { label: 'Grade', value: 'Export A+' },
    ],
    details: ['Organic Certified', 'Direct Farm Sourcing', 'Export Quality'],
    image: '/Product/turmaric.png',
    accentFrom: '#EA580C',
    accentTo: '#D97706',
    bgColor: '#FFF7ED',
  },
  {
    name: 'Pure Mango Pulp & Concentrates',
    subtitle: 'Alphonso & Totapuri Varieties',
    description: '100% natural mango pulp and concentrates with no preservatives. Premium processing for food & beverage industries worldwide.',
    useCases: ['Beverages', 'Smoothies', 'Ice Cream', 'Yogurt', 'Bakery', 'Baby Food'],
    specs: [
      { label: 'Natural', value: '100%' },
      { label: 'Shelf Life', value: '16-18mo' },
      { label: 'Varieties', value: '2 Types' },
    ],
    details: [],
    packaging: [
      { image: '/packaging/ots-can-3kg.png', size: '3.1 kg', type: 'OTS Can', desc: 'Retail & food service use' },
      { image: '/packaging/ots-can-850g.png', size: '850 gm', type: 'OTS Can', desc: 'Small retail packing' },
      { image: '/packaging/aseptic-box-20kg.png', size: '20 kg', type: 'Aseptic Bag in Box', desc: 'Mid-size industrial use' },
      { image: '/packaging/aseptic-drum-215kg.png', size: '215/228 kg', type: 'Aseptic Bag in Drum', desc: 'Bulk industrial supply' },
    ],
    image: '/Product/Mango.png',
    accentFrom: '#DC2626',
    accentTo: '#EA580C',
    bgColor: '#FEF3C7',
  },
];



export default function HomeContent() {
  return (
    <>
      {/* Hero Carousel */}
      <div className="pt-[100px] md:pt-[110px]">
        <HeroCarousel />
      </div>


      {/* Featured Products Section */}
      <section id="products" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
              <span className="w-8 h-[2px] bg-primary-500" />
              What We Export
              <span className="w-8 h-[2px] bg-primary-500" />
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Star Products</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Premium agriculture products sourced directly from farms, processed to international standards.
            </p>
          </motion.div>

          {/* Product cards — alternating layout */}
          <div className="space-y-32">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image side — splash effect, no background */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''} group/card cursor-pointer`} style={{ minHeight: '450px' }}>
                  {/* Expanding ring pulses */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 splash-ring"
                    style={{ borderColor: `${product.accentFrom}30` }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border splash-ring"
                    style={{ borderColor: `${product.accentTo}20`, animationDelay: '1s' }}
                  />

                  {/* Flying juice droplets */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="splash-drop-1" style={{ position: 'absolute' }}>
                      <div className="w-3 h-5 rounded-full" style={{ background: `linear-gradient(180deg, ${product.accentTo}, ${product.accentFrom})` }} />
                    </div>
                    <div className="splash-drop-2" style={{ position: 'absolute' }}>
                      <div className="w-2.5 h-4 rounded-full" style={{ background: `linear-gradient(180deg, ${product.accentFrom}CC, ${product.accentTo})` }} />
                    </div>
                    <div className="splash-drop-3" style={{ position: 'absolute' }}>
                      <div className="w-2 h-6 rounded-full" style={{ background: `linear-gradient(180deg, ${product.accentTo}DD, ${product.accentFrom})` }} />
                    </div>
                    <div className="splash-drop-4" style={{ position: 'absolute' }}>
                      <div className="w-3 h-4 rounded-full" style={{ background: `linear-gradient(180deg, ${product.accentFrom}, ${product.accentTo}BB)` }} />
                    </div>
                    <div className="splash-drop-5" style={{ position: 'absolute' }}>
                      <div className="w-2 h-5 rounded-full" style={{ background: `linear-gradient(180deg, ${product.accentTo}, ${product.accentFrom}CC)` }} />
                    </div>
                    <div className="splash-side-1" style={{ position: 'absolute' }}>
                      <div className="w-6 h-3 rounded-full" style={{ background: `${product.accentFrom}77` }} />
                    </div>
                    <div className="splash-side-2" style={{ position: 'absolute' }}>
                      <div className="w-5 h-2.5 rounded-full" style={{ background: `${product.accentTo}77` }} />
                    </div>
                  </div>

                  {/* Dripping drops */}
                  <div className="absolute bottom-0 left-[35%]">
                    <div className="w-1.5 h-3 rounded-full splash-drip" style={{ background: `${product.accentFrom}55` }} />
                  </div>
                  <div className="absolute bottom-0 left-[60%]">
                    <div className="w-1 h-2.5 rounded-full splash-drip" style={{ background: `${product.accentTo}44`, animationDelay: '0.5s' }} />
                  </div>

                  {/* Product image — big, floating */}
                  <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10 flex items-center justify-center"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[420px] object-contain drop-shadow-2xl transition-all duration-500 group-hover/card:scale-110 group-hover/card:drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)] group-hover/card:brightness-110 group-hover/card:saturate-[1.2]"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                {/* Content side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Subtitle */}
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{product.name}</h3>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <span
                      className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent"
                      style={{ backgroundImage: `linear-gradient(135deg, ${product.accentFrom}, ${product.accentTo})` }}
                    >
                      {product.subtitle}
                    </span>
                    <div
                      className="h-1 w-16 rounded-full mt-2"
                      style={{ background: `linear-gradient(90deg, ${product.accentFrom}, ${product.accentTo})` }}
                    />
                  </motion.div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{product.description}</p>

                  {/* Use cases */}
                  {'useCases' in product && (product as any).useCases && (
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">Ideal For</span>
                        <span className="flex-1 h-[1px] bg-gray-200" />
                      </div>
                      <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {((product as any).useCases as string[]).map((use: string, i: number) => (
                          <span
                            key={i}
                            className="flex items-center gap-2 text-gray-700 font-medium"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: product.accentFrom }}
                            />
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Spec badges */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="text-center">
                        <div
                          className="text-2xl font-bold bg-clip-text text-transparent"
                          style={{ backgroundImage: `linear-gradient(135deg, ${product.accentFrom}, ${product.accentTo})` }}
                        >
                          {spec.value}
                        </div>
                        <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{spec.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Details list */}
                  {product.details.length > 0 && (
                    <div className="space-y-3 mb-8">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Key Features</h4>
                      {product.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs flex-shrink-0"
                            style={{ background: `linear-gradient(135deg, ${product.accentFrom}, ${product.accentTo})` }}
                          >
                            ✓
                          </div>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Packaging grid */}
                  {'packaging' in product && (product as any).packaging && (
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Packaging Options</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {((product as any).packaging as { image: string; size: string; type: string; desc: string }[]).map((pkg, i) => (
                          <div
                            key={i}
                            className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-md transition-all bg-white group/pkg"
                          >
                            <div
                              className="text-lg font-bold bg-clip-text text-transparent"
                              style={{ backgroundImage: `linear-gradient(135deg, ${product.accentFrom}, ${product.accentTo})` }}
                            >
                              {pkg.size}
                            </div>
                            <div className="text-sm font-medium text-gray-900">{pkg.type}</div>
                            <div className="text-xs text-gray-500 mt-1">{pkg.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
                    style={{ background: `linear-gradient(135deg, ${product.accentFrom}, ${product.accentTo})` }}
                  >
                    Get a Quote
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
              <span className="w-8 h-[2px] bg-primary-500" />
              About Us
              <span className="w-8 h-[2px] bg-primary-500" />
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Who We Are</h2>
          </motion.div>

          {/* Two column content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established with a vision to bridge the gap between Indian agriculture excellence and global markets, Senthur Velavan
                Traders Pvt Ltd is committed to delivering premium quality products to international markets.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Based in the heart of Tamil Nadu&apos;s agricultural belt, we specialize in sourcing, processing, and exporting
                premium quality agriculture products including turmeric and mango pulp to markets across the globe.
              </p>

              {/* Key numbers */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '2025', label: 'Founded' },
                  { value: 'Global', label: 'Export Reach' },
                  { value: '100%', label: 'Quality Focus' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-extrabold text-primary-500">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — why choose us cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-4"
            >
              {[
                { icon: Users, title: 'Direct Farm Sourcing', desc: 'Products procured directly from verified farmers across Tamil Nadu' },
                { icon: Shield, title: 'Quality at Every Stage', desc: 'Strict quality control from procurement through processing to export' },
                { icon: Globe, title: 'Export Documentation', desc: 'Complete documentation support for seamless international trade' },
                { icon: Award, title: 'Competitive Pricing', desc: 'Premium quality products at competitive market pricing' },
                { icon: Truck, title: 'Reliable Delivery', desc: 'Timely delivery with trusted logistics partners worldwide' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary-500/20 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors">
                    <item.icon className="w-5 h-5 text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-0.5">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Export Process — Journey Style */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
              <span className="w-8 h-[2px] bg-primary-500" />
              How It Works
              <span className="w-8 h-[2px] bg-primary-500" />
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              From Inquiry to Delivery, <span className="text-primary-500">in 6 Steps</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A streamlined process ensuring quality, compliance, and timely delivery for every export order.
            </p>
          </motion.div>

          {/* Process steps — winding vine */}
          <div className="hidden lg:block relative h-[460px]">
            {/* SVG vine — preserveAspectRatio none = exact match to container */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 460" preserveAspectRatio="none" fill="none">
              <path
                d="M0 230 C80 230,100 90,167 90 S254 370,340 370 S427 90,500 90 S587 370,667 370 S754 90,833 90 S920 370,1000 370"
                stroke="#22c55e"
                strokeWidth="14"
                opacity="0.08"
                strokeLinecap="round"
              />
              <path
                d="M0 230 C80 230,100 90,167 90 S254 370,340 370 S427 90,500 90 S587 370,667 370 S754 90,833 90 S920 370,1000 370"
                stroke="url(#vine)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="vine" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="50%" stopColor="#16a34a" />
                  <stop offset="100%" stopColor="#15803d" />
                </linearGradient>
              </defs>
            </svg>

            {/*
              Markers at exact % positions matching SVG curve points:
              01: x=0%   y=230 (mid)
              02: x=16.7% y=90  (peak)
              03: x=34%   y=370 (valley)
              04: x=50%   y=90  (peak)
              05: x=66.7% y=370 (valley)
              06: x=83.3% y=90  (peak)
            */}
            {[
              { step: '01', title: 'Inquiry', desc: 'Discuss requirements and destination', xPct: 0, yPx: 230, above: false },
              { step: '02', title: 'Selection & Sampling', desc: 'Samples for quality evaluation', xPct: 16.7, yPx: 90, above: true },
              { step: '03', title: 'Order & Pricing', desc: 'Competitive pricing and terms', xPct: 34, yPx: 370, above: false },
              { step: '04', title: 'Processing & QC', desc: 'Quality testing at every stage', xPct: 50, yPx: 90, above: true },
              { step: '05', title: 'Packaging & Docs', desc: 'Export documentation prepared', xPct: 66.7, yPx: 370, above: false },
              { step: '06', title: 'Ship & Deliver', desc: 'Shipping and post-delivery support', xPct: 83.3, yPx: 90, above: true },
            ].map((item, i) => {
              const markerSize = 44;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                  className="absolute z-10"
                  style={{
                    left: `${item.xPct}%`,
                    top: item.yPx - markerSize / 2,
                    marginLeft: -markerSize / 2,
                  }}
                >
                  {/* Marker circle */}
                  <div className="w-[44px] h-[44px] rounded-full bg-white border-[3px] border-green-500 text-green-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-green-500/20">
                    {item.step}
                  </div>

                  {/* Label — positioned above or below */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 text-center"
                    style={{
                      width: 150,
                      ...(item.above
                        ? { bottom: markerSize + 8 }
                        : { top: markerSize + 8 }),
                    }}
                  >
                    <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-snug mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile/tablet fallback — simple vertical timeline */}
          <div className="lg:hidden space-y-0">
            {[
              { step: '01', title: 'Inquiry', desc: 'Discuss requirements and export destination' },
              { step: '02', title: 'Selection & Sampling', desc: 'Samples for quality evaluation' },
              { step: '03', title: 'Order & Pricing', desc: 'Competitive pricing and terms' },
              { step: '04', title: 'Processing & QC', desc: 'Quality testing at every stage' },
              { step: '05', title: 'Packaging & Docs', desc: 'Export documentation prepared' },
              { step: '06', title: 'Ship & Deliver', desc: 'Customs, shipping, and follow-up' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 items-start relative"
              >
                {/* Vertical line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold shadow-md flex-shrink-0">
                    {item.step}
                  </div>
                  {i < 5 && <div className="w-[2px] h-12 bg-gray-200" />}
                </div>
                <div className="pb-10">
                  <h4 className="font-bold text-gray-900 mb-0.5">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('/farm.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/75 to-primary-900/80" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 border border-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 border border-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />

            {/* Content */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-8 py-16 md:px-16 md:py-20">
              {/* Left — text */}
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-green-400 mb-5">
                  <span className="w-6 h-[2px] bg-green-400" />
                  Let&apos;s Work Together
                </span>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
                  Ready to Source <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Premium Products?</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                  Competitive pricing on export-grade turmeric and mango pulp. From inquiry to delivery — we handle it all.
                </p>
              </div>

              {/* Right — actions */}
              <div className="flex flex-col gap-4 lg:items-end">
                <a
                  href="tel:+917010501482"
                  className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-xl group w-fit"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Call us directly</div>
                    <div className="font-bold">+91 70105 01482</div>
                  </div>
                </a>
                <a
                  href="tel:+916369054818"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/10 w-fit"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Alternative number</div>
                    <div className="font-bold">+91 63690 54818</div>
                  </div>
                </a>
                <a
                  href="mailto:senthurvelavantraders16@gmail.com"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/10 w-fit"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Send an inquiry</div>
                    <div className="font-bold">Email Us</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
