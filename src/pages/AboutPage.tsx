import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Award, Shield, Globe, Leaf, Truck, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Senthur Velavan',
      position: 'Founder & CEO',
      description: 'Over 15 years of experience in agriculture trade and export business with deep knowledge of international markets.'
    }
  ];

  const certifications = [
    {
      name: 'HACCP Certification',
      description: 'Hazard Analysis and Critical Control Points certification for food safety management.',
      icon: Shield
    },
    {
      name: 'ISO 22000:2018',
      description: 'Food Safety Management Systems certification ensuring quality and safety standards.',
      icon: Award
    },
    {
      name: 'Organic Certification',
      description: 'Certified organic products meeting international organic farming standards.',
      icon: Leaf
    },
    {
      name: 'FSSAI License',
      description: 'Food Safety and Standards Authority of India license for food processing.',
      icon: CheckCircle
    },
    {
      name: 'APEDA Registration',
      description: 'Agricultural and Processed Food Products Export Development Authority registration.',
      icon: Globe
    },
    {
      name: 'Spice Board Registration',
      description: 'Registered with Spices Board of India for spice export compliance.',
      icon: Truck
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Farmer Partnership',
      description: 'Building strong relationships with local farmers to ensure fair pricing and sustainable farming practices.'
    },
    {
      icon: Shield,
      title: 'Quality Excellence',
      description: 'Maintaining uncompromising quality standards in every aspect of our operations and products.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expanding our presence in international markets while maintaining authenticity and tradition.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Promoting sustainable agriculture practices that protect the environment and support communities.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Tons Exported Annually' },
    { number: '25+', label: 'Countries Served' },
    { number: '1000+', label: 'Satisfied Customers' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Senthur Velavan Traders
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Bridging Indian agriculture excellence with global markets through quality,
              trust, and sustainable practices since 2014.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2014, Senthur Velavan Traders Pvt Ltd emerged from a vision to create
                  a bridge between India's rich agricultural heritage and the growing global demand
                  for premium quality agriculture products. Based in the heart of Tamil Nadu's
                  agricultural belt, we have established ourselves as a trusted name in international trade.
                </p>
                <p>
                  Our journey began with a commitment to source the finest turmeric, bananas, mango pulp,
                  and spices directly from verified farmers, ensuring that every product meets
                  international quality standards while supporting sustainable farming practices.
                </p>
                <p>
                  Today, we serve clients across 25+ countries, maintaining long-term relationships
                  built on trust, quality, and mutual growth. Our state-of-the-art processing facilities
                  and dedicated team ensure that every product leaving our premises meets the highest
                  standards of quality and safety.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-primary-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the preferred partner for premium agriculture products export, delivering
                exceptional quality while fostering sustainable development in the agricultural
                sector and creating value for all stakeholders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-primary-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become a globally recognized leader in agriculture product exports from India,
                setting new standards in quality, sustainability, and customer satisfaction while
                contributing to the economic growth of farming communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and action we take in our business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and safety is validated through internationally recognized certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to excellence in agriculture trade and export.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-md">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{team[0].name}</h3>
                <p className="text-primary-500 font-medium mb-4">{team[0].position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{team[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our growing network of satisfied customers worldwide. Let's discuss how we can
            support your agriculture product requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-primary-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#products"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary-500 transition-colors"
            >
              View Products
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
