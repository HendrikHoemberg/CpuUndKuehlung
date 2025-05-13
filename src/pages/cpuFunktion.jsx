import { Flyer, InteractiveImage } from '../components/Flyer';

const CpuFunktion = () => {
  const pages = [
    // CPU Components page
    (
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Funktionsblöcke der CPU</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <InteractiveImage 
              emoji="🧮" 
              alt="ALU Circuit" 
              description="Die ALU kann in modernen CPUs mehrere Berechnungen parallel ausführen!" 
            />
            <p className="mt-1 text-gray-800">ALU</p>
            <p className="text-xs text-gray-700">Führt Berechnungen und logische Operationen aus</p>
          </div>
          
          <div className="text-center">
            <InteractiveImage 
              emoji="🔍" 
              alt="Control Unit" 
              description="Die Steuereinheit ist wie ein Dirigent, der alle anderen Komponenten koordiniert." 
            />
            <p className="mt-1 text-gray-800">Steuereinheit</p>
            <p className="text-xs text-gray-700">Koordiniert den Befehlsablauf</p>
          </div>
          
          <div className="text-center">
            <InteractiveImage 
              emoji="💾" 
              alt="Registers" 
              description="Register arbeiten bis zu 100-mal schneller als der Hauptspeicher!" 
            />
            <p className="mt-1 text-gray-800">Register</p>
            <p className="text-xs text-gray-700">Ultraschneller CPU-interner Speicher</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-4 rounded-xl">
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
              <p className="text-sm text-gray-700">Ultraschnelle Speicherplätze innerhalb der CPU für temporäre Daten.</p>
            </div>
            <div className="rounded-lg p-3 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-1 text-gray-800">Cache</h4>
              <p className="text-sm text-gray-700">Schneller Zwischenspeicher für häufig genutzte Daten, in mehreren Ebenen (L1, L2, L3).</p>
            </div>
          </div>
        </div>
      </div>
    ),
    
    // CPU Architecture Types page
    (
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">CPU-Architekturen</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center text-gray-800">
              <span className="mr-2">🔄</span> Single-Core vs. Multi-Core
            </h3>
            <div className="bg-white shadow-md p-4 rounded-xl flex items-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-center">
                  <InteractiveImage 
                    emoji="1️⃣" 
                    alt="Single Core Processor" 
                    description="Obwohl langsamer in der Parallelverarbeitung, sind Single-Core-CPUs oft energieeffizienter." 
                  />
                  <p className="mt-1 text-gray-800">Single-Core</p>
                  <p className="text-xs text-gray-700">Ein Rechenkern für sequentielle Verarbeitung</p>
                </div>
                
                <div className="text-center">
                  <InteractiveImage 
                    emoji="🔢" 
                    alt="Multi Core Processor" 
                    description="Moderne Consumer-CPUs haben bis zu 32+ Kerne!" 
                  />
                  <p className="mt-1 text-gray-800">Multi-Core</p>
                  <p className="text-xs text-gray-700">Mehrere Kerne für parallele Verarbeitung</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center text-gray-800">
              <span className="mr-2">📊</span> RISC vs. CISC
            </h3>
            <div className="bg-white shadow-md p-4 rounded-xl flex items-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-center">
                  <InteractiveImage 
                    emoji="🔍" 
                    alt="RISC Architecture" 
                    description="ARM-Prozessoren nutzen RISC-Architektur und dominieren den Mobilmarkt." 
                  />
                  <p className="mt-1 text-gray-800">RISC</p>
                  <p className="text-xs text-gray-700">Einfacher Befehlssatz, höhere Effizienz</p>
                </div>
                
                <div className="text-center">
                  <InteractiveImage 
                    emoji="🧰" 
                    alt="CISC Architecture" 
                    description="x86-Prozessoren (Intel, AMD) verwenden primär CISC-Architekturen." 
                  />
                  <p className="mt-1 text-gray-800">CISC</p>
                  <p className="text-xs text-gray-700">Komplexe Befehle für vielseitige Anwendungen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-2 flex items-center text-gray-800">
            <span className="mr-2">🏢</span> AMD vs. Intel
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white shadow-md p-3 rounded-xl flex items-center">
              <div className="text-center mr-3">
                <InteractiveImage 
                  emoji="🔴" 
                  alt="AMD Logo" 
                  description="AMD's Zen-Architektur revolutionierte den CPU-Markt ab 2017." 
                  position="bottom"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">AMD</h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li>Ryzen-Architektur</li>
                  <li>Chiplet-Design</li>
                  <li>Mehr Kerne bei gleicher Preisklasse</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white shadow-md p-3 rounded-xl flex items-center">
              <div className="text-center mr-3">
                <InteractiveImage 
                  emoji="🔵" 
                  alt="Intel Logo" 
                  description="Intel dominierte den CPU-Markt für Desktop und Server über Jahrzehnte." 
                  position="bottom"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Intel</h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li>Core-Architektur</li>
                  <li>Traditionell starke IPC</li>
                  <li>Eigene Fertigungstechnologie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    // Performance and Parallelization page
    (
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Leistung & Parallelisierung</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Wichtige Kenngrößen</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li className="flex items-center">
                <span className="text-xl mr-2">⚡</span> 
                <span><b>Taktfrequenz:</b> Arbeitsgeschwindigkeit in GHz</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-2">🧮</span> 
                <span><b>IPC:</b> Instructions Per Cycle</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-2">🔥</span> 
                <span><b>TDP:</b> Thermal Design Power in Watt</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-2">💾</span> 
                <span><b>Cache:</b> L1, L2, L3 Größe</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-2">🧵</span> 
                <span><b>Threads:</b> Parallele Ausführungsstränge</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">MMX & XMM</h3>
            <div className="flex items-center">
              <div className="text-center mr-3">
                <InteractiveImage 
                  emoji="📊" 
                  alt="SIMD Instructions" 
                  description="AVX-512 kann 512 Bit (16 Floats) gleichzeitig verarbeiten!"
                  position="top"
                />
              </div>
              <div className="text-sm text-gray-700">
                <p><b>MMX:</b> Multimedia Extensions</p>
                <p><b>SSE/XMM:</b> Streaming SIMD Extensions</p>
                <p><b>AVX:</b> Advanced Vector Extensions</p>
                <p><b>AVX-512:</b> 512-Bit Advanced Vector Extensions</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Parallelisierung</h3>
          <div className="flex items-center">
            <div className="text-center mr-4">
              <InteractiveImage 
                emoji="🧵" 
                alt="CPU Threads" 
                description="Ein CPU-Kern kann durch SMT/Hyperthreading 2+ virtuelle Kerne simulieren."
                position="bottom"
              />
            </div>
            <div>
              <p className="mb-1 text-sm text-gray-700">Moderne CPUs nutzen verschiedene Parallelisierungstechniken:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li><b>Hyperthreading/SMT:</b> Mehrere logische Kerne pro physischem Kern</li>
                <li><b>Instruction-Level Parallelism:</b> Gleichzeitige Ausführung unabhängiger Befehle</li>
                <li><b>Task-Level Parallelism:</b> Verteilung von Aufgaben auf mehrere Kerne</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  ];

  return <Flyer pages={pages} />;
};

export default CpuFunktion; 