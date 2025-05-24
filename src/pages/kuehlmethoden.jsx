import { Flyer, InteractiveImage } from '../components/Flyer';

const Kuehlmethoden = () => {
  const pages = [
    // Cooling Overview
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold p-4 mb-2 rounded-lg text-white bg-gradient-to-r from-cyan-300 to-indigo-600 shadow-md text-center">Kühlmethoden</h2>
        
        <div className="bg-white shadow-md p-4 rounded-xl mb-2">
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <div className="text-center">
              <InteractiveImage 
                img={<img src="/CpuUndKuehlung/images/AirCooling.jpg" className="w-50 h-50 object-cover rounded-lg"/>}
                alt="Air Cooling" 
                description="Luftkühlung ist kostengünstig, aber oft lauter als Alternativen."
                position="bottom"
              />
              <p className="mt-1 text-gray-800"><strong>Luftkühlung</strong></p>
            </div>
            
            <div className="text-center">
              <InteractiveImage 
                img={<img src="/CpuUndKuehlung/images/WaterCooling.jpg" className="w-50 h-50 object-cover rounded-lg"/>}
                alt="Water Cooling" 
                description="Wasserkühlungen können bis zu 35% mehr Wärme abführen als Luftkühler."
                position="bottom"
              />
              <p className="mt-1 text-gray-800"><strong>Wasserkühlung</strong></p>
            </div>
            
            <div className="text-center">
              <InteractiveImage 
                img={<img src="/CpuUndKuehlung/images/ExoticCooling.jpg" className="w-50 h-50 object-cover rounded-lg"/>}
                alt="Exotic Cooling" 
                description="Bei Übertaktungsrekorden wird oft flüssiger Stickstoff bei -196°C verwendet."
                position="bottom"
              />
              <p className="mt-1 text-gray-800"><strong>Exotische Kühlung</strong></p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Vor- und Nachteile verschiedener Kühlmethoden</h3>
            <p className="text-sm text-gray-700 mb-2">
              Jede Kühlmethode hat ihre Stärken und Schwächen, die je nach Anwendungsfall relevant sind.
            </p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center bg-gray-50 p-2 rounded-lg">
                <span className="text-xl mr-2">💨</span>
                <p className="text-gray-800"><strong>Luftkühlung</strong> - Kosteneffizient und zuverlässig, aber oft lauter und weniger effektiv bei Hochleistungs-CPUs</p>
              </div>
              <div className="flex items-center bg-gray-50 p-2 rounded-lg">
                <span className="text-xl mr-2">💧</span>
                <p className="text-gray-800"><strong>Wasserkühlung</strong> - Leiser und leistungsfähiger, aber teurer und mit Ausfallrisiko durch Leckagen</p>
              </div>
              <div className="flex items-center bg-gray-50 p-2 rounded-lg">
                <span className="text-xl mr-2">❄️</span>
                <p className="text-gray-800"><strong>Exotische Kühlung</strong> - Extreme Kühlleistung für Übertaktung, aber unpraktisch für den Dauerbetrieb</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Typische Temperaturbereiche</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-28 flex items-center justify-center">
                  <div className="h-5 w-full bg-gradient-to-r from-green-500 to-yellow-500 rounded-lg"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="font-bold text-gray-800 text-sm">30°C - 60°C</p>
                  <p className="text-xs text-gray-700">Ideal im Leerlauf und bei geringer Last</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-28 flex items-center justify-center">
                  <div className="h-5 w-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="font-bold text-gray-800 text-sm">60°C - 80°C</p>
                  <p className="text-xs text-gray-700">Normal unter Last (Gaming, Rendering)</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-28 flex items-center justify-center">
                  <div className="h-5 w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-lg"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="font-bold text-gray-800 text-sm">80°C - 90°C</p>
                  <p className="text-xs text-gray-700">Heiß, aber noch akzeptabel bei Volllast</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-28 flex items-center justify-center">
                  <div className="h-5 w-full bg-red-600 rounded-lg"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="font-bold text-gray-800 text-sm">90°C+</p>
                  <p className="text-xs text-gray-700">Kritisch, Drosselung droht, Kühlung überprüfen!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  ];

  return <Flyer pages={pages} pageId="kuehlmethoden" />;
};

export default Kuehlmethoden;