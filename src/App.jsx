import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Einfuehrung from './pages/Einfuehrung';
import CpuAufbau from './pages/cpuAufbau';
import CpuFunktion from './pages/cpuFunktion';
import Kuehlmethoden from './pages/kuehlmethoden';
import Waermemanagement from './pages/waermemanagement';

function App() {
  const [activePage, setActivePage] = useState('einfuehrung');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const pages = {
    einfuehrung: <Einfuehrung activePage={activePage} setActivePage={setActivePage} />,
    cpuAufbau: <CpuAufbau />,
    cpuFunktion: <CpuFunktion />,
    kuehlmethoden: <Kuehlmethoden />,
    waermemanagement: <Waermemanagement />
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white relative">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isMobileOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
      <div className="flex flex-col flex-1 z-10 lg:overflow-hidden">
        <TopBar
          title={getTitleForPage(activePage)}
          onMenuClick={toggleMobileMenu}
        />
        <main className="flex-1 p-4 md:p-6 lg:overflow-hidden">
          <div className="w-full lg:h-full">
            {pages[activePage]}
          </div>
        </main>
      </div>
      
      <div className="fixed top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-purple-500 opacity-10 rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-blue-500 opacity-10 rounded-full pointer-events-none z-0"></div>
    </div>
  );
}

function getTitleForPage(page) {
  const titles = {
    einfuehrung: "Einführung in CPU und Kühlung",
    cpuAufbau: "CPU-Aufbau",
    cpuFunktion: "CPU-Funktionsweise",
    kuehlmethoden: "Kühlmethoden",
    waermemanagement: "Wärmemanagement"
  };
  return titles[page] || page;
}

export default App;