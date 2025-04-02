
import { Apple } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900 font-bold">About</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-gray-900">Support</Link></li>
            </ul>
          </nav>
        </header>
        
        <section className="py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">About Zatura</h1>
            
            <div className="mb-12">
              <Apple className="h-20 w-20 mx-auto mb-6" />
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 2021, Zatura is committed to creating products that empower people to do their best work and live their best lives. Our team of passionate engineers, designers, and thought leaders work tirelessly to bring innovative solutions to everyday challenges.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                We believe that technology should be both beautiful and functional, providing experiences that delight while solving real problems. Every product we create embodies this philosophy.
              </p>
              <p className="text-gray-600 text-lg">
                At Zatura, sustainability is at the heart of everything we do. From our manufacturing processes to our packaging, we're continuously working to reduce our environmental impact and create a better future for our planet.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 italic">
                "To create technology that enriches people's lives and empowers them to create, connect, and contribute in ways never before possible."
              </p>
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

export default About;
