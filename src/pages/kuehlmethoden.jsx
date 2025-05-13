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
    ),
    
    // Air Cooling Details
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Luftkühlung</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-3">
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
        
        <div className="bg-white shadow-md p-4 rounded-xl mb-3">
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
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Arten von Luftkühlern</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
                <div className="text-2xl">🗼</div>
                <p className="font-bold text-gray-800 text-sm">Tower-Kühler</p>
                <p className="text-xs text-gray-700 text-center">Vertikal aufgebaute Kühler mit seitlich angebrachten Lüftern, hohe Leistung</p>
                <p className="text-xs text-gray-500 italic">z.B. Noctua NH-D15, be quiet! Dark Rock Pro 4</p>
              </div>
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg">
                <div className="text-2xl">🥞</div>
                <p className="font-bold text-gray-800 text-sm">Top-Flow-Kühler</p>
                <p className="text-xs text-gray-700 text-center">Flacher Aufbau mit Lüfter über den Lamellen, gut für kleine Gehäuse</p>
                <p className="text-xs text-gray-500 italic">z.B. Noctua NH-L12, be quiet! Shadow Rock LP</p>
              </div>
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg mt-2">
                <div className="text-2xl">🔄</div>
                <p className="font-bold text-gray-800 text-sm">Downdraft-Kühler</p>
                <p className="text-xs text-gray-700 text-center">Richten Luftstrom direkt auf Mainboard, kühlen auch umliegende Komponenten</p>
                <p className="text-xs text-gray-500 italic">z.B. AMD Wraith Prism, Intel Stock Cooler</p>
              </div>
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded-lg mt-2">
                <div className="text-2xl">🔄</div>
                <p className="font-bold text-gray-800 text-sm">Passive Kühler</p>
                <p className="text-xs text-gray-700 text-center">Ohne Lüfter, besonders leise, nur für CPUs mit niedriger TDP</p>
                <p className="text-xs text-gray-500 italic">z.B. NoFan CR-95C, Thermalright HR-22</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Leistungsklassen & Empfehlungen</h3>
            <div className="space-y-2">
              <div className="rounded-lg p-2 bg-green-50 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-green-800 text-sm">Einstieg (~20-30€)</h4>
                  <p className="text-xs bg-green-200 px-2 py-1 rounded-full text-green-800">Bis 95W TDP</p>
                </div>
                <ul className="list-disc list-inside text-xs text-gray-700">
                  <li>Arctic Freezer 34</li>
                  <li>Cooler Master Hyper 212</li>
                  <li>DeepCool GAMMAXX 400</li>
                </ul>
              </div>
              <div className="rounded-lg p-2 bg-yellow-50 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-yellow-800 text-sm">Mittelklasse (~40-60€)</h4>
                  <p className="text-xs bg-yellow-200 px-2 py-1 rounded-full text-yellow-800">Bis 150W TDP</p>
                </div>
                <ul className="list-disc list-inside text-xs text-gray-700">
                  <li>be quiet! Shadow Rock 3</li>
                  <li>Scythe Fuma 2</li>
                  <li>Thermalright Peerless Assassin 120</li>
                </ul>
              </div>
              <div className="rounded-lg p-2 bg-red-50 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-red-800 text-sm">High-End (~70-100€)</h4>
                  <p className="text-xs bg-red-200 px-2 py-1 rounded-full text-red-800">Bis 250W TDP</p>
                </div>
                <ul className="list-disc list-inside text-xs text-gray-700">
                  <li>Noctua NH-D15</li>
                  <li>be quiet! Dark Rock Pro 4</li>
                  <li>Deepcool Assassin III</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    // Water Cooling Details
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Wasserkühlung</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-3">
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
        
        <div className="bg-white shadow-md p-4 rounded-xl mb-3">
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
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">AIO-Radiatoren im Vergleich</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-20 text-center">
                  <div className="text-sm font-bold text-gray-800">120mm</div>
                  <div className="h-10 w-6 mx-auto bg-blue-400 rounded"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="text-xs text-gray-700"><strong>Vorteile:</strong> Kompakt, passt in fast jedes Gehäuse</p>
                  <p className="text-xs text-gray-700"><strong>Nachteile:</strong> Begrenzte Kühlleistung, oft lauter</p>
                  <p className="text-xs text-gray-700"><strong>Empfohlen für:</strong> CPUs bis 95W TDP</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-20 text-center">
                  <div className="text-sm font-bold text-gray-800">240mm</div>
                  <div className="h-10 w-12 mx-auto bg-blue-500 rounded"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="text-xs text-gray-700"><strong>Vorteile:</strong> Gutes Gleichgewicht aus Leistung und Kompatibilität</p>
                  <p className="text-xs text-gray-700"><strong>Nachteile:</strong> Benötigt Platz im Gehäuse</p>
                  <p className="text-xs text-gray-700"><strong>Empfohlen für:</strong> CPUs bis 150W TDP</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-20 text-center">
                  <div className="text-sm font-bold text-gray-800">360mm</div>
                  <div className="h-10 w-16 mx-auto bg-blue-600 rounded"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="text-xs text-gray-700"><strong>Vorteile:</strong> Hervorragende Kühlleistung, leiser Betrieb</p>
                  <p className="text-xs text-gray-700"><strong>Nachteile:</strong> Teuer, benötigt viel Platz</p>
                  <p className="text-xs text-gray-700"><strong>Empfohlen für:</strong> High-End CPUs, Übertaktung</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Custom Loop Komponenten</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-xl mr-2">🧊</span>
                <div>
                  <p className="font-bold text-gray-800">CPU-Block</p>
                  <p className="text-xs text-gray-700">Sitzt direkt auf der CPU und nimmt Wärme auf (z.B. EK Quantum, Heatkiller IV)</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2">⚙️</span>
                <div>
                  <p className="font-bold text-gray-800">Pumpe & Reservoir</p>
                  <p className="text-xs text-gray-700">Bewegt Kühlflüssigkeit und dient als Ausgleichsbehälter (z.B. D5/DDC-Pumpen)</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2">🔄</span>
                <div>
                  <p className="font-bold text-gray-800">Radiatoren</p>
                  <p className="text-xs text-gray-700">Verschiedene Größen für die Wärmeabgabe (z.B. 120mm, 240mm, 360mm, 480mm)</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2">🧪</span>
                <div>
                  <p className="font-bold text-gray-800">Kühlmittel</p>
                  <p className="text-xs text-gray-700">Beinhaltet meist Korrosionsschutz, farbige Varianten oder klare Flüssigkeiten</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-700 mt-3 italic">Custom Loops sind anspruchsvoller in der Installation, bieten aber deutlich höhere Leistung und Anpassungsmöglichkeiten im Vergleich zu AIOs.</p>
          </div>
        </div>
      </div>
    )
  ];

  return <Flyer pages={pages} />;
};

export default Kuehlmethoden; 