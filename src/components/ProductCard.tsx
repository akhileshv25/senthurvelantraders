import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  image?: string;
  specifications?: string[];
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
  specifications,
  category,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      {/* Product Image */}
      <div className="h-56 bg-gradient-to-br from-primary-500/10 to-primary-600/10 flex items-center justify-center relative overflow-hidden">
        {image ? (
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-center"
          >
            <Package className="w-20 h-20 text-primary-500 mx-auto mb-2" />
          </motion.div>
        )}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3"
        >
          <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
            {category}
          </span>
        </motion.div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Specifications */}
        {specifications && specifications.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 text-sm">Key Specifications:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {specifications.map((spec, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 flex-shrink-0"></span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
