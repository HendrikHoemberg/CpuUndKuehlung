import { Flyer, InteractiveImage } from '../components/Flyer';

const CpuFunktion = () => {
  const pages = [
    // CPU Architecture Types page
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">CPU-Architekturen</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-3">
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
        
        <div className="mb-3">
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
                  <li>Traditionell hohe Taktraten</li>
                  <li>Eigene Fertigungstechnologie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">RISC vs. CISC: Details</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg p-3 bg-gray-50 shadow-sm">
                <h4 className="font-bold mb-1 text-gray-800 text-sm">RISC (Reduced Instruction Set Computer)</h4>
                <ul className="list-disc list-inside text-xs text-gray-700">
                  <li>Einfacher Befehlssatz</li>
                  <li>Feste Befehlslänge</li>
                  <li>Wenige Adressierungsmodi</li>
                  <li>Viele Register</li>
                  <li>Energieeffizient</li>
                  <li>Beispiele: ARM, MIPS, RISC-V</li>
                </ul>
              </div>
              <div className="rounded-lg p-3 bg-gray-50 shadow-sm">
                <h4 className="font-bold mb-1 text-gray-800 text-sm">CISC (Complex Instruction Set Computer)</h4>
                <ul className="list-disc list-inside text-xs text-gray-700">
                  <li>Komplexer Befehlssatz</li>
                  <li>Variable Befehlslänge</li>
                  <li>Viele Adressierungsmodi</li>
                  <li>Weniger Register</li>
                  <li>Höhere Leistungsdichte</li>
                  <li>Beispiele: x86, x86-64</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Prozessor-Generationen</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg p-2 bg-blue-50 shadow-sm">
                <h4 className="font-bold text-blue-800 text-sm">Intel</h4>
                <ul className="list-none text-xs space-y-1 text-gray-700">
                  <li><strong>10. Gen:</strong> Comet Lake, Ice Lake</li>
                  <li><strong>11. Gen:</strong> Rocket Lake, Tiger Lake</li>
                  <li><strong>12. Gen:</strong> Alder Lake</li>
                  <li><strong>13. Gen:</strong> Raptor Lake</li>
                  <li><strong>14. Gen:</strong> Meteor Lake</li>
                </ul>
              </div>
              <div className="rounded-lg p-2 bg-red-50 shadow-sm">
                <h4 className="font-bold text-red-800 text-sm">AMD</h4>
                <ul className="list-none text-xs space-y-1 text-gray-700">
                  <li><strong>Zen 1:</strong> Ryzen 1000-Serie</li>
                  <li><strong>Zen 2:</strong> Ryzen 3000-Serie</li>
                  <li><strong>Zen 3:</strong> Ryzen 5000-Serie</li>
                  <li><strong>Zen 4:</strong> Ryzen 7000-Serie</li>
                  <li><strong>Zen 5:</strong> Kommende Ryzen-Generationen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    // Performance and Parallelization page
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold pb-2 mb-2 border-b-2 border-gray-200">Leistung & Parallelisierung</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-3">
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
            <h3 className="text-xl font-bold mb-2 text-gray-800">MMX & SIMD-Erweiterungen</h3>
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
        
        <div className="bg-white shadow-md p-4 rounded-xl mb-3">
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
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Benchmarks & Leistungsmessung</h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-gray-50 p-2 rounded-lg">
                <p className="font-bold text-gray-800">Synthetic Benchmarks</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Cinebench (Rendering)</li>
                  <li>Geekbench (Allgemein)</li>
                  <li>3DMark CPU Test</li>
                  <li>Prime95 (Rechenleistung)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg">
                <p className="font-bold text-gray-800">Anwendungsbenchmarks</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Adobe Premiere Rendering</li>
                  <li>Spieleperformance (FPS)</li>
                  <li>Kompilierungszeiten</li>
                  <li>Virtualisierungsleistung</li>
                </ul>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-600 italic">
              Multi-Threading-Performance kann bis zu 32× höher sein als Single-Thread bei voll parallelisierbaren Aufgaben.
            </div>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Aktuelle CPU-Entwicklungen</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center bg-yellow-50 p-2 rounded-lg">
                <span className="text-xl mr-2">🔄</span>
                <div>
                  <p className="font-bold text-gray-800">Heterogene Kerne</p>
                  <p className="text-xs text-gray-700">Kombination aus leistungsstarken P-Cores und effizienten E-Cores (z.B. Intel Alder Lake+)</p>
                </div>
              </div>
              <div className="flex items-center bg-green-50 p-2 rounded-lg">
                <span className="text-xl mr-2">🧩</span>
                <div>
                  <p className="font-bold text-gray-800">Chiplet-Design</p>
                  <p className="text-xs text-gray-700">Mehrere kleine Silizium-Dies statt eines großen Monolithen (z.B. AMD Zen)</p>
                </div>
              </div>
              <div className="flex items-center bg-blue-50 p-2 rounded-lg">
                <span className="text-xl mr-2">🔒</span>
                <div>
                  <p className="font-bold text-gray-800">Spezielle Sicherheitshardware</p>
                  <p className="text-xs text-gray-700">Integrierte Funktionen zur Verschlüsselung und Virtualisierung</p>
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

export default CpuFunktion; 