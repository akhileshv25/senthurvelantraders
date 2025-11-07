import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import ProductCard from '../components/ProductCard';
import { Truck, Shield, Globe, Award, Users, Leaf, TrendingUp, Target, Phone, Mail } from 'lucide-react';

const HomePage = () => {
  const featuredProducts = [
    {
      name: 'Premium Turmeric',
      description: 'High-quality turmeric powder and fingers, rich in curcumin content, sourced from the finest farms in Tamil Nadu.',
      specifications: ['Curcumin: 5-7%', 'Moisture: <12%', 'Organic Certified', 'Export Quality'],
      category: 'Spices',
      image: '/Product/turmaric.png',
      gradient: 'from-orange-500 to-yellow-500',
      color: '#f59e0b'
    },
    {
      name: 'Fresh Bananas',
      description: 'Premium quality Cavendish bananas harvested at optimal ripeness, available in various sizes and grades.',
      specifications: ['Grade A Quality', 'Fresh Harvest', 'GlobalGAP Certified', 'Export Ready'],
      category: 'Fruits',
      image: '/banana.png',
      gradient: 'from-yellow-400 to-green-400',
      color: '#84cc16'
    },
    {
      name: 'Mango Pulp',
      description: 'Pure Alphonso and Totapuri mango pulp with natural sweetness, perfect for food processing industries.',
      specifications: ['100% Natural', 'No Preservatives', 'HACCP Certified', 'Aseptic Packaging'],
      category: 'Processed Foods',
      image: '/Product/Mango.png',
      gradient: 'from-orange-400 to-red-400',
      color: '#f97316'
    }
  ];

  const stats = [
    { number: '2025', label: 'Established' },
    { number: '100%', label: 'Quality Assurance' },
    { number: '24/7', label: 'Customer Support' },
    { number: 'Global', label: 'Export Ready' }
  ];

  const services = [
    {
      icon: Truck,
      title: 'Global Export',
      description: 'Comprehensive export services to international markets with full documentation and customs clearance.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring premium products that meet international standards.'
    },
    {
      icon: Globe,
      title: 'Market Expertise',
      description: 'Deep knowledge of global markets, trade regulations, and customer requirements across continents.'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Multiple international certifications including Organic, HACCP, and GMP for complete compliance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Carousel */}
      <div className="pt-[100px] md:pt-[110px]">
        <HeroCarousel />
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-6 py-3 bg-primary-500 text-white text-sm font-bold">
                <Leaf className="w-5 h-5 mr-2" />
                Premium Export Products
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Star Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Three premium agriculture products that define quality and excellence in international trade.
            </p>
          </motion.div>

          {/* Products Grid - Clean Modern Design */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group"
              >
                {/* Image Container */}
                <div className="relative mb-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                    loading="lazy"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-white text-gray-900 px-4 py-2 text-sm font-bold shadow-lg">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div>
                  {/* Product Name */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-500 transition-colors duration-200">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {product.description}
                  </p>

                  {/* Specifications List */}
                  <div className="space-y-3 mb-8">
                    {product.specifications.map((spec, specIndex) => (
                      <div
                        key={specIndex}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-primary-500 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="flex items-center text-primary-500 font-bold text-lg hover:text-primary-600 transition-colors group-hover:translate-x-2 transition-transform duration-200">
                    <span>Learn More</span>
                    <span className="ml-2 text-2xl">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-20"
          >
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-12 py-5 font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Explore Full Product Range
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-3"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/logo.svg')] opacity-[0.02] bg-center bg-no-repeat bg-contain"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring' }}
                className="inline-block mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500 text-white text-sm font-semibold">
                  <Target className="w-4 h-4 mr-2" />
                  About Us
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Senthur Velavan Traders
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established with a vision to bridge the gap between Indian agriculture excellence
                and global markets, Senthur Velavan Traders Pvt Ltd has been a trusted name in
                international trade for over a decade.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Based in the heart of Tamil Nadu's agricultural belt, we specialize in sourcing,
                processing, and exporting premium quality agriculture products including turmeric,
                bananas, mango pulp, and various spices to markets across the globe.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-gradient-to-r from-primary-500/10 to-primary-600/10 px-6 py-3 rounded-lg"
                >
                  <Leaf className="w-6 h-6 text-primary-500 mr-3" />
                  <span className="text-gray-800 font-medium">Sustainable Farming</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-gradient-to-r from-primary-700/10 to-primary-500/10 px-6 py-3 rounded-lg"
                >
                  <Users className="w-6 h-6 text-primary-500 mr-3" />
                  <span className="text-gray-800 font-medium">Farmer Partnership</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-500/5 to-primary-600/5 p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-700/10 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative">
                Why Choose Us?
              </h3>
              <ul className="space-y-4 relative">
                {[
                  'Direct sourcing from verified farmers',
                  'State-of-the-art processing facilities',
                  'Complete export documentation support',
                  'Competitive pricing with premium quality',
                  'Timely delivery and reliable service'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <motion.span
                      whileHover={{ scale: 1.5, rotate: 180 }}
                      className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mr-4 mt-1.5 flex-shrink-0"
                    ></motion.span>
                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring' }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500 text-white text-sm font-semibold">
                <TrendingUp className="w-4 h-4 mr-2" />
                Our Services
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Export Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive export solutions tailored to meet your international trade requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-colors"></div>
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 relative z-10"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-600 relative z-10">{service.description}</p>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600"
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 text-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img1.jpg')" }}
        ></div>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring' }}
            >
              <Globe className="w-16 h-16 mx-auto mb-6" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Export Journey?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your requirements and discover how we can help
              you access premium Indian agriculture products for global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919790015428"
                className="inline-flex items-center justify-center bg-white text-primary-500 px-10 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 9790015428
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:senthurvelavantraders16@gmail.com"
                className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-500 transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
