import { Flyer, InteractiveImage } from '../components/Flyer';

const Waermemanagement = () => {
  const pages = [
    // Heat Management Overview
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold p-4 mb-3 rounded-lg text-white bg-gradient-to-r from-amber-600 to-rose-600 shadow-md text-center">Wärmemanagement</h2>
        
        <div className="bg-white shadow-md p-4 rounded-xl mb-3">
          <h3 className="text-3xl font-bold mb-2 text-gray-800">Warum Wärmemanagement wichtig ist:</h3>
          <div className="space-y-1 text-sm">
            <div className="flex items-center bg-gray-50 p-2 rounded-lg">
              <span className="text-2xl mr-2">🚫</span>
              <p className="text-gray-800"><strong>Überhitzung vermeiden</strong> - CPUs drosseln automatisch bei ca. 95-105°C</p>
            </div>
            <div className="flex items-center bg-gray-50 p-2 rounded-lg">
              <span className="text-2xl mr-2">⚡</span>
              <p className="text-gray-800"><strong>Maximale Leistung</strong> - Höhere Taktfrequenzen bei niedrigeren Temperaturen</p>
            </div>
            <div className="flex items-center bg-gray-50 p-2 rounded-lg">
              <span className="text-2xl mr-2">⏱️</span>
              <p className="text-gray-800"><strong>Langlebigkeit</strong> - Kühlere Komponenten haben eine längere Lebensdauer</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Thermal Throttling verstehen</h3>
            <p className="text-sm text-gray-700 mb-2">
              Bei zu hohen Temperaturen reduziert die CPU automatisch ihre Leistung, um Schäden zu vermeiden.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-24 flex">
                  <div className="h-7 w-full bg-gradient-to-r from-blue-500 to-blue-500 rounded-l-lg rounded-r-lg"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="text-sm text-gray-800">Normale Leistung</p>
                  <p className="text-xs text-gray-600">CPU bei optimaler Temperatur</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-24 flex">
                  <div className="h-7 w-3/4 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-l-lg rounded-r-lg"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="text-sm text-gray-800">Leichte Drosselung</p>
                  <p className="text-xs text-gray-600">CPU bei ~90°C, 25% Leistungsverlust</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-24 flex">
                  <div className="h-7 w-1/2 bg-gradient-to-r from-red-500 to-red-500 rounded-l-lg rounded-r-lg"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="text-sm text-gray-800">Starke Drosselung</p>
                  <p className="text-xs text-gray-600">CPU bei {'>'}95°C, 50% Leistungsverlust</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-600 italic mt-2">Throttling kann die Leistung erheblich reduzieren und zu stotternden Anwendungen oder langsameren Ladezeiten führen.</p>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Wärmequellen in einer CPU</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center bg-red-50 p-2 rounded-lg">
                <div>
                  <p className="font-bold text-base text-gray-800">Stromverluste</p>
                  <p className="text-sm text-gray-700">Elektrischer Widerstand in Leiterbahnen erzeugt Wärme</p>
                </div>
              </div>
              <div className="flex items-center bg-yellow-50 p-2 rounded-lg">
                <div>
                  <p className="font-bold text-base text-gray-800">Schaltverluste</p>
                  <p className="text-sm text-gray-700">Bei jedem Wechsel zwischen 0 und 1 entsteht kurzzeitig ein Kurzschluss</p>
                </div>
              </div>
              <div className="flex items-center bg-blue-50 p-2 rounded-lg">
                <div>
                  <p className="font-bold text-base text-gray-800">Leckströme</p>
                  <p className="text-sm text-gray-700">Kleine Ströme fließen auch im "Aus"-Zustand durch Transistoren</p>
                </div>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg text-sm text-gray-700">
                <strong>Faustregel:</strong> Fast 100% der aufgenommenen elektrischen Energie einer CPU wird in Wärme umgewandelt!
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  ];

  return <Flyer pages={pages} pageId="waermemanagement" />;
};

export default Waermemanagement;