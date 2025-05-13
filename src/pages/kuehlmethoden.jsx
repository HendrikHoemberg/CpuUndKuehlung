import { Flyer, InteractiveImage } from '../components/Flyer';

const Kuehlmethoden = () => {
  const pages = [
    // Cooling Overview
    (
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Kühlmethoden</h2>
        
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <p className="text-lg mb-2 text-gray-800">
              Mit steigender CPU-Leistung nimmt auch die Abwärme zu. Moderne Kühlsysteme sorgen für optimale Betriebstemperaturen und maximale Leistung.
            </p>
            <p className="text-lg text-gray-800">
              Verschiedene Kühlmethoden bieten unterschiedliche Vor- und Nachteile in Bezug auf Effizienz, Lautstärke und Kosten.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="text-center">
              <InteractiveImage 
                emoji="❄️" 
                alt="CPU Cooling" 
                description="Ohne angemessene Kühlung können CPUs Temperaturen von über 100°C erreichen und sich abschalten." 
                position="right"
              />
              <p className="mt-2 text-gray-800">Effektive Kühlung ist essentiell</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-4 rounded-xl">
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
      </div>
    ),
    
    // Air Cooling Details
    (
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Luftkühlung</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-1 flex justify-center items-center">
            <div className="text-center">
              <InteractiveImage 
                emoji="🌬️" 
                alt="CPU Air Cooler" 
                description="Hochwertige Luftkühler können bis zu 250W Wärme abführen!" 
              />
              <p className="mt-1 text-gray-800">Tower-Kühler</p>
            </div>
          </div>
          
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Funktionsprinzip</h3>
            <p className="text-sm text-gray-700 mb-2">
              Luftkühler übertragen die Wärme der CPU über Heatpipes an Kühllamellen, von wo sie durch Luftstrom abgeführt wird.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-2 rounded-lg text-sm">
                <h4 className="font-bold text-gray-800">Vorteile</h4>
                <ul className="list-disc list-inside text-gray-700 text-xs">
                  <li>Kostengünstig</li>
                  <li>Zuverlässig</li>
                  <li>Einfache Installation</li>
                  <li>Keine Auslaufgefahr</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg text-sm">
                <h4 className="font-bold text-gray-800">Nachteile</h4>
                <ul className="list-disc list-inside text-gray-700 text-xs">
                  <li>Oft lauter</li>
                  <li>Weniger effizient</li>
                  <li>Größerer Platzbedarf</li>
                  <li>Staubaufbau</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Komponenten eines Luftkühlers</h3>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-lg p-2 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">Heatpipes</h4>
              <p className="text-xs text-gray-700">Kupfer- oder Aluminiumröhren mit Kühlflüssigkeit, die Wärme effizient vom CPU-Die zu den Lamellen transportieren.</p>
            </div>
            <div className="rounded-lg p-2 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">Kühlkörper</h4>
              <p className="text-xs text-gray-700">Lamellen mit großer Oberfläche zur Wärmeabgabe an die Umgebungsluft.</p>
            </div>
            <div className="rounded-lg p-2 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">Lüfter</h4>
              <p className="text-xs text-gray-700">120mm oder 140mm Luftbeweger, die kühle Luft durch den Kühlkörper leiten.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    
    // Water Cooling Details
    (
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Wasserkühlung</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-1 flex justify-center items-center">
            <div className="text-center">
              <InteractiveImage 
                emoji="💧" 
                alt="AIO Water Cooler" 
                description="AIOs (All-In-One) sind wartungsfreie, vorgefüllte Wasserkühlsysteme." 
              />
              <p className="mt-1 text-gray-800">AIO-Wasserkühlung</p>
            </div>
          </div>
          
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Funktionsprinzip</h3>
            <p className="text-sm text-gray-700 mb-2">
              Wasserkühlungen nutzen die hohe Wärmekapazität von Wasser, um Wärme von der CPU abzuführen und an einem entfernten Radiator abzugeben.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-2 rounded-lg text-sm">
                <h4 className="font-bold text-gray-800">Vorteile</h4>
                <ul className="list-disc list-inside text-gray-700 text-xs">
                  <li>Höhere Kühlleistung</li>
                  <li>Meist leiser</li>
                  <li>Platzsparend am CPU-Sockel</li>
                  <li>Optisch ansprechend</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg text-sm">
                <h4 className="font-bold text-gray-800">Nachteile</h4>
                <ul className="list-disc list-inside text-gray-700 text-xs">
                  <li>Teurer</li>
                  <li>Auslaufgefahr (bei Custom-Loops)</li>
                  <li>Pumpengeräusche möglich</li>
                  <li>Kürzere Lebensdauer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Arten von Wasserkühlungen</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg p-2 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">AIO (All-In-One)</h4>
              <p className="text-xs text-gray-700">Geschlossene, vorgefertigte Systeme, die einfach zu installieren sind und keine Wartung benötigen.</p>
              <p className="text-xs text-gray-700 mt-1">Radiatorgrößen: 120mm, 240mm, 280mm, 360mm</p>
            </div>
            <div className="rounded-lg p-2 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">Custom Loop</h4>
              <p className="text-xs text-gray-700">Individuell zusammengestellte Systeme mit separaten Komponenten für maximale Leistung und Anpassbarkeit.</p>
              <p className="text-xs text-gray-700 mt-1">Komponenten: CPU-Block, GPU-Block, Pumpe, Ausgleichsbehälter, Radiatoren, Schläuche</p>
            </div>
          </div>
        </div>
      </div>
    )
  ];

  return <Flyer pages={pages} />;
};

export default Kuehlmethoden; 