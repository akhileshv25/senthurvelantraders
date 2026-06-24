'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    title: 'Premium',
    titleAccent: 'Turmeric',
    subtitle: 'From the farms of Tamil Nadu',
    description: 'High curcumin content turmeric fingers sourced directly from verified farmers. Export-grade quality for global markets.',
    stats: [
      { value: '5-7%', label: 'Curcumin' },
      { value: '100%', label: 'Organic' },
      { value: 'A+', label: 'Grade' },
    ],
    image: '/Product/turmaric.png',
    bgFrom: '#FFFFFF',
    bgTo: '#F8FAFC',
    accentFrom: '#EA580C',
    accentTo: '#D97706',
  },
  {
    title: 'Pure',
    titleAccent: 'Mango Pulp & Concentrates',
    subtitle: 'Alphonso & Totapuri varieties',
    description: '100% natural mango pulp with no preservatives. Premium processing for food & beverage industries worldwide.',
    stats: [
      { value: '100%', label: 'Natural' },
      { value: '16-18mo', label: 'Shelf Life*' },
    ],
    image: '/Product/Mango.png',
    bgFrom: '#FFFFFF',
    bgTo: '#FFF7ED',
    accentFrom: '#DC2626',
    accentTo: '#EA580C',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((p) => (p + dir + slides.length) % slides.length);
  };

  const slide = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-50%' : '50%', opacity: 0 }),
  };

  return (
    <div className="relative w-full overflow-hidden h-auto min-h-[500px] lg:h-[85vh]">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgTo}33 50%, ${slide.bgFrom} 100%)`,
          }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Subtle geometric accents */}
            <div
              className="absolute -top-[10%] -right-[5%] w-[40vw] h-[40vw] rounded-full opacity-[0.03]"
              style={{ background: `linear-gradient(135deg, ${slide.accentFrom}, ${slide.accentTo})` }}
            />
            <div
              className="absolute -bottom-[20%] -left-[10%] w-[35vw] h-[35vw] rounded-full opacity-[0.025]"
              style={{ background: `linear-gradient(135deg, ${slide.accentTo}, ${slide.accentFrom})` }}
            />
            {/* Fine line accent */}
            <div
              className="absolute top-[15%] right-[20%] w-24 h-[1px] opacity-10"
              style={{ background: slide.accentFrom }}
            />
            <div
              className="absolute bottom-[20%] left-[10%] w-16 h-[1px] opacity-10"
              style={{ background: slide.accentTo }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-10 sm:px-14 lg:px-16 h-auto min-h-[500px] lg:h-[85vh] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full pt-16 sm:pt-24 pb-12">
              {/* Text content — 5 cols */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                    <span className="text-gray-900">{slide.title}</span>
                    <br />
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: `linear-gradient(135deg, ${slide.accentFrom}, ${slide.accentTo})` }}
                    >
                      {slide.titleAccent}
                    </span>
                  </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span
                    className="inline-flex items-center gap-2 text-base sm:text-xl font-semibold text-gray-700"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: `linear-gradient(135deg, ${slide.accentFrom}, ${slide.accentTo})` }}
                    />
                    {slide.subtitle}
                  </span>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed"
                >
                  {slide.description}
                </motion.p>

                {/* Stat pills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-3"
                >
                  {slide.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2"
                    >
                      <span
                        className="text-lg font-bold bg-clip-text text-transparent"
                        style={{ backgroundImage: `linear-gradient(135deg, ${slide.accentFrom}, ${slide.accentTo})` }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                  className="flex flex-row gap-3 justify-center lg:justify-start"
                >
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="group flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
                      style={{ background: `linear-gradient(135deg, ${slide.accentFrom}, ${slide.accentTo})` }}
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold border-2 border-gray-900/10 text-gray-900 bg-white/50 backdrop-blur-sm hover:bg-white transition-colors shadow-sm text-sm sm:text-base"
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              {/* Mobile background image */}
              <div
                className="absolute inset-0 lg:hidden opacity-10 bg-contain bg-center bg-no-repeat pointer-events-none"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Product image — 7 cols */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: 60 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7 hidden lg:flex items-center justify-end relative -mr-8"
              >

                {/* Solid colored circle behind product */}
                <div
                  className="absolute w-[480px] h-[480px] rounded-full"
                  style={{ background: `${slide.accentTo}30` }}
                />
                <div
                  className="absolute w-[380px] h-[380px] rounded-full"
                  style={{ background: `${slide.accentFrom}20` }}
                />

                {/* Product image */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  className="relative z-10 cursor-pointer group/img"
                >
                  <img
                    src={slide.image}
                    alt={slide.titleAccent}
                    className="w-[550px] h-[550px] object-contain drop-shadow-2xl transition-all duration-500 group-hover/img:drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)] group-hover/img:brightness-105 group-hover/img:saturate-110"
                  />
                  {/* Hover glow ring */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover/img:opacity-20 transition-opacity duration-500 blur-3xl scale-90"
                    style={{ background: `radial-gradient(circle, ${slide.accentFrom}, transparent 70%)` }}
                  />
                </motion.div>

              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav arrows — minimal style */}
      <button
        onClick={() => go(-1)}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white hover:shadow-lg transition-all hidden sm:flex items-center justify-center group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white hover:shadow-lg transition-all hidden sm:flex items-center justify-center group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
      </button>

      {/* Slide indicators — pill style */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? 'w-8' : 'w-2 bg-gray-400/50 hover:bg-gray-400'
            }`}
            style={i === current ? { background: `linear-gradient(90deg, ${slide.accentFrom}, ${slide.accentTo})` } : {}}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-200/50 z-20">
        <motion.div
          key={current}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 15, ease: 'linear' }}
          className="h-full"
          style={{ background: `linear-gradient(90deg, ${slide.accentFrom}, ${slide.accentTo})` }}
        />
      </div>
    </div>
  );
}
