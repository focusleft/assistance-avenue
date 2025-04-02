
import HeroSection from '@/components/HeroSection';
import ChatInterface from '@/components/ChatInterface';
import { Link } from 'react-router-dom';
import { Apple } from 'lucide-react';

const Index = () => {
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
              <li><Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-gray-900">Support</Link></li>
            </ul>
          </nav>
        </header>
        
        <HeroSection />
        
        <section id="chat-section" className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Customer Support</h2>
            <p className="text-gray-600">
              Ask questions, search for solutions, or get help from our virtual assistant.
            </p>
          </div>
          
          <ChatInterface />
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

export default Index;
