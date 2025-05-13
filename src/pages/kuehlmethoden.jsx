import { Flyer, InteractiveImage } from '../components/Flyer';

const Kuehlmethoden = () => {
  const pages = [
    // Cooling Overview
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Kühlmethoden</h2>
        
        <div className="grid grid-cols-2 gap-4 items-center mb-2">
          <div>
            <p className="text-lg mb-2 text-gray-800">
              Mit steigender CPU-Leistung nimmt auch die Abwärme zu. Moderne Kühlsysteme sorgen für optimale Betriebstemperaturen und maximale Leistung.
            </p>
            <p className="text-lg text-gray-800">
              Verschiedene Kühlmethoden bieten unterschiedliche Vor- und Nachteile in Bezug auf Effizienz, Lautstärke und Kosten.
            </p>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-4 rounded-xl mb-2">
          <h3 className="text-xl font-bold mb-3 text-gray-800">Kühlungsarten im Überblick</h3>
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <div className="text-center">
              <InteractiveImage 
                emoji="🌡️" 
                alt="Air Cooling" 
                description="Luftkühlung ist kostengünstig, aber oft lauter als Alternativen."
              />
              <p className="mt-1 text-gray-800">Luftkühlung</p>
              <p className="text-xs text-gray-700">Einfach & kostengünstig</p>
            </div>
            
            <div className="text-center">
              <InteractiveImage 
                emoji="💧" 
                alt="Water Cooling" 
                description="Wasserkühlungen können bis zu 35% mehr Wärme abführen als Luftkühler."
              />
              <p className="mt-1 text-gray-800">Wasserkühlung</p>
              <p className="text-xs text-gray-700">Leiser & effizienter</p>
            </div>
            
            <div className="text-center">
              <InteractiveImage 
                emoji="❄️" 
                alt="Exotic Cooling" 
                description="Bei Übertaktungsrekorden wird oft flüssiger Stickstoff bei -196°C verwendet."
              />
              <p className="mt-1 text-gray-800">Exotische Kühlung</p>
              <p className="text-xs text-gray-700">Für Extremsituationen</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Warum kühlen wir die CPU?</h3>
            <p className="text-sm text-gray-700 mb-2">
              Eine CPU erzeugt während des Betriebs Wärme aufgrund des elektrischen Widerstands in den Transistoren. Diese Wärme muss abgeführt werden, um:
            </p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center bg-red-50 p-2 rounded-lg">
                <span className="text-xl mr-2">🚫</span>
                <p className="text-gray-800"><strong>Überhitzung zu vermeiden</strong> - CPUs drosseln automatisch bei ca. 95-105°C</p>
              </div>
              <div className="flex items-center bg-blue-50 p-2 rounded-lg">
                <span className="text-xl mr-2">⚡</span>
                <p className="text-gray-800"><strong>Maximale Leistung</strong> - Höhere Taktfrequenzen bei niedrigeren Temperaturen</p>
              </div>
              <div className="flex items-center bg-green-50 p-2 rounded-lg">
                <span className="text-xl mr-2">⏱️</span>
                <p className="text-gray-800"><strong>Langlebigkeit</strong> - Kühlere Komponenten haben eine längere Lebensdauer</p>
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

  return <Flyer pages={pages} />;
};

export default Kuehlmethoden; 