import { Flyer, InteractiveImage } from '../components/Flyer';

const Waermemanagement = () => {
  const pages = [
    // Heat Management Overview
    (
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Wärmemanagement</h2>
        
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <p className="text-lg mb-2 text-gray-800">
              Das effektive Management der Wärmeentwicklung ist entscheidend für die Leistung und Lebensdauer moderner CPUs.
            </p>
            <p className="text-lg text-gray-800">
              Dabei geht es nicht nur um Kühlung, sondern auch um Energieeffizienz, Temperaturüberwachung und intelligente CPU-Features.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="text-center">
              <InteractiveImage 
                emoji="🔥" 
                alt="CPU Heat" 
                description="Moderne Desktop-CPUs können Wärmeleistungen von über 250 Watt erzeugen!"
                position="left"
              />
              <p className="mt-2 text-gray-800">Thermische Herausforderungen</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Warum Wärmemanagement wichtig ist</h3>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-lg p-2 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">Leistung</h4>
              <p className="text-xs text-gray-700">CPUs drosseln automatisch ihre Leistung (Thermal Throttling), wenn kritische Temperaturen erreicht werden.</p>
            </div>
            <div className="rounded-lg p-2 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">Lebensdauer</h4>
              <p className="text-xs text-gray-700">Hohe Temperaturen können langfristig zur Degradation der CPU-Komponenten führen.</p>
            </div>
            <div className="rounded-lg p-2 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">Energieeffizienz</h4>
              <p className="text-xs text-gray-700">Besseres Wärmemanagement ermöglicht höhere Taktraten bei gleichem Energieverbrauch.</p>
            </div>
          </div>
        </div>
      </div>
    ),

    // TDP and Power Management
    (
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">TDP & Energiemanagement</h2>
        
        <div className="bg-white shadow-md p-4 rounded-xl mb-4">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Thermal Design Power (TDP)</h3>
          <div className="grid grid-cols-3 gap-4 mb-3">
            <div className="col-span-1 flex justify-center items-center">
              <div className="text-center">
                <InteractiveImage 
                  emoji="⚡" 
                  alt="TDP Concept" 
                  description="Die TDP ist ein Richtwert für Kühlerhersteller, nicht die maximale Leistungsaufnahme der CPU."
                />
              </div>
            </div>
            
            <div className="col-span-2">
              <p className="text-sm text-gray-700 mb-2">
                Die TDP gibt an, wieviel Wärme (in Watt) das Kühlsystem im Dauerbetrieb abführen können muss.
              </p>
              <ul className="list-disc list-inside text-xs text-gray-700">
                <li><b>Typische TDP-Werte:</b> 65W (Mainstream), 95-125W (High-End), 165W+ (Extreme)</li>
                <li><b>Kurzzeit-Boost:</b> Moderne CPUs können für kurze Zeit deutlich über ihre TDP hinausgehen</li>
                <li><b>Unterschiedliche Definitionen:</b> AMD und Intel messen die TDP unterschiedlich</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg p-2 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">Intel PL1/PL2</h4>
              <p className="text-xs text-gray-700">Intel definiert zwei Leistungsstufen:</p>
              <ul className="list-disc list-inside text-xs text-gray-700">
                <li><b>PL1:</b> Langzeit-TDP (z.B. 65W)</li>
                <li><b>PL2:</b> Kurzzeit-Boost (z.B. 125W)</li>
              </ul>
            </div>
            <div className="rounded-lg p-2 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">AMD PPT/TDP</h4>
              <p className="text-xs text-gray-700">AMD definiert:</p>
              <ul className="list-disc list-inside text-xs text-gray-700">
                <li><b>TDP:</b> Auf Kühler bezogener Wert</li>
                <li><b>PPT:</b> Package Power Tracking (oft 1,35× TDP)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Energiesparfunktionen</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><b>Dynamic Frequency Scaling:</b> Automatische Anpassung der Taktrate</li>
              <li><b>Core Parking:</b> Temporäres Abschalten nicht benötigter Kerne</li>
              <li><b>C-States:</b> Verschiedene Energiesparzustände der CPU</li>
              <li><b>P-States:</b> Leistungszustände mit unterschiedlichen Spannungen</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">CPU-Überwachung</h3>
            <p className="text-sm text-gray-700 mb-2">Tools zur Temperatur- und Leistungsüberwachung:</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>HWMonitor, HWiNFO</li>
              <li>Core Temp, CPU-Z</li>
              <li>Ryzen Master (AMD)</li>
              <li>Intel XTU (Intel)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    
    // Thermal Interface and Exotic Cooling
    (
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Thermische Schnittstellen & Exotische Kühlung</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-1 flex justify-center items-center">
            <div className="text-center">
              <InteractiveImage 
                emoji="🧪" 
                alt="Thermal Paste" 
                description="Hochwertige Wärmeleitpaste kann die Temperaturen um 5-10°C verbessern!"
              />
              <p className="mt-1 text-gray-800">Wärmeleitpaste</p>
            </div>
          </div>
          
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Thermische Schnittstellen</h3>
            <p className="text-sm text-gray-700 mb-2">
              Die Kontaktfläche zwischen CPU und Kühler ist entscheidend für die Wärmeübertragung.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-gray-50 p-2 rounded-lg">
                <h4 className="font-bold text-gray-800">Wärmeleitpaste</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Standard-Lösung</li>
                  <li>Einfach anzuwenden</li>
                  <li>Wärmeleitfähigkeit: 5-12 W/mK</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg">
                <h4 className="font-bold text-gray-800">Flüssigmetall</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Höchste Leistung</li>
                  <li>Elektrisch leitfähig (Risiko)</li>
                  <li>Wärmeleitfähigkeit: 70+ W/mK</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Exotische Kühlmethoden</h3>
            <div className="flex items-center mb-2">
              <div className="text-center mr-3">
                <InteractiveImage 
                  emoji="❄️" 
                  alt="Exotic Cooling Methods" 
                  description="Für World-Record-Übertaktungen werden CPUs auf bis zu -200°C gekühlt!"
                  position="left"
                />
              </div>
              <p className="text-xs text-gray-700">
                Für extreme Übertaktungen werden spezielle Kühlmethoden eingesetzt, die für den Alltagsgebrauch unpraktisch sind.
              </p>
            </div>
            <ul className="list-disc list-inside text-xs text-gray-700">
              <li><b>Phasenwechselkühlung:</b> -40°C bis -60°C</li>
              <li><b>Trockeneis (CO₂):</b> -78,5°C</li>
              <li><b>Flüssiger Stickstoff (LN₂):</b> -196°C</li>
              <li><b>Flüssiges Helium:</b> -269°C</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">CPU-seitige Optimierungen</h3>
            <p className="text-sm text-gray-700 mb-2">Moderne CPUs haben eingebaute Mechanismen zur Wärmeoptimierung:</p>
            <ul className="list-disc list-inside text-xs text-gray-700">
              <li><b>Verlöteter IHS:</b> Bessere Wärmeübertragung vom Die zum Heatspreader</li>
              <li><b>Intelligentes Boosting:</b> Fokus auf kühlere Kerne (AMD Preferred Cores)</li>
              <li><b>Chiplet-Design:</b> Verteilung der Wärme auf größere Fläche</li>
              <li><b>Adaptive Boost:</b> Automatische Anpassung je nach thermischer Kapazität</li>
            </ul>
          </div>
        </div>
      </div>
    )
  ];

  return <Flyer pages={pages} />;
};

export default Waermemanagement; 