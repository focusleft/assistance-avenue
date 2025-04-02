
import { Apple } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <header className="py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Apple className="h-6 w-6 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Zatura</h2>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-gray-900 font-bold">Products</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-gray-900">Support</Link></li>
            </ul>
          </nav>
        </header>
        
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-10 text-center">Our Products</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Zatura Phone</h3>
                <p className="text-gray-600 mb-4">Our flagship smartphone with cutting-edge technology.</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Zatura Tablet</h3>
                <p className="text-gray-600 mb-4">The perfect balance of power and portability.</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Zatura Laptop</h3>
                <p className="text-gray-600 mb-4">Professional-grade performance in an elegant design.</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Zatura Watch</h3>
                <p className="text-gray-600 mb-4">Keep connected with style and functionality.</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
              </div>
            </div>
          </div>
        </section>
        
        <footer className="py-8 border-t border-gray-200 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p>© 2023 Zatura. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-900">Terms of Service</Link>
              <Link to="/support" className="hover:text-gray-900">Support</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Products;
