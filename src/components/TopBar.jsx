import { Search, Bell, Settings } from 'lucide-react';

const TopBar = ({ title }) => {
  return (
    <header className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-3">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Suchen..."
            className="bg-gray-700 text-gray-200 rounded-md py-1.5 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search size={18} className="absolute left-3 top-2 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;