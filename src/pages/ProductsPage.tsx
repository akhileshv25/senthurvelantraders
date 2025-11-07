import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Filter, Search, Package, Leaf, Truck, Award } from 'lucide-react';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products = [
    {
      name: 'Premium Turmeric Powder',
      description: 'Finely ground turmeric powder with high curcumin content, perfect for food processing, pharmaceutical, and spice industries. Sourced from the finest turmeric farms in Tamil Nadu.',
      specifications: [
        'Curcumin content: 5-7%',
        'Moisture: <12%',
        'Ash content: <8%',
        'Bulk density: 0.5-0.7 g/ml',
        'Packaging: 25kg/50kg PP bags',
        'Shelf life: 24 months'
      ],
      category: 'Spices',
      certifications: ['Organic', 'HACCP', 'ISO 22000'],
      image: '/Product/turmaric.png'
    },
    {
      name: 'Turmeric Fingers',
      description: 'Whole turmeric rhizomes, naturally dried and cleaned. Ideal for spice processing, traditional medicine, and export markets requiring whole spice forms.',
      specifications: [
        'Moisture: <10%',
        'Oleoresin content: 8-12%',
        'Essential oil: 3-5%',
        'Size: 3-5 cm length',
        'Color: Bright yellow-orange',
        'Foreign matter: <1%'
      ],
      category: 'Spices',
      certifications: ['Organic', 'GAP Certified'],
      image: '/Product/turmaric.png'
    },
    {
      name: 'Fresh Cavendish Bananas',
      description: 'Premium quality Cavendish bananas harvested at optimal ripeness. Available in various sizes and grades for both domestic and international markets.',
      specifications: [
        'Grade: Premium/Grade A',
        'Length: 15-20 cm',
        'Diameter: 3-4 cm',
        'Sugar content: 18-22 Brix',
        'Shelf life: 10-14 days',
        'Packaging: Corrugated boxes (13.5kg net)'
      ],
      category: 'Fruits',
      certifications: ['GlobalGAP', 'HACCP'],
      image: '/banana.png'
    },
    {
      name: 'Banana Chips',
      description: 'Crispy banana chips made from fresh bananas, fried in coconut oil. Traditional Kerala/Tamil Nadu style snack with authentic taste.',
      specifications: [
        'Raw material: Fresh bananas',
        'Oil: Coconut oil',
        'Moisture: <5%',
        'Salt content: 1-2%',
        'Packaging: Vacuum sealed pouches',
        'Shelf life: 12 months'
      ],
      category: 'Processed Foods',
      certifications: ['FSSAI', 'HACCP']
    },
    {
      name: 'Alphonso Mango Pulp',
      description: 'Pure Alphonso mango pulp extracted from the finest mangoes. Rich in natural sweetness and flavor, perfect for food processing and beverage industries.',
      specifications: [
        'Brix: 16-18%',
        'Acidity: 0.4-0.6%',
        'pH: 3.8-4.2',
        'Color: Bright yellow',
        'Packaging: Aseptic bags in drums',
        'Shelf life: 24 months (frozen)'
      ],
      category: 'Processed Foods',
      certifications: ['HACCP', 'ISO 22000', 'Organic'],
      image: '/Product/Mango.png'
    },
    {
      name: 'Totapuri Mango Pulp',
      description: 'High-quality Totapuri mango pulp known for its excellent gelling properties. Widely used in food processing, confectionery, and beverage manufacturing.',
      specifications: [
        'Brix: 14-16%',
        'Acidity: 0.5-0.7%',
        'pH: 3.6-4.0',
        'TSS: 14-16%',
        'Packaging: Aseptic bags (215kg drums)',
        'Shelf life: 24 months'
      ],
      category: 'Processed Foods',
      certifications: ['HACCP', 'ISO 22000'],
      image: '/Product/Mango.png'
    },
    {
      name: 'Organic Coriander Powder',
      description: 'Finely ground coriander powder from organically grown coriander seeds. Rich aroma and flavor, perfect for culinary applications worldwide.',
      specifications: [
        'Moisture: <10%',
        'Ash content: <7%',
        'Volatile oil: 0.2-0.5%',
        'Packaging: 25kg PP bags',
        'Origin: Tamil Nadu, India',
        'Shelf life: 24 months'
      ],
      category: 'Spices',
      certifications: ['Organic', 'USDA NOP']
    },
    {
      name: 'Cumin Seeds',
      description: 'Whole cumin seeds with strong aromatic properties. Essential spice used in various cuisines worldwide, known for digestive benefits.',
      specifications: [
        'Moisture: <8%',
        'Volatile oil: 2.5-4%',
        'Foreign matter: <2%',
        'Origin: Gujarat/Rajasthan',
        'Packaging: 25kg/50kg jute bags',
        'Shelf life: 24 months'
      ],
      category: 'Spices',
      certifications: ['HACCP', 'ISO 22000']
    },
    {
      name: 'Red Chilli Powder',
      description: 'Premium red chilli powder made from high-quality chilli varieties. Available in different heat levels to suit various culinary requirements.',
      specifications: [
        'Capsaicin content: 0.1-0.5%',
        'Moisture: <10%',
        'Ash content: <8%',
        'Heat level: 10,000-50,000 SHU',
        'Color: Deep red',
        'Packaging: 25kg PP bags'
      ],
      category: 'Spices',
      certifications: ['HACCP', 'ISO 22000']
    },
    {
      name: 'Ginger Powder',
      description: 'Dried and ground ginger powder with strong aromatic properties. Widely used in food processing, beverages, and pharmaceutical applications.',
      specifications: [
        'Oleoresin content: 4-6%',
        'Moisture: <10%',
        'Ash content: <6%',
        'Fiber: <8%',
        'Packaging: 25kg PP bags',
        'Shelf life: 24 months'
      ],
      category: 'Spices',
      certifications: ['Organic', 'HACCP']
    },
    {
      name: 'Cashew Nuts',
      description: 'Premium quality cashew nuts processed and packed for export. Available in various grades and processing types.',
      specifications: [
        'Grade: W210/W240/W320',
        'Moisture: <5%',
        'Broken: <5%',
        'Packaging: Vacuum sealed cartons',
        'Origin: Kerala/Tamil Nadu',
        'Shelf life: 24 months'
      ],
      category: 'Nuts',
      certifications: ['HACCP', 'ISO 22000']
    },
    {
      name: 'Coconut Products',
      description: 'Wide range of coconut products including desiccated coconut, coconut milk powder, and virgin coconut oil for international markets.',
      specifications: [
        'Moisture: <3% (desiccated)',
        'Oil content: 60-65%',
        'Fat content: 62-68%',
        'Packaging: 25kg multiwall bags',
        'Origin: Kerala/Tamil Nadu',
        'Shelf life: 18 months'
      ],
      category: 'Coconut Products',
      certifications: ['Organic', 'HACCP']
    }
  ];

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Premium Products
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of high-quality agriculture products,
              carefully sourced, processed, and packaged to meet international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    {/* Product Image */}
                    <div className="h-64 bg-gradient-to-br from-primary-500/10 to-primary-600/10 flex items-center justify-center relative overflow-hidden">
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <Package className="w-16 h-16 text-primary-500" />
                      )}
                      <div className="absolute top-3 right-3">
                        <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>

                      {/* Certifications */}
                      {product.certifications && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {product.certifications.map((cert, certIndex) => (
                              <span
                                key={certIndex}
                                className="inline-flex items-center bg-primary-500 text-white text-xs px-2 py-1 rounded-full"
                              >
                                <Award className="w-3 h-3 mr-1" />
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Specifications */}
                      <div className="space-y-2 mb-4">
                        <h4 className="font-semibold text-gray-900 text-sm">Key Specifications:</h4>
                        <ul className="text-sm text-gray-600 space-y-1 max-h-32 overflow-y-auto">
                          {product.specifications.map((spec, specIndex) => (
                            <li key={specIndex} className="flex items-start">
                              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex gap-2">
                        <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center">
                          <Truck className="w-4 h-4 mr-2" />
                          Inquire
                        </button>
                        <button className="px-4 py-2 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-medium rounded-md transition-colors duration-200">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Export Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Export Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle complete export documentation, customs clearance, and logistics
              to ensure smooth delivery to your destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Packaging</h3>
              <p className="text-gray-600">
                Tailored packaging solutions to meet specific buyer requirements and international standards.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Logistics</h3>
              <p className="text-gray-600">
                Comprehensive logistics support with reliable shipping partners worldwide for timely delivery.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Stringent quality control processes ensuring products meet international certification standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
