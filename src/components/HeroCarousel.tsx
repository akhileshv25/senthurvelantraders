import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Package, Leaf, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'Premium Turmeric',
    subtitle: 'Golden Spice from Tamil Nadu',
    description: 'High curcumin content turmeric powder and fingers for global markets',
    gradient: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-50',
    icon: Package,
    stats: ['5-7% Curcumin', 'Organic Certified', 'Export Quality'],
    image: '/Product/turmaric.png'
  },
  {
    title: 'Fresh Bananas',
    subtitle: 'Premium Quality from Kerala & Tamil Nadu',
    description: 'Grade A Cavendish bananas sourced from certified farms',
    gradient: 'from-yellow-300 to-yellow-500',
    bgColor: 'bg-yellow-50',
    icon: Leaf,
    stats: ['Grade A Quality', 'GlobalGAP', 'Fresh Harvest'],
    image: '/banana.png'
  },
  {
    title: 'Mango Pulp',
    subtitle: 'Pure Alphonso & Totapuri Varieties',
    description: '100% natural mango pulp for food processing and beverages',
    gradient: 'from-orange-400 to-red-400',
    bgColor: 'bg-orange-50',
    icon: Package,
    stats: ['100% Natural', 'HACCP Certified', 'No Preservatives'],
    image: '/Product/Mango.png'
  },
  {
    title: 'Global Export Services',
    subtitle: 'Trusted Partner for 25+ Countries',
    description: 'Complete export solutions with quality assurance and timely delivery',
    gradient: 'from-primary-500 to-primary-600',
    bgColor: 'bg-blue-50',
    icon: Truck,
    stats: ['500+ Tons/Year', '25+ Countries', '100% Quality']
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${slides[currentSlide].bgColor}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6 text-center lg:text-left"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="inline-block"
                >
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${slides[currentSlide].gradient} text-white font-semibold text-sm`}>
                    <CurrentIcon className="w-4 h-4 mr-2" />
                    {slides[currentSlide].subtitle}
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-4"
                >
                  {slides[currentSlide].stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center bg-white px-4 py-2 rounded-lg shadow-md"
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${slides[currentSlide].gradient} mr-2`}></span>
                      <span className="text-sm font-medium text-gray-700">{stat}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link to="/products">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-3 rounded-lg bg-gradient-to-r ${slides[currentSlide].gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-shadow`}
                    >
                      Explore Products
                    </motion.button>
                  </Link>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-lg bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200"
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="hidden lg:flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  {/* Background Glow */}
                  <div className={`w-96 h-96 rounded-full bg-gradient-to-r ${slides[currentSlide].gradient} opacity-20 blur-3xl absolute inset-0`}></div>
                  
                  {/* Product Image */}
                  <div className="relative">
                    {slides[currentSlide].image ? (
                      <motion.img
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-[500px] h-[500px] object-contain drop-shadow-2xl"
                      />
                    ) : (
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <CurrentIcon className="w-80 h-80 text-gray-800 drop-shadow-xl" />
                      </motion.div>
                    )}
                    
                    {/* Floating Logo Badge */}
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        y: [0, -10, 0],
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                        y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                      }}
                      className="absolute -top-8 -right-8 w-28 h-28 bg-white rounded-full shadow-2xl p-4 border-4 border-white"
                    >
                      <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </motion.button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-3 bg-primary-500'
                : 'w-3 h-3 bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
        <motion.div
          key={currentSlide}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          className={`h-full bg-gradient-to-r ${slides[currentSlide].gradient}`}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
