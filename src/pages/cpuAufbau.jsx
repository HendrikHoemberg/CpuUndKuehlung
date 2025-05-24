import { Flyer, InteractiveImage } from '../components/Flyer';

const CpuAufbau = () => {
  const pages = [
    // CPU Components
    (
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold p-4 mb-4 rounded-lg text-white bg-gradient-to-r from-green-400 to-teal-500 shadow-md text-center">CPU-Komponenten</h2>
        
        <div className="p-6 rounded-xl">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between">
            <div>
              <h4 className="text-2xl font-bold mb-2 text-gray-800 text-center text-shadow-md">CPU-Die</h4>
              <div className="rounded-lg p-4 bg-white shadow-sm text-center">
                <InteractiveImage 
                  img={<img src="/CpuUndKuehlung/images/DieShot.jpg" className="w-30 h-30 md:w-90 md:h-90 object-cover rounded-lg shadow-md/50 m-2"/>}
                  alt="CPU Die" 
                  description="Auf einem modernen CPU-Die können sich über 50 Milliarden Transistoren befinden!" 
                  position="bottom"
                />
                <p className="text-gray-700 mb-2">Herzstück mit Milliarden von Transistoren</p>
                <div className="text-xs text-gray-600 mt-2">
                  <p><strong>Material:</strong> Hochreines Silizium</p>
                  <p><strong>Größe:</strong> Typischerweise 10-20mm²</p>
                  <p><strong>Strukturbreite:</strong> Aktuelle CPUs nutzen 5-7nm Technologie</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-2 text-gray-800 text-center text-shadow-md">CPU-Package</h4>
              <div className="rounded-lg p-4 bg-white shadow-sm text-center">
                <InteractiveImage 
                  img={<img src="/CpuUndKuehlung/images/Package.jpg" className="w-30 h-30 md:w-90 md:h-90 object-cover rounded-lg shadow-md/50 m-2"/>} 
                  alt="CPU Package" 
                  description="Das Package schützt den empfindlichen Silizium-Die und hat Kontaktflächen zur Verbindung mit dem Mainboard." 
                  position="bottom"
                />
                <p className="text-gray-700 mb-2">Schützende Hülle mit Kontaktflächen</p>
                <div className="text-xs text-gray-600 mt-2">
                  <p><strong>Funktion:</strong> Schutz und Wärmeableitung</p>
                  <p><strong>Bestandteile:</strong> Heatspreader, Substrat, Lötkontakte</p>
                  <p><strong>Material:</strong> Meist Kupfer mit Nickel-Beschichtung</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-2 text-gray-800 text-center text-shadow-md">CPU-Socket</h4>
              <div className="rounded-lg p-4 bg-white shadow-sm text-center">
                <InteractiveImage 
                  img={<img src="/CpuUndKuehlung/images/Socket.jpg" className="w-30 h-30 md:w-90 md:h-90 object-cover rounded-lg shadow-md/50 m-2"/>}  
                  alt="CPU Socket" 
                  description="Moderne CPU-Sockel haben bis zu 4.000+ Kontaktpins zur Daten- und Stromübertragung." 
                  position="bottom"
                />
                <p className="text-gray-700 mb-2">Aufnahme der CPU auf dem Mainboard</p>
                <div className="text-xs text-gray-600 mt-2">
                  <p><strong>Typen:</strong> LGA (Intel), PGA (ältere AMD)</p>
                  <p><strong>Kompatibilität:</strong> Sockel bestimmt CPU-Kompatibilität</p>
                  <p><strong>Lebensdauer:</strong> Meist 2-3 CPU-Generationen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    // CPU Construction
    (
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold p-4 mb-4 rounded-lg text-white bg-gradient-to-r from-green-400 to-teal-500 shadow-md text-center">CPU-Bauweise</h2>
  
        <div className="p-6 rounded-xl mb-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-2xl font-bold mb-2 text-gray-800 text-center text-shadow-md">Monolithisch</h4>
              <div className="rounded-lg p-4 bg-white shadow-sm text-center">
                <img src="/CpuUndKuehlung/images/IntelDie.jpg" className="w-28 h-28 md:w-90 md:h-90 object-cover rounded-lg mx-auto shadow-md/50 m-2" />
                <p className="text-gray-700 mb-2">Ein einzelner großer Die enthält alle CPU-Komponenten (traditioneller Ansatz von Intel)</p>
                <div className="text-xs text-gray-600">
                  <p><strong>Vorteile:</strong> Geringere Latenz zwischen Komponenten</p>
                  <p><strong>Nachteile:</strong> Geringere Ausbeute bei der Produktion, höhere Kosten</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2 text-gray-800 text-center text-shadow-md">Chiplet</h4>
              <div className="rounded-lg p-4 bg-white shadow-sm text-center">
                <img src="/CpuUndKuehlung/images/AmdDie.jpg" className="w-28 h-28 md:w-90 md:h-90 object-cover rounded-lg mx-auto shadow-md/50 m-2" />
                <p className="text-gray-700 mb-2">Mehrere kleinere Dies werden zu einer CPU kombiniert (AMD Ryzen-Architektur)</p>
                <div className="text-xs text-gray-600">
                  <p><strong>Vorteile:</strong> Bessere Produktionsausbeute, kostengünstiger</p>
                  <p><strong>Nachteile:</strong> Höhere Latenz zwischen Chiplets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    // CPU Blocks page
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold p-4 mb-2 rounded-lg text-white bg-gradient-to-r from-green-400 to-teal-500 shadow-md text-center">Funktionsblöcke der CPU</h2>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white shadow-md p-5 rounded-xl">
            <h3 className="text-xl font-bold mb-3 flex items-center text-gray-800">
              <span className="text-2xl mr-2">🧮</span> ALU
            </h3>
            <p className="mb-2 text-gray-700">Die Arithmetisch-Logische Einheit führt aus:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Arithmetische Operationen (Addition, Subtraktion)</li>
              <li>Logische Operationen (AND, OR, XOR)</li>
              <li>Bitmanipulationen</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-md p-5 rounded-xl">
            <h3 className="text-xl font-bold mb-3 flex items-center text-gray-800">
              <span className="text-2xl mr-2">🎮</span> Steuerwerk
            </h3>
            <p className="mb-2 text-gray-700">Das Steuerwerk ist verantwortlich für:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Befehlsinterpretation</li>
              <li>Steuerung des Befehlszyklus</li>
              <li>Koordination aller CPU-Komponenten</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-md p-5 rounded-xl">
            <h3 className="text-xl font-bold mb-3 flex items-center text-gray-800">
              <span className="text-2xl mr-2">💾</span> Register
            </h3>
            <p className="mb-2 text-gray-700">CPU-Register sind sehr schnelle Speicherplätze:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li><b>Allzweckregister:</b> Für temporäre Daten und Berechnungen</li>
              <li><b>Spezialregister:</b> Programmzähler, Stackpointer, etc.</li>
              <li><b>Statusregister:</b> Speichert Flags wie Carry, Zero, Overflow</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-md p-5 rounded-xl">
            <h3 className="text-xl font-bold mb-3 flex items-center text-gray-800">
              <span className="text-2xl mr-2">⚡</span> Spezialeinheiten
            </h3>
            <p className="mb-2 text-gray-700">Spezialisierte Einheiten für bestimmte Aufgaben:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li><b>FPU:</b> Gleitkommaberechnungen</li>
              <li><b>SIMD:</b> Vektoroperationen (MMX, SSE, AVX)</li>
              <li><b>Cache-Controller:</b> Verwaltung des Datenaustausches zwischen CPU und Speicher</li>
            </ul>
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Befehlszyklus der CPU</h3>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="bg-blue-50 p-2 rounded-lg text-sm text-gray-800">
                <p className="font-bold">1. Fetch (Abrufen)</p>
                <p className="text-xs">Die CPU holt den nächsten Befehl aus dem Arbeitsspeicher (RAM) in das Befehlsregister.</p>
              </div>
              <div className="bg-green-50 p-2 rounded-lg text-sm text-gray-800">
                <p className="font-bold">2. Decode (Dekodieren)</p>
                <p className="text-xs">Die Steuereinheit dekodiert den Befehl und bestimmt die notwendigen Aktionen.</p>
              </div>
              <div className="bg-purple-50 p-2 rounded-lg text-sm text-gray-800">
                <p className="font-bold">3. Execute (Ausführen)</p>
                <p className="text-xs">Die ALU und andere Komponenten führen den Befehl aus und verarbeiten die Daten.</p>
              </div>
              <div className="bg-orange-50 p-2 rounded-lg text-sm text-gray-800">
                <p className="font-bold">4. Store (Speichern)</p>
                <p className="text-xs">Die Ergebnisse werden in Registern oder im Arbeitsspeicher abgelegt.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Cache-Hierarchie</h3>
            <p className="text-sm text-gray-700 mb-2">Der Cache ist in mehrere Ebenen organisiert:</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-12 h-8 bg-red-500 rounded-l-lg flex items-center justify-center text-white font-bold">L1</div>
                <div className="flex-1 h-8 bg-red-100 rounded-r-lg pl-2 flex items-center text-xs sm:text-sm">
                  <span>Kleinster (64-512 KB), schnellster Cache, pro Kern</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-8 bg-yellow-500 rounded-l-lg flex items-center justify-center text-white font-bold">L2</div>
                <div className="flex-1 h-8 bg-yellow-100 rounded-r-lg pl-2 flex items-center text-xs sm:text-sm">
                  <span>Mittelgroß (256 KB-2 MB), meistens pro Kern</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-8 bg-green-500 rounded-l-lg flex items-center justify-center text-white font-bold">L3</div>
                <div className="flex-1 h-8 bg-green-100 rounded-r-lg pl-2 flex items-center text-xs sm:text-sm">
                  <span>Größter (4-64 MB), von allen Kernen geteilt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  ];

  return <Flyer pages={pages} pageId="cpuAufbau" />;
};

export default CpuAufbau;