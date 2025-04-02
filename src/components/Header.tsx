
import { Apple, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  
  const isActive = (path: string) => {
    return location.pathname === path 
      ? "font-bold border-b-2 border-primary" 
      : "text-foreground/70 hover:text-primary";
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Apple className="h-6 w-6 mr-2 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">Zatura</h2>
      </div>
      <div className="flex items-center gap-6">
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className={`${isActive('/')} py-1`}>Home</Link></li>
          </ul>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
          aria-label="Toggle theme"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
