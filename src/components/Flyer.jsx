import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Flyer = ({ pages, title }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mx-auto relative w-full h-full max-h-screen">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col w-full h-full">
        {/* Header */}
        <div className="p-4 border-b">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        
        {/* Content area - using flex-grow to fill available space */}
        <div className="relative flex flex-col flex-grow overflow-hidden">
          {/* Flyer content */}
          <div className="bg-white text-gray-900 flex-grow relative">
            <div 
              className="h-full transition-transform duration-700"
              style={{ transform: `rotateY(${currentPage * -10}deg) translateZ(-${currentPage * 5}px)` }}
            >
              <div className="p-8 h-full overflow-auto">
                {pages[currentPage]}
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            {currentPage > 0 && (
              <button 
                onClick={goToPreviousPage}
                className="bg-gray-700 hover:bg-gray-500 text-white rounded-r-full p-2 shadow-lg"
                aria-label="Previous page"
              >
                <ChevronLeft size={24} />
              </button>
            )}
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            {currentPage < pages.length - 1 && (
              <button 
                onClick={goToNextPage}
                className="bg-gray-700 hover:bg-gray-500 text-white rounded-l-full p-2 shadow-lg"
                aria-label="Next page"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>
          
          {/* Page indicator - positioned with padding to ensure visibility */}
          {pages.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10 pb-2">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentPage === index ? 'bg-green-600' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flyer;