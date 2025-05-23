import { Flyer, InteractiveImage } from '../components/Flyer';

import { Cpu, Fan, Thermometer, Zap } from 'lucide-react';

const navItems = [
  { id: 'cpuAufbau', icon: Cpu, label: 'CPU-Aufbau', color: 'from-green-400 to-teal-500' },
  { id: 'cpuFunktion', icon: Zap, label: 'CPU-Funktionsweise', color: 'from-yellow-400 to-orange-500' },
  { id: 'kuehlmethoden', icon: Fan, label: 'Kühlmethoden', color: 'from-cyan-300 to-indigo-600' },
  { id: 'waermemanagement', icon: Thermometer, label: 'Wärmemanagement', color: 'from-amber-600 to-rose-600' },
];

const Einfuehrung = ({ activePage, setActivePage }) => {
  const pages = [
    (
      <div className="flex flex-col space-y-4 h-full">
        <div className="bg-white shadow-md p-5 rounded-xl mt-2">
          <h3 className="font-bold text-3xl mb-5 text-gray-800">Inhalt:</h3>
          <ul className="grid grid-cols-2 gap-6 text-gray-800 mb-3 text-lg">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activePage === item.id;
              return (
                <li
                  key={item.id}
                  className="flex items-center cursor-pointer group"
                  onClick={() => setActivePage(item.id)}
                >
                  <span
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-lg transition-all duration-300 bg-gradient-to-r ${item.color} text-white ${isActive ? 'scale-110 ring-4 ring-white/30' : 'opacity-90 group-hover:scale-105'}`}
                  >
                    <IconComponent size={26} />
                  </span>
                  <span className={`font-semibold transition-colors duration-200 ${isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-4 mt-2 h-full">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-bold text-2xl mb-4 text-gray-800">Was ist eine CPU?</h3>
            <p className="text-lg text-gray-700 mb-4">
              Die Central Processing Unit (CPU) ist die primäre Recheneinheit eines Computers. Sie führt Programmanweisungen aus, verarbeitet Daten und koordiniert die meisten anderen Komponenten des Systems.
            </p>
            
          </div>

          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-bold text-2xl mb-4 text-gray-800">Warum ist Kühlung wichtig?</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-xl text-green-800 font-bold">Effektive Kühlung ermöglicht:</p>
                <ul className="list-disc list-inside text-base text-gray-700">
                  <li>Maximale Leistung</li>
                  <li>Übertaktungspotential</li>
                  <li>Längere Lebensdauer</li>
                  <li>Leiseren Betrieb</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-xl text-red-800 font-bold">Zu hohe Temperaturen führen zu:</p>
                <ul className="list-disc list-inside text-base text-gray-700">
                  <li>Thermal Throttling (Leistungsverlust)</li>
                  <li>Instabilität des Systems</li>
                  <li>Verkürzter Lebensdauer</li>
                  <li>Dauerhaften Schäden</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  ];


  return <Flyer pages={pages} pageId="einfuehrung" title="Einführung" />;
};

export default Einfuehrung;
