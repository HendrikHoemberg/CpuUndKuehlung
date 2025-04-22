import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Einfuehrung from './pages/Einfuehrung';

function App() {
  const [activePage, setActivePage] = useState('einfuehrung');

  const pages = {
    einfuehrung: <Einfuehrung />,
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex flex-col flex-1">
        <TopBar title={getTitleForPage(activePage)} />
        <main className="flex-1 overflow-y-auto p-6">
          {pages[activePage]}
        </main>
      </div>
    </div>
  );
}

function getTitleForPage(page) {
  const titles = {
    einfuehrung: "Einführung",
  };
  return titles[page] || page;
}

export default App;