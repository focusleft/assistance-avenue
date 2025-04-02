
import { Apple } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-gray-900 font-bold" : "text-gray-600 hover:text-gray-900";
  };

  return (
    <header className="py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Apple className="h-6 w-6 mr-2" />
        <h2 className="text-2xl font-semibold text-gray-900">Zatura</h2>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/support" className={isActive('/support')}>Support</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
