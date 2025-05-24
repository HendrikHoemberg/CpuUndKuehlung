import { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

function StartupAnimation({ onAnimationComplete }) {
  const [animationState, setAnimationState] = useState('initial'); 
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const showCpu = setTimeout(() => {
      setAnimationState('typing');
      const startTyping = setTimeout(() => {
        const fullText = "CPU und Kühlung";
        let currentIndex = 0;
        
        const typingInterval = setInterval(() => {
          if (currentIndex <= fullText.length) {
            setDisplayText(fullText.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            const startFading = setTimeout(() => {
              setAnimationState('fading');
              const completeAnimation = setTimeout(() => {
                if (onAnimationComplete) {
                  onAnimationComplete();
                }
              }, 1500); 
              
              return () => clearTimeout(completeAnimation);
            }, 300); 
            
            return () => clearTimeout(startFading);
          }
        }, 100); 
        
        return () => clearInterval(typingInterval);
      }, 800); 
      
      return () => clearTimeout(startTyping);
    }, 300); 
    
    return () => clearTimeout(showCpu);
  }, [onAnimationComplete]);

  if (animationState === 'fading') {
    return (
      <div className="fixed inset-0 bg-black z-50 pointer-events-none flex items-center justify-center transition-opacity duration-1500 opacity-0">
        <div className="flex flex-col items-center">
          <div className="text-white opacity-0 transition-all duration-1500 ease-in-out">
            <Cpu size={100} strokeWidth={1.5} />
          </div>
          <div className="h-12 mt-2 text-white text-3xl font-bold font-mono opacity-0 transition-opacity duration-1500 ease-in-out">
            {displayText}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 pointer-events-none flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div 
          className={`text-white transition-all duration-1500 ease-in-out ${
            animationState === 'initial' ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}
        >
          <Cpu size={100} strokeWidth={1.5} />
        </div>
        
        <div 
          className={`h-12 mt-2 text-white text-3xl font-bold font-mono transition-opacity duration-1000 ease-in-out ${
            animationState === 'typing' || animationState === 'fading' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {displayText}
        </div>
      </div>
    </div>
  );
}

export default StartupAnimation;
