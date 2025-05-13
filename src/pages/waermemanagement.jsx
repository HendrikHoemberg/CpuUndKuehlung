import { Flyer, InteractiveImage } from '../components/Flyer';

const Waermemanagement = () => {
  const pages = [
    // Heat Management Overview
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Wärmemanagement</h2>
        
        <div className="grid grid-cols-2 gap-4 items-center mb-2">
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
        
        <div className="bg-white shadow-md p-4 rounded-xl mb-2">
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
        
        <div className="grid grid-cols-2 gap-4 mb-2">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Thermal Throttling verstehen</h3>
            <p className="text-sm text-gray-700 mb-2">
              Bei zu hohen Temperaturen reduziert die CPU automatisch ihre Leistung, um Schäden zu vermeiden.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-24 flex justify-center">
                  <div className="h-6 w-full bg-gradient-to-r from-blue-500 to-blue-500 rounded-l-lg"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="text-sm text-gray-800">Normale Leistung</p>
                  <p className="text-xs text-gray-600">CPU bei optimaler Temperatur</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-24 flex justify-center">
                  <div className="h-6 w-3/4 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-l-lg"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="text-sm text-gray-800">Leichte Drosselung</p>
                  <p className="text-xs text-gray-600">CPU bei ~90°C, 25% Leistungsverlust</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-24 flex justify-center">
                  <div className="h-6 w-1/2 bg-gradient-to-r from-red-500 to-red-500 rounded-l-lg"></div>
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
                <span className="text-xl mr-2">⚡</span>
                <div>
                  <p className="font-bold text-gray-800">Stromverluste (I²R)</p>
                  <p className="text-xs text-gray-700">Elektrischer Widerstand in Leiterbahnen erzeugt Wärme</p>
                </div>
              </div>
              <div className="flex items-center bg-yellow-50 p-2 rounded-lg">
                <span className="text-xl mr-2">🔄</span>
                <div>
                  <p className="font-bold text-gray-800">Schaltverluste</p>
                  <p className="text-xs text-gray-700">Bei jedem Wechsel zwischen 0 und 1 entsteht kurzzeitig ein Kurzschluss</p>
                </div>
              </div>
              <div className="flex items-center bg-blue-50 p-2 rounded-lg">
                <span className="text-xl mr-2">📱</span>
                <div>
                  <p className="font-bold text-gray-800">Leckströme</p>
                  <p className="text-xs text-gray-700">Kleine Ströme fließen auch im "Aus"-Zustand durch Transistoren</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <div className="bg-gray-50 p-2 rounded-lg text-xs text-gray-700 text-center max-w-md">
                <strong>Faustregel:</strong> Fast 100% der aufgenommenen elektrischen Energie einer CPU wird in Wärme umgewandelt!
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Übertaktung & Unterspannung</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="font-bold text-gray-800 text-sm">Übertaktung (OC)</p>
              <p className="text-xs text-gray-700">Erhöhung der CPU-Frequenz über die Herstellerspezifikation</p>
              <ul className="list-disc list-inside text-xs text-gray-700 pl-2">
                <li>Erhöhte Leistung</li>
                <li>Stärkere Hitzeentwicklung</li>
                <li>Benötigt bessere Kühlung</li>
                <li>Kann Lebensdauer verkürzen</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-gray-800 text-sm">Undervolting (UV)</p>
              <p className="text-xs text-gray-700">Reduzierung der CPU-Spannung bei gleichbleibender Frequenz</p>
              <ul className="list-disc list-inside text-xs text-gray-700 pl-2">
                <li>Weniger Wärmeentwicklung</li>
                <li>Bessere Effizienz</li>
                <li>Geringere Lautstärke</li>
                <li>Potentiell länger haltbare Batterie</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    // TDP and Power Management
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">TDP & Energiemanagement</h2>
        
        <div className="bg-white shadow-md p-4 rounded-xl mb-3">
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
        
        <div className="grid grid-cols-2 gap-4 mb-3">
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
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">C-States erklärt</h3>
            <p className="text-sm text-gray-700 mb-2">
              C-States sind Energiesparmodi, die unterschiedliche Komponenten der CPU deaktivieren:
            </p>
            <div className="space-y-1">
              <div className="flex items-center">
                <div className="w-14 text-center font-bold text-sm">C0</div>
                <div className="flex-1 text-xs bg-red-100 p-1 rounded">
                  Aktiver Zustand - CPU führt Befehle aus
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-14 text-center font-bold text-sm">C1</div>
                <div className="flex-1 text-xs bg-orange-100 p-1 rounded">
                  Halt - CPU macht nichts, aber alle Schaltkreise sind aktiv
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-14 text-center font-bold text-sm">C3</div>
                <div className="flex-1 text-xs bg-yellow-100 p-1 rounded">
                  Sleep - Cache wird beibehalten, aber nicht aktualisiert
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-14 text-center font-bold text-sm">C6</div>
                <div className="flex-1 text-xs bg-green-100 p-1 rounded">
                  Deep Power Down - CPU-Zustand wird gespeichert, Kern stromlos
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-14 text-center font-bold text-sm">C10</div>
                <div className="flex-1 text-xs bg-blue-100 p-1 rounded">
                  Tiefster Schlaf - Alles abgeschaltet außer Weckmechanismen
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-600 italic mt-2">Tiefere C-States sparen mehr Energie, benötigen aber mehr Zeit zum Aufwachen.</p>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Boosting-Technologien</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center bg-blue-50 p-2 rounded-lg">
                <span className="text-xl mr-2">🚀</span>
                <div>
                  <p className="font-bold text-gray-800">Intel Turbo Boost</p>
                  <p className="text-xs text-gray-700">Erhöht den Takt einzelner Kerne bei Bedarf (bis 5,8 GHz)</p>
                </div>
              </div>
              <div className="flex items-center bg-red-50 p-2 rounded-lg">
                <span className="text-xl mr-2">🚀</span>
                <div>
                  <p className="font-bold text-gray-800">AMD Precision Boost</p>
                  <p className="text-xs text-gray-700">Dynamische Taktanpassung basierend auf Auslastung und Temperaturen</p>
                </div>
              </div>
              <div className="flex items-center bg-green-50 p-2 rounded-lg">
                <span className="text-xl mr-2">🎯</span>
                <div>
                  <p className="font-bold text-gray-800">Favorisierte Kerne</p>
                  <p className="text-xs text-gray-700">AMD (Preferred Cores) und Intel (Favored Cores) priorisieren die besten Kerne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    // Thermal Interface and Exotic Cooling
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Thermische Schnittstellen & Exotische Kühlung</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-3">
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
        
        <div className="grid grid-cols-2 gap-4 mb-3">
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
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Auftragen von Wärmeleitpaste</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
                <p className="font-bold text-gray-800 text-sm">Erbsen-Methode</p>
                <div className="text-xl my-1">⚪</div>
                <p className="text-xs text-gray-700 text-center">Kleine Menge in der Mitte, verteilt sich beim Aufsetzen des Kühlers</p>
                <p className="text-xs text-green-700 italic">Empfehlung für Einsteiger</p>
              </div>
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
                <p className="font-bold text-gray-800 text-sm">X-Methode</p>
                <div className="text-xl my-1">❌</div>
                <p className="text-xs text-gray-700 text-center">X-förmiges Muster für bessere Abdeckung größerer CPUs</p>
                <p className="text-xs text-blue-700 italic">Gut für Ryzen</p>
              </div>
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
                <p className="font-bold text-gray-800 text-sm">Spatel-Methode</p>
                <div className="text-xl my-1">🔲</div>
                <p className="text-xs text-gray-700 text-center">Gleichmäßiges Verteilen mit Plastikkarte oder Spatel</p>
                <p className="text-xs text-yellow-700 italic">Zeitaufwendig</p>
              </div>
            </div>
            <div className="bg-blue-50 p-2 rounded-lg mt-2 text-xs text-center text-gray-800">
              <strong>Wichtig:</strong> Wärmeleitpaste alle 2-3 Jahre erneuern, da sie austrocknen kann!
            </div>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Delid und Direct Die Cooling</h3>
            <div className="space-y-1">
              <div className="flex items-center">
                <span className="text-xl mr-2">🔨</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Delidding</p>
                  <p className="text-xs text-gray-700">Entfernen des IHS (Heatspreader) für direkteren Wärmeübergang</p>
                </div>
              </div>
              <div className="bg-yellow-50 p-2 rounded-lg mb-1 text-xs">
                <p className="text-yellow-800 font-bold">Achtung: Hohes Risiko!</p>
                <p className="text-gray-700">Kann zur Beschädigung der CPU führen und die Garantie erlöschen lassen.</p>
              </div>
              <p className="text-sm text-gray-700">Potentielle Temperaturverbesserung:</p>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <span className="ml-2 text-xs text-gray-700">7-15°C kühler</span>
              </div>
              <p className="text-xs text-gray-600 italic mt-2">Nur für fortgeschrittene Enthusiasten empfohlen!</p>
            </div>
          </div>
        </div>
      </div>
    )
  ];

  return <Flyer pages={pages} />;
};

export default Waermemanagement; 