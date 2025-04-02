
import ChatInterface from '@/components/ChatInterface';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <Header />
        
        <section id="chat-section" className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">Insight Ticket Search</h2>
            <p className="text-blue-600">
              Ask questions, search for solutions, or get help from our virtual assistant.
            </p>
          </div>
          
          <ChatInterface />
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

export default Index;
