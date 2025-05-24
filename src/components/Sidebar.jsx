import { Cpu, Fan, Home, Thermometer, Zap, BookOpen, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Sidebar = ({ activePage, setActivePage, isMobileOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleItemClick = (pageId) => {
    setActivePage(pageId);
    if (isMobile) {
      onClose();
    }
  };

  const navItems = [
    { id: 'einfuehrung', icon: Home, tooltip: 'Einführung', color: 'from-blue-400 to-purple-500' },
    { id: 'cpuAufbau', icon: Cpu, tooltip: 'CPU-Aufbau', color: 'from-green-400 to-teal-500' },
    { id: 'cpuFunktion', icon: Zap, tooltip: 'CPU-Funktionsweise', color: 'from-yellow-400 to-orange-500' },
    { id: 'waermemanagement', icon: Thermometer, tooltip: 'Wärmemanagement', color: ' from-amber-600 to-rose-600' },
    { id: 'kuehlmethoden', icon: Fan, tooltip: 'Kühlmethoden', color: 'from-cyan-300 to-indigo-600' },
  ];

  const sidebarClasses = `
    fixed lg:static h-full transition-transform duration-300 ease-in-out z-20
    ${isMobile 
      ? `w-64 bg-gray-900 bg-opacity-95 backdrop-blur-md transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`
      : 'w-20 bg-gray-900 bg-opacity-60 backdrop-blur-sm'}
  `;

  return (
    <>
      {isMobile && isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div className={sidebarClasses}>
        {isMobile && (
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <BookOpen className="text-white" size={20} />
            </div>
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-700 text-gray-300"
              aria-label="Menü schließen"
            >
              <X size={24} />
            </button>
          </div>
        )}
        {!isMobile && (
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white ml-4 mt-4 mb-4">
            <BookOpen className="text-white opacity-70" size={22} />
          </div>
        )}

        <div className={`flex flex-col space-y-6 ${isMobile ? 'p-4' : 'items-center'}`}>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activePage === item.id;

            return (
              <div 
                key={item.id} 
                className={`group relative transition-all duration-300 ${isMobile ? 'w-full' : ''}`}
              >
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`${isMobile ? 'w-full px-4 py-3 rounded-lg flex items-center space-x-4' : 'w-12 h-12 rounded-full flex items-center justify-center'} transition-all duration-300 
                  ${isActive
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                    : 'bg-gray-800 bg-opacity-60 text-gray-300 hover:bg-gray-700 hover:text-white'
                  } ${isActive ? (isMobile ? 'pl-3' : 'scale-110') : 'scale-100'}`}
                >
                  <div>
                    <IconComponent size={isMobile ? 20 : (isActive ? 24 : 20)} />
                  </div>
                  {isMobile && (
                    <span className="text-left text-sm font-medium">{item.tooltip}</span>
                  )}
                </button>

                {/* Tooltip - Only shows on desktop */}
                {!isMobile && (
                  <div className="absolute left-16 top-2 scale-0 transition-all rounded-lg bg-white text-gray-800 p-2 text-xs font-medium z-50 group-hover:scale-100 whitespace-nowrap shadow-lg">
                    {item.tooltip}
                    <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 border-t-4 border-t-transparent border-r-8 border-r-white border-b-4 border-b-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;