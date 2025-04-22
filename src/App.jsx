import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Einfuehrung from './pages/Einfuehrung';

function App() {
  const [activePage, setActivePage] = useState('einfuehrung');
  const [sidebarMode, setSidebarMode] = useState('praesentation'); // or 'wissen'

  const pages = {
    einfuehrung: <Einfuehrung />,
    wissen: <div>Teste dein Wissen</div>, // placeholder for your quiz content
  };

  const displayedPage = activePage;

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar
        activePage={displayedPage}
        setActivePage={setActivePage}
        sidebarMode={sidebarMode}
        setSidebarMode={setSidebarMode}
      />
      <div className="flex flex-col flex-1">
        <TopBar
          title={getTitleForPage(displayedPage)}
          sidebarMode={sidebarMode}
          setSidebarMode={setSidebarMode}
        />
        <main className="flex-1 overflow-y-auto p-6">
          {pages[displayedPage]}
        </main>
      </div>
    </div>
  );
}

function getTitleForPage(page) {
  const titles = {
    einfuehrung: "Einführung",
    wissen: "Teste dein Wissen",
  };
  return titles[page] || page;
}


export default App;