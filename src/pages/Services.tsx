
import { Apple } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
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
              <li><Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-gray-900 font-bold">Services</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-gray-900">Support</Link></li>
            </ul>
          </nav>
        </header>
        
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>
            
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Zatura Cloud</h3>
                <p className="text-gray-600 mb-6">
                  Store all your important files, photos, and documents securely in the cloud. 
                  Access them from any device, anywhere, anytime.
                </p>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-600 hover:underline">Learn more</a>
                  <span className="text-gray-500">Starting at $2.99/month</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Zatura Music</h3>
                <p className="text-gray-600 mb-6">
                  Stream over 75 million songs ad-free, download your favorites, and discover new music 
                  curated just for you.
                </p>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-600 hover:underline">Learn more</a>
                  <span className="text-gray-500">Starting at $9.99/month</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Zatura Care</h3>
                <p className="text-gray-600 mb-6">
                  Get priority access to Apple experts, hardware coverage, and accidental damage protection 
                  for all your Zatura devices.
                </p>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-600 hover:underline">Learn more</a>
                  <span className="text-gray-500">Starting at $14.99/month</span>
                </div>
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

export default Services;
