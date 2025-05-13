import { Cpu, Fan, Home, Thermometer, Zap, BookOpen } from 'lucide-react';
import React, { useState } from 'react';

const Sidebar = ({ activePage, setActivePage }) => {
  const navItems = [
    { id: 'einfuehrung', icon: Home, tooltip: 'Einführung', color: 'from-blue-400 to-purple-500' },
    { id: 'cpuAufbau', icon: Cpu, tooltip: 'CPU-Aufbau', color: 'from-green-400 to-teal-500' },
    { id: 'cpuFunktion', icon: Zap, tooltip: 'CPU-Funktionsweise', color: 'from-yellow-400 to-orange-500' },
    { id: 'kuehlmethoden', icon: Fan, tooltip: 'Kühlmethoden', color: 'from-cyan-300 to-indigo-600' },
    { id: 'waermemanagement', icon: Thermometer, tooltip: 'Wärmemanagement', color: ' from-amber-600 to-rose-600' },
  ];

  return (
    <div className="w-20 bg-gray-900 bg-opacity-60 backdrop-blur-sm flex flex-col items-center py-4 space-y-6 z-20 shadow-xl">
      {/* Logo */}
      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
        <BookOpen className="text-white opacity-70" size={22} />
      </div>

      <div className="flex flex-col space-y-6 items-center">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activePage === item.id;

          return (
            <div 
              key={item.id} 
              className="group relative transition-all duration-300"
            >
              <button
                onClick={() => setActivePage(item.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 
                ${isActive
                  ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                  : 'bg-gray-800 bg-opacity-60 text-gray-300 hover:bg-gray-700 hover:text-white'
                } ${isActive ? 'scale-110' : 'scale-100'}`}
              >
                <IconComponent size={isActive ? 24 : 20} />
              </button>

              {/* Tooltip */}
              <div className="absolute left-16 top-2 scale-0 transition-all rounded-lg bg-white text-gray-800 p-2 text-xs font-medium z-50 group-hover:scale-100 whitespace-nowrap shadow-lg">
                {item.tooltip}
                {/* Triangle */}
                <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 border-t-4 border-t-transparent border-r-8 border-r-white border-b-4 border-b-transparent"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;