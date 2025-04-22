import { Home, Cpu, Thermometer, Fan, Zap } from 'lucide-react';

const Sidebar = ({ activePage, setActivePage }) => {
  const navItems = [
    { id: 'einfuehrung', icon: Home, tooltip: 'Einführung' },
    { id: 'cpuAufbau', icon: Cpu, tooltip: 'CPU-Aufbau' },
    { id: 'cpuFunktion', icon: Zap, tooltip: 'CPU-Funktionsweise' },
    { id: 'kuehlmethoden', icon: Fan, tooltip: 'Kühlmethoden' },
    { id: 'waermemanagement', icon: Thermometer, tooltip: 'Wärmemanagement' }
  ];

  return (
    <div className="w-20 bg-gray-800 flex flex-col items-center py-4 space-y-6">
      <div className="flex flex-col space-y-4 items-center mt-[6vh]">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activePage === item.id;
          return (
            <div key={item.id} className="group relative">
              <button
                onClick={() => setActivePage(item.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? 'bg-gray-100 text-gray-900 w-14 h-14'
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-gray-200'
                }`}
              >
                <IconComponent size={isActive ? 28 : 24} />
              </button>

              {/* Tooltip */}
              <div className="absolute left-17 top-2 scale-0 transition-all rounded bg-gray-400 p-2 text-xs text-white z-50 group-hover:scale-100 whitespace-nowrap">
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
