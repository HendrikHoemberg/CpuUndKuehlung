import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Einfuehrung from './pages/Einfuehrung';
import CpuAufbau from './pages/cpuAufbau';
import CpuFunktion from './pages/cpuFunktion';
import Kuehlmethoden from './pages/kuehlmethoden';
import Waermemanagement from './pages/waermemanagement';

function App() {
  const [activePage, setActivePage] = useState('einfuehrung');

  const pages = {
    einfuehrung: <Einfuehrung activePage={activePage} setActivePage={setActivePage} />,
    cpuAufbau: <CpuAufbau />,
    cpuFunktion: <CpuFunktion />,
    kuehlmethoden: <Kuehlmethoden />,
    waermemanagement: <Waermemanagement />
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white overflow-hidden relative">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <div className="flex flex-col flex-1 z-10">
        <TopBar
          title={getTitleForPage(activePage)}
        />
        <main className="flex-1 overflow-hidden p-6">
          <div className="h-full">
            {pages[activePage]}
          </div>
        </main>
      </div>

      {/* Decorative Elements (do not block pointer events) */}
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