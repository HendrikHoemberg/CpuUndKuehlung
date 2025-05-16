import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InteractiveImage = ({ emoji, alt, description, position = "top" }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const positionClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2"
  };
  
  return (
    <div className="relative inline-block group" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="text-6xl cursor-pointer transition-transform duration-300 hover:scale-110 interactive-emoji">
        {emoji}
      </div>
      
      {/* Thought bubble */}
      {isHovering && (
        <div className={`absolute ${positionClasses[position]} w-48 bg-white text-gray-800 rounded-2xl p-3 shadow-lg 
          z-50 transition-all duration-300 scale-in thought-bubble border border-gray-200`}>
          <div className="text-sm font-medium text-gray-700">{description}</div>
          {/* Image */}
        </div>
      )}
    </div>
  );
};

const Flyer = ({ pages, title }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const totalPages = pages.length;
  
  // Detect mobile screens
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        goToNextPage();
      } else if (event.key === 'ArrowLeft') {
        goToPreviousPage();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  // Color themes
  const colorThemes = [
    { text: "text-gray-800", accent: "bg-blue-500" },
    { text: "text-gray-800", accent: "bg-green-500" },
    { text: "text-gray-800", accent: "bg-orange-500" },
    { text: "text-gray-800", accent: "bg-purple-500" },
    { text: "text-gray-800", accent: "bg-red-500" },
  ];
  
  const theme = colorThemes[currentPage % colorThemes.length];
  
  return (
    <div className="mx-auto relative w-full h-full">
      <div className={`rounded-xl shadow-xl overflow-hidden flex flex-col w-full h-full max-h-[calc(100vh-8rem)] md:max-h-full
                      bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 ${theme.text} transition-all duration-500 relative
                      ${isFlipping ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
        {/* Transparency overlay */}
        <div className="absolute inset-0 bg-white opacity-20 pointer-events-none rounded-xl z-0" />
        {/* Content area */}
        <div className="relative flex flex-col flex-grow overflow-hidden p-4 sm:p-6 md:p-8">
          {/* Flyer content */}
          <div className="flex-grow relative z-10 overflow-hidden">
            <div className="h-full overflow-hidden">
              <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar pb-4">
                <div className={`flyer-content ${isMobile ? 'mobile-view' : ''}`}>
                  {pages[currentPage]}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between mt-3 md:mt-4">
            <button 
              onClick={goToPreviousPage}
              disabled={currentPage === 0}
              className={`rounded-full ${isMobile ? 'p-1.5' : 'p-2'} transition-all ${currentPage === 0 ? 'opacity-0 cursor-default' : 'opacity-100 hover:scale-110'} 
                         ${theme.accent} text-white shadow-lg flex items-center justify-center`}
              aria-label="Previous page"
            >
              <ChevronLeft size={isMobile ? 20 : 24} />
            </button>
            
            {totalPages > 1 && (
              <div className="flex space-x-2">
                {pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`${isMobile ? 'w-2.5 h-2.5' : 'w-3 h-3'} rounded-full transition-all duration-300 hover:scale-125
                      ${currentPage === index ? theme.accent : 'bg-gray-300'}`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            )}
            
            <button 
              onClick={goToNextPage}
              disabled={currentPage === pages.length - 1}
              className={`rounded-full ${isMobile ? 'p-1.5' : 'p-2'} transition-all ${currentPage === pages.length - 1 ? 'opacity-0 cursor-default' : 'opacity-100 hover:scale-110'} 
                        ${theme.accent} text-white shadow-lg flex items-center justify-center`}
              aria-label="Next page"
            >
              <ChevronRight size={isMobile ? 20 : 24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Flyer, InteractiveImage };
export default Flyer;