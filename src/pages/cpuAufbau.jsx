import { Flyer, InteractiveImage } from '../components/Flyer';

const CpuAufbau = () => {
  const pages = [
    // CPU Die and Package
    (
      <div className="flex flex-col space-y-6">
        <h2 className="text-3xl font-bold pb-2 mb-4 border-b-2 border-gray-200">CPU-Die und Package</h2>
        
        <div className="flex justify-center gap-10 mb-8">
          <div className="text-center">
            <InteractiveImage 
              img={<img src="/CpuUndKuehlung/images/CPU-Die.jpg" className="w-24 h-24 object-cover rounded-lg" alt="CPU Die" />}
              alt="CPU Die" 
              description="Auf einem modernen CPU-Die können sich über 50 Milliarden Transistoren befinden!" 
              position="bottom"
            />
            <p className="mt-2 text-gray-800">CPU-Die</p>
            <p className="text-sm text-gray-700">Herzstück mit Milliarden von Transistoren</p>
          </div>
          
          <div className="text-center">
            <InteractiveImage 
              emoji="📦" 
              alt="CPU Package" 
              description="Das Package schützt den empfindlichen Silizium-Die und hat Kontaktflächen zur Verbindung mit dem Mainboard." 
              position="bottom"
            />
            <p className="mt-2 text-gray-800">CPU-Package</p>
            <p className="text-sm text-gray-700">Schützende Hülle mit Kontaktflächen</p>
          </div>
          
          <div className="text-center">
            <InteractiveImage 
              emoji="🔌" 
              alt="CPU Socket" 
              description="Moderne CPU-Sockel haben bis zu 4.000+ Kontaktpins zur Daten- und Stromübertragung." 
              position="bottom"
            />
            <p className="mt-2 text-gray-800">CPU-Socket</p>
            <p className="text-sm text-gray-700">Aufnahme der CPU auf dem Mainboard</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-6 rounded-xl mb-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">CPU-Bauweise:</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg p-4 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-2 text-gray-800">Monolithisch</h4>
              <p className="text-gray-700 mb-2">Ein einzelner großer Die enthält alle CPU-Komponenten (traditioneller Ansatz von Intel)</p>
              <div className="text-xs text-gray-600">
                <p><strong>Vorteile:</strong> Geringere Latenz zwischen Komponenten</p>
                <p><strong>Nachteile:</strong> Geringere Ausbeute bei der Produktion, höhere Kosten</p>
              </div>
            </div>
            <div className="rounded-lg p-4 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-2 text-gray-800">Chiplet</h4>
              <p className="text-gray-700 mb-2">Mehrere kleinere Dies werden zu einer CPU kombiniert (AMD Ryzen-Architektur)</p>
              <div className="text-xs text-gray-600">
                <p><strong>Vorteile:</strong> Bessere Produktionsausbeute, kostengünstiger</p>
                <p><strong>Nachteile:</strong> Höhere Latenz zwischen Chiplets</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow-md p-5 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Der CPU-Die im Detail</h3>
            <p className="mb-3 text-gray-700">Der CPU-Die ist das Herzstück der CPU, hergestellt aus:</p>
            <ul className="list-disc list-inside text-gray-700 mb-3">
              <li>Hochreinem Silizium als Halbleitermaterial</li>
              <li>Strukturen im Nanometerbereich (aktuell 3-7nm)</li>
              <li>Bis zu 15+ Schichten übereinander</li>
            </ul>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-gray-800"><strong>Wusstest du?</strong> Die Strukturbreite einer modernen CPU ist etwa 500-mal dünner als ein menschliches Haar!</p>
            </div>
          </div>
          
          <div className="bg-white shadow-md p-5 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Herstellungsprozess</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-xl mr-2">🔬</span>
                <div>
                  <p className="font-bold text-gray-800">Lithografie</p>
                  <p className="text-xs text-gray-700">Extrem-Ultraviolett-Lithografie (EUV) für feinste Strukturen</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2">🔄</span>
                <div>
                  <p className="font-bold text-gray-800">Schichtaufbau</p>
                  <p className="text-xs text-gray-700">Schichtweise Auftragung und Strukturierung von Materialien</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2">✂️</span>
                <div>
                  <p className="font-bold text-gray-800">Wafer-Schnitt</p>
                  <p className="text-xs text-gray-700">Aus einem 300mm Wafer entstehen hunderte einzelne Dies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    // CPU Components page
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Funktionsblöcke der CPU</h2>
        
        <div className="grid grid-cols-4 gap-4 mb-3">
          <div className="text-center">
            <InteractiveImage 
              emoji="🧮" 
              alt="ALU Circuit" 
              description="Die ALU kann in modernen CPUs mehrere Berechnungen parallel ausführen!" 
              position="bottom"
            />
            <p className="mt-1 text-gray-800">ALU</p>
            <p className="text-xs text-gray-700">Führt Berechnungen und logische Operationen aus</p>
          </div>
          
          <div className="text-center">
            <InteractiveImage 
              emoji="🔍" 
              alt="Control Unit" 
              description="Die Steuereinheit ist wie ein Dirigent, der alle anderen Komponenten koordiniert." 
              position="bottom"
            />
            <p className="mt-1 text-gray-800">Steuereinheit</p>
            <p className="text-xs text-gray-700">Koordiniert den Befehlsablauf</p>
          </div>
          
          <div className="text-center">
            <InteractiveImage 
              emoji="💾" 
              alt="Registers" 
              description="Register arbeiten bis zu 100-mal schneller als der Hauptspeicher!" 
              position="bottom"
            />
            <p className="mt-1 text-gray-800">Register</p>
            <p className="text-xs text-gray-700">Schneller CPU-interner Speicher</p>
          </div>
          
          <div className="text-center">
            <InteractiveImage 
              emoji="📊" 
              alt="Cache" 
              description="Der Cache überbrückt die Geschwindigkeitslücke zwischen CPU und Hauptspeicher." 
              position="bottom"
            />
            <p className="mt-1 text-gray-800">Cache</p>
            <p className="text-xs text-gray-700">Schneller Zwischenspeicher für Daten</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-4 rounded-xl mb-2">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Hauptkomponenten:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg p-3 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">ALU (Arithmetisch-Logische Einheit)</h4>
              <p className="text-sm text-gray-700">Führt mathematische und logische Operationen wie Addition, Subtraktion und Vergleiche aus.</p>
            </div>
            <div className="rounded-lg p-3 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">Steuerwerk (Control Unit)</h4>
              <p className="text-sm text-gray-700">Interpretiert Anweisungen und steuert alle Vorgänge in der CPU.</p>
            </div>
            <div className="rounded-lg p-3 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">Register</h4>
              <p className="text-sm text-gray-700">Schnelle Speicherplätze innerhalb der CPU für temporäre Daten.</p>
            </div>
            <div className="rounded-lg p-3 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">Cache</h4>
              <p className="text-sm text-gray-700">Schneller Zwischenspeicher für häufig genutzte Daten in mehreren Ebenen (L1, L2, L3).</p>
            </div>
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
            <p className="text-xs text-gray-600 italic">Dieser Zyklus wiederholt sich mehrere Milliarden Mal pro Sekunde.</p>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Cache-Hierarchie</h3>
            <p className="text-sm text-gray-700 mb-2">Der Cache ist in mehrere Ebenen organisiert:</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-12 h-8 bg-red-500 rounded-l-lg flex items-center justify-center text-white font-bold">L1</div>
                <div className="flex-1 h-8 bg-red-100 rounded-r-lg pl-2 flex items-center text-sm">
                  <span>Kleinster (64-512 KB), schnellster Cache, pro Kern</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-8 bg-yellow-500 rounded-l-lg flex items-center justify-center text-white font-bold">L2</div>
                <div className="flex-1 h-8 bg-yellow-100 rounded-r-lg pl-2 flex items-center text-sm">
                  <span>Mittelgroß (256 KB-2 MB), meistens pro Kern</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-8 bg-green-500 rounded-l-lg flex items-center justify-center text-white font-bold">L3</div>
                <div className="flex-1 h-8 bg-green-100 rounded-r-lg pl-2 flex items-center text-sm">
                  <span>Größter (4-64 MB), von allen Kernen geteilt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    // CPU Components Detail
    (
      <div className="flex flex-col space-y-6">
        <h2 className="text-3xl font-bold pb-2 mb-4 border-b-2 border-gray-200">CPU-Komponenten im Detail</h2>
        
        <div className="grid grid-cols-2 gap-6">
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
            <p className="mt-2 text-gray-700 text-sm">
              Eine moderne ALU kann über 100 Milliarden Berechnungen pro Sekunde durchführen.
            </p>
          </div>
          
          <div className="bg-white shadow-md p-5 rounded-xl">
            <h3 className="text-xl font-bold mb-3 flex items-center text-gray-800">
              <span className="text-2xl mr-2">🎮</span> Steuerwerk
            </h3>
            <p className="mb-2 text-gray-700">Die Control Unit (CU) ist verantwortlich für:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Befehlsinterpretation</li>
              <li>Steuerung des Befehlszyklus</li>
              <li>Koordination aller CPU-Komponenten</li>
            </ul>
            <p className="mt-2 text-gray-700 text-sm">
              Das Steuerwerk folgt dem Fetch-Decode-Execute-Zyklus für jeden Befehl.
            </p>
          </div>
          
          <div className="bg-white shadow-md p-5 rounded-xl">
            <h3 className="text-xl font-bold mb-3 flex items-center text-gray-800">
              <span className="text-2xl mr-2">💾</span> Cache-Hierarchie
            </h3>
            <p className="mb-2 text-gray-700">Moderne CPUs haben mehrere Cache-Ebenen:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li><b>L1-Cache:</b> Kleinster, schnellster Cache (pro Kern)</li>
              <li><b>L2-Cache:</b> Größer, etwas langsamer (oft pro Kern)</li>
              <li><b>L3-Cache:</b> Größter Cache, von allen Kernen geteilt</li>
            </ul>
            <p className="mt-2 text-gray-700 text-sm">
              L1-Cache ist bis zu 100-mal schneller als RAM, aber auch viel teurer.
            </p>
          </div>
          
          <div className="bg-white shadow-md p-5 rounded-xl">
            <h3 className="text-xl font-bold mb-3 flex items-center text-gray-800">
              <span className="text-2xl mr-2">⚡</span> Spezialeinheiten
            </h3>
            <p className="mb-2 text-gray-700">Spezialisierte Einheiten für bestimmte Aufgaben:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li><b>FPU:</b> Gleitkommaberechnungen</li>
              <li><b>SIMD:</b> Vektoroperationen (MMX, SSE, AVX)</li>
              <li><b>AES-NI:</b> Beschleunigte Verschlüsselung</li>
            </ul>
            <p className="mt-2 text-gray-700 text-sm">
              SIMD-Einheiten können bis zu 16 Berechnungen gleichzeitig durchführen.
            </p>
          </div>
        </div>
      </div>
    )
  ];

  return <Flyer pages={pages} />;
};

export default CpuAufbau; 