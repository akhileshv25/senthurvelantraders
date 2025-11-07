import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, Globe, Users } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 9790015428',
        '+91 6369054818'
      ]
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [
        'senthurvelavantraders16@gmail.com'
      ]
    },
    {
      icon: MapPin,
      title: 'Registered Office',
      details: [
        '2/108B, Velliankadu, Mettuppalayam',
        'Coimbatore-641104, Tamil Nadu, India'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 6:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const companyDetails = [
    { label: 'Company Name', value: 'Senthur Velavan Traders Private Limited' },
    { label: 'GST Number', value: '33ABRCS5820R1ZJ' },
    { label: 'CIN Number', value: 'U46305TZ2025PTC036358' },
    { label: 'Year Established', value: '2025' },
    { label: 'Business Type', value: 'Private Limited Company' },
    { label: 'Export Experience', value: '10+ Years' }
  ];

  const exportMarkets = [
    'United States', 'United Kingdom', 'Germany', 'Netherlands', 'Australia',
    'Canada', 'Middle East', 'Southeast Asia', 'East Africa', 'West Africa'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for inquiries about our premium agriculture products,
              export services, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="text-gray-600 text-sm space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Company Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Company Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  {companyDetails.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-700">{detail.label}:</span>
                      <span className="text-gray-900">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Export Markets */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-primary-500" />
                  Export Markets
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {exportMarkets.map((market, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {market}
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                  Our Location
                </h3>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Interactive Map</p>
                    <p className="text-xs">Coimbatore, Tamil Nadu, India</p>
                    <p className="text-xs">11.0168°N, 76.9558°E</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services Include
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your export requirements from inquiry to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Consultation</h3>
              <p className="text-gray-600 text-sm">
                Expert guidance on product selection, specifications, and customization to meet your specific requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Export Documentation</h3>
              <p className="text-gray-600 text-sm">
                Complete documentation support including certificates, phytosanitary certificates, and customs clearance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Timely Delivery</h3>
              <p className="text-gray-600 text-sm">
                Reliable logistics and supply chain management ensuring on-time delivery to your destination worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are your minimum order quantities?
              </h3>
              <p className="text-gray-600">
                Our minimum order quantities vary by product. For most spices and turmeric, we accept orders from 100kg,
                while for fruits and processed products, minimum orders start from 500kg. Contact us for specific requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you provide samples for testing?
              </h3>
              <p className="text-gray-600">
                Yes, we provide product samples for quality testing and evaluation. Sample costs and shipping charges apply,
                which are adjusted against confirmed orders.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What certifications do your products have?
              </h3>
              <p className="text-gray-600">
                Our products are certified with HACCP, ISO 22000, Organic certification, FSSAI, APEDA registration,
                and Spice Board registration. We can also arrange additional certifications as required.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are your payment terms?
              </h3>
              <p className="text-gray-600">
                We accept LC (Letter of Credit), TT (Telegraphic Transfer), and DP (Documents Against Payment).
                For established customers, we also offer credit terms after satisfactory track record.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
