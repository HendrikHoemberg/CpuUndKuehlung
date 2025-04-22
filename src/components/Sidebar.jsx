import { BookOpenCheck, Cpu, Fan, Home, LayoutDashboard, Menu, Thermometer, Zap } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Sidebar = ({ activePage, setActivePage, sidebarMode, setSidebarMode }) => {
  const [showModeSwitcher, setShowModeSwitcher] = useState(false);
  const [navItems, setNavItems] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const presentationNav = [
    { id: 'einfuehrung', icon: Home, tooltip: 'Einführung' },
    { id: 'cpuAufbau', icon: Cpu, tooltip: 'CPU-Aufbau' },
    { id: 'cpuFunktion', icon: Zap, tooltip: 'CPU-Funktionsweise' },
    { id: 'kuehlmethoden', icon: Fan, tooltip: 'Kühlmethoden' },
    { id: 'waermemanagement', icon: Thermometer, tooltip: 'Wärmemanagement' },
  ];

  const altNav = [
    {
      id: 'praesentation',
      icon: LayoutDashboard,
      tooltip: 'Präsentation',
      onClick: () => {
        setSidebarMode('praesentation');
        setShowModeSwitcher(false);
      },
    },
    {
      id: 'wissen',
      icon: BookOpenCheck,
      tooltip: 'Teste dein Wissen',
      onClick: () => {
        setSidebarMode('wissen');
        setShowModeSwitcher(false);
      },
    },
  ];

  const isPresentationMode = sidebarMode === 'praesentation';

  // Handle navigation changes with animation
  useEffect(() => {
    const currentNav = showModeSwitcher ? altNav : isPresentationMode ? presentationNav : altNav;
    
    if (navItems.length > 0 && navItems !== currentNav) {
      // Start transition
      setIsTransitioning(true);
      
      // After a brief delay, update the navigation items
      setTimeout(() => {
        setNavItems(currentNav);
        // Allow time for the items to fade back in
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 100);
    } else {
      // Initial load - no animation needed
      setNavItems(currentNav);
    }
  }, [showModeSwitcher, isPresentationMode]);

  return (
    <div className="w-20 bg-gray-800 flex flex-col items-center py-2 space-y-4 z-11">
      {/* Burger Menu Button */}
      <button
        onClick={() => {
          if (isPresentationMode) {
            setShowModeSwitcher((prev) => !prev);
          }
        }}
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-gray-600 hover:text-gray-200 transition-all duration-200"
      >
        <Menu size={32} />
      </button>

      <div className="flex flex-col space-y-4 items-center">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive =
            showModeSwitcher
              ? sidebarMode === item.id
              : activePage === item.id;

          return (
            <div 
              key={item.id} 
              className={`group relative transition-all duration-300 ${
                isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
              }`}
            >
              <button
                onClick={() =>
                  item.onClick ? item.onClick() : setActivePage(item.id)
                }
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? 'bg-gray-100 text-gray-900 w-14 h-14'
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-gray-200'
                }`}
              >
                <IconComponent size={isActive ? 28 : 24} />
              </button>

              {/* Tooltip */}
              <div className="absolute left-16 top-2 scale-0 transition-all rounded bg-gray-400 p-2 text-xs text-white z-50 group-hover:scale-100 whitespace-nowrap">
                {item.tooltip}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;