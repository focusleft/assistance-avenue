
import { Apple } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path 
      ? "text-blue-800 font-bold border-b-2 border-blue-500" 
      : "text-gray-600 hover:text-blue-600";
  };

  return (
    <header className="py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Apple className="h-6 w-6 mr-2 text-blue-600" />
        <h2 className="text-2xl font-semibold text-blue-800">Zatura</h2>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/" className={`${isActive('/')} py-1`}>Home</Link></li>
          <li><Link to="/support" className={`${isActive('/support')} py-1`}>Support</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
