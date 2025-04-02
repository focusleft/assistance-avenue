
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import ChatInterface from '@/components/ChatInterface';

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <Header />
        
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Insight Ticket Search</h1>
            <p className="text-blue-600 text-center mb-12">
              Get help with your Zatura products or services. Our virtual assistant is available 24/7.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <ChatInterface />
            </div>
          </div>
        </section>
        
        <footer className="py-8 border-t border-blue-100 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p>© 2023 Zatura. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-blue-700">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-700">Terms of Service</Link>
              <Link to="/support" className="hover:text-blue-700">Support</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Support;
