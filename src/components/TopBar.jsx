import { Search } from 'lucide-react';

const TopBar = ({title}) => {
  return (
    <header className="h-16 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-between px-6 shadow-md z-10">
      <div className="space-x-4">
        <h1 className="text-2xl font-bold bg-white bg-clip-text text-transparent">{title}</h1>
      </div>

      {/* TODO: Searchbar functionality */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Suchen..."
            className="bg-white bg-opacity-10 text-white rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-opacity-15 transition-all"
          />
          <Search size={16} className="absolute left-3.5 top-2.5 text-white opacity-70" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
