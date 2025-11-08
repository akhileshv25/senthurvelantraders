import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Truck, Shield, Globe, FileText, Users, Award, Package, Clock, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Package,
      title: 'Product Sourcing',
      description: 'Direct sourcing from verified farmers and suppliers across Tamil Nadu, ensuring premium quality and competitive pricing.',
      features: [
        'Verified farmer network',
        'Quality inspection at source',
        'Competitive pricing',
        'Seasonal crop planning'
      ]
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive quality control processes from farm to export, meeting international standards and certifications.',
      features: [
        'HACCP certified facilities',
        'Laboratory testing',
        'Pesticide residue testing',
        'Microbiological analysis'
      ]
    },
    {
      icon: Truck,
      title: 'Export Logistics',
      description: 'End-to-end logistics solutions including packaging, documentation, customs clearance, and global shipping.',
      features: [
        'Custom packaging solutions',
        'Container loading supervision',
        'Shipping documentation',
        'Insurance coverage'
      ]
    },
    {
      icon: FileText,
      title: 'Documentation Support',
      description: 'Complete export documentation services including certificates, permits, and customs compliance.',
      features: [
        'Phytosanitary certificates',
        'Certificate of origin',
        'Health certificates',
        'Customs documentation'
      ]
    },
    {
      icon: Globe,
      title: 'Market Intelligence',
      description: 'Expert guidance on international markets, pricing trends, and regulatory requirements for successful exports.',
      features: [
        'Market research reports',
        'Competitor analysis',
        'Pricing strategy',
        'Regulatory updates'
      ]
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Dedicated customer support throughout the export process, from inquiry to post-delivery services.',
      features: [
        '24/7 inquiry response',
        'Order tracking',
        'Technical assistance',
        'After-sales support'
      ]
    }
  ];

  const exportProcess = [
    {
      step: '01',
      title: 'Inquiry & Consultation',
      description: 'Initial discussion about your requirements, product specifications, and export destination.'
    },
    {
      step: '02',
      title: 'Product Selection',
      description: 'Based on your needs, we recommend suitable products and provide detailed specifications.'
    },
    {
      step: '03',
      title: 'Sample & Pricing',
      description: 'Product samples are provided for evaluation along with competitive pricing quotes.'
    },
    {
      step: '04',
      title: 'Order Confirmation',
      description: 'Formal order placement with agreed terms, payment conditions, and delivery schedule.'
    },
    {
      step: '05',
      title: 'Production & Quality Check',
      description: 'Products are sourced, processed, and undergo comprehensive quality testing.'
    },
    {
      step: '06',
      title: 'Packaging & Documentation',
      description: 'Custom packaging as per requirements and preparation of all export documentation.'
    },
    {
      step: '07',
      title: 'Shipping & Customs',
      description: 'Container loading, customs clearance, and coordination with shipping lines.'
    },
    {
      step: '08',
      title: 'Delivery & Follow-up',
      description: 'Final delivery to destination with post-shipment support and customer feedback.'
    }
  ];

  const certifications = [
    'HACCP Certification',
    'ISO 22000:2018',
    'Organic Certification',
    'FSSAI License',
    'APEDA Registration',
    'Spice Board Registration',
    'GlobalGAP Compliant',
    'USDA Organic Approved'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Export Services - Comprehensive Agriculture Export Solutions"
        description="End-to-end export services for agriculture products including product sourcing, quality assurance, export logistics, documentation support, market intelligence, and customer support. HACCP certified facilities, ISO 22000 certified, complete customs clearance and shipping documentation. Serving global markets with reliable delivery."
        keywords="agriculture export services, export logistics, export documentation, customs clearance, phytosanitary certificate, certificate of origin, quality assurance, HACCP certified facilities, export process, international shipping, product sourcing India, agriculture supply chain, export compliance, trade documentation, global logistics, container shipping, quality testing, pesticide residue testing, laboratory testing, export consultation"
        url="https://senthurvelavantraders.com/services"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Export Services
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive export solutions for premium agriculture products,
              from sourcing to delivery with complete quality assurance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end export services designed to make your international trade experience seamless and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Export Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined 8-step process ensuring quality, compliance, and timely delivery for every export order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exportProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="text-3xl font-bold text-primary-500 mb-3">{step.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < exportProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-primary-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and safety is backed by internationally recognized certifications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
                <Award className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Export Services?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Experience the difference of working with a dedicated export partner committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
              <p className="text-white/90">
                Quick response times and efficient processing ensure your orders are fulfilled on schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-white/90">
                Every product undergoes rigorous quality testing to meet international standards and your expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Network</h3>
              <p className="text-white/90">
                Extensive network of partners and shipping lines ensures reliable delivery to any destination worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Exporting?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your export requirements and discover how our comprehensive
            services can support your international business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="#products"
              className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              View Our Products
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
