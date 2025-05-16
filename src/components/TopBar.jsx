import { Search, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

const TopBar = ({ title, onMenuClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="h-16 bg-gray-900 bg-opacity-90 backdrop-blur-sm flex items-center justify-between px-4 md:px-6 shadow-md z-30">
      <div className="flex items-center space-x-4">
        {isMobile && (
          <button 
            onClick={onMenuClick}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Menü öffnen"
          >
            <Menu className="text-white" size={24} />
          </button>
        )}
        <h1 className="text-xl md:text-2xl font-bold bg-white bg-clip-text text-transparent">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default TopBar;
