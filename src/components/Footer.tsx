import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Truck, Shield, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-600 to-primary-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/logo.svg')] opacity-[0.03] bg-center bg-no-repeat bg-contain"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">SENTHUR VELAVAN TRADERS PVT LTD</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>2/108B, Velliankadu, Mettuppalayam, Coimbatore-641104</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <div>
                  <p>+91 9790015428</p>
                  <p>+91 6369054818</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>senthurvelavantraders16@gmail.com</span>
              </div>
            </div>
            <div className="text-sm text-gray-300 space-y-1">
              <p><strong>GST:</strong> 33ABRCS5820R1ZJ</p>
              <p><strong>CIN:</strong> U46305TZ2025PTC036358</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary-700 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-primary-700 transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-primary-700 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-700 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-700 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>Turmeric</li>
              <li>Banana</li>
              <li>Mango Pulp</li>
              <li>Spices</li>
              <li>Fruits</li>
              <li>Agriculture Commodities</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Truck className="w-4 h-4 mr-2" />
                <span className="text-sm">International Export</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm">Quality Assurance</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm">Certifications</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <span className="text-sm">Global Reach</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-500 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2025 Senthur Velavan Traders Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
