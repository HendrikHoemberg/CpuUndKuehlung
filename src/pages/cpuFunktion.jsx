import { Flyer, InteractiveImage } from '../components/Flyer';

const CpuFunktion = () => {
  const pages = [
    // CPU Architecture Types page 1
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold p-4 mb-2 rounded-lg text-white bg-gradient-to-r from-yellow-400 to-orange-500 shadow-md text-center">CPU-Architekturen</h2>
        
        
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 flex items-center text-gray-800">Marktführende Architekturen</h3>
          <div className="bg-white shadow-md p-4 rounded-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg p-3 bg-green-50 shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="text-center mr-3">
                    <InteractiveImage 
                      emoji="📱" 
                      alt="ARM Architecture" 
                      description="ARM-Architekturen werden von verschiedenen Herstellern lizenziert und angepasst." 
                      position="bottom"
                    />
                  </div>
                  <h4 className="font-bold text-green-800">ARM-Architektur</h4>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li><strong>Basis:</strong> RISC-Design</li>
                  <li><strong>Markt:</strong> Dominiert Mobilgeräte, IoT, zunehmend auch Desktop (Apple Silicon)</li>
                  <li><strong>Lizensierung:</strong> Lizenzmodell - ARM entwirft, andere produzieren</li>
                  <li><strong>Vorteile:</strong> Hervorragende Energieeffizienz, Skalierbarkeit</li>
                </ul>
              </div>
              
              <div className="rounded-lg p-3 bg-blue-50 shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="text-center mr-3">
                    <InteractiveImage 
                      emoji="💻" 
                      alt="x86 Architecture" 
                      description="x86 stammt ursprünglich von Intel und wird heute hauptsächlich von Intel und AMD weiterentwickelt." 
                      position="bottom"
                    />
                  </div>
                  <h4 className="font-bold text-blue-800">x86-Architektur</h4>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li><strong>Basis:</strong> CISC-Design</li>
                  <li><strong>Markt:</strong> Dominiert Desktop, Laptop, Server, Workstation</li>
                  <li><strong>Lizensierung:</strong> Proprietäre Architektur mit Lizenzvereinbarungen zwischen Intel/AMD</li>
                  <li><strong>Vorteile:</strong> Hohe Leistung, umfangreiches Software-Ökosystem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 flex items-center text-gray-800">Befehlssatzarchitekturen</h3>
          <div className="bg-white shadow-md p-4 rounded-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg p-3 bg-green-50 shadow-sm">
                <div className="flex items-center mb-2">
                  <h4 className="font-bold text-green-800">RISC</h4>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li><strong>Bedeutung:</strong> Reduced Instruction Set Computer</li>
                  <li><strong>Design:</strong> Einfacher, optimierter Befehlssatz</li>
                  <li><strong>Merkmale:</strong> Feste Befehlslänge, viele Register</li>
                  <li><strong>Vorteile:</strong> Energieeffizienz, ideal für mobile Geräte</li>
                  <li><strong>Beispiele:</strong> ARM, RISC-V, MIPS</li>
                </ul>
              </div>
              
              <div className="rounded-lg p-3 bg-blue-50 shadow-sm">
                <div className="flex items-center mb-2">
                  <h4 className="font-bold text-blue-800">CISC</h4>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li><strong>Bedeutung:</strong> Complex Instruction Set Computer</li>
                  <li><strong>Design:</strong> Umfangreicher, komplexer Befehlssatz</li>
                  <li><strong>Merkmale:</strong> Variable Befehlslänge, spezialisierte Befehle</li>
                  <li><strong>Vorteile:</strong> Hohe Leistungsdichte, Kompatibilität</li>
                  <li><strong>Beispiele:</strong> x86, x86-64</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    // CPU Architecture Types page 2
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold p-4 mb-2 rounded-lg text-white bg-gradient-to-r from-yellow-400 to-orange-500 shadow-md text-center">CPU-Architekturen</h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 flex items-center text-gray-800">Kern-Architektur</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white shadow-md p-4 rounded-xl">
              <div className="flex items-center mb-2">
                <div className="text-center mr-3">
                  <InteractiveImage 
                    emoji="1️⃣" 
                    alt="Single Core Processor" 
                    description="Einzelkern-CPUs verarbeiten Aufgaben sequentiell, sind aber für bestimmte Workloads ausreichend." 
                    position="bottom"
                  />
                </div>
                <h4 className="font-bold text-gray-800">Single-Core</h4>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li><strong>Verarbeitung:</strong> Sequentielle Ausführung</li>
                <li><strong>Stärken:</strong> Single-Thread-Performance, Effizienz</li>
                <li><strong>Vorteile:</strong> Einfacheres Wärmemanagement</li>
                <li><strong>Kosten:</strong> Geringere Herstellungskosten</li>
              </ul>
              <div className="mt-2 bg-gray-50 p-2 rounded-lg text-xs">
                <p>Single-Core-Prozessoren waren bis Mitte der 2000er Jahre Standard. Sie bieten für bestimmte Anwendungen mit geringen Parallelisierungsmöglichkeiten nach wie vor eine gute Performance.</p>
              </div>
            </div>
            
            <div className="bg-white shadow-md p-4 rounded-xl">
              <div className="flex items-center mb-2">
                <div className="text-center mr-3">
                  <InteractiveImage 
                    emoji="🔢" 
                    alt="Multi Core Processor" 
                    description="High-End Desktop-CPUs haben heute bis zu 64 Kerne, Server-CPUs sogar noch mehr." 
                    position="bottom"
                  />
                </div>
                <h4 className="font-bold text-gray-800">Multi-Core</h4>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li><strong>Verarbeitung:</strong> Parallele Ausführung</li>
                <li><strong>Stärken:</strong> Multitasking, Gesamtleistung</li>
                <li><strong>Vorteile:</strong> Bessere Performance bei parallelen Workloads</li>
                <li><strong>Standard:</strong> Modernes Design für alle Gerätetypen</li>
              </ul>
              <div className="mt-2 bg-gray-50 p-2 rounded-lg text-xs">
                <p>Multi-Core-Prozessoren ermöglichen die gleichzeitige Ausführung mehrerer Aufgaben. Moderne CPUs haben zwischen 4 und 64 Kernen für Desktop-Systeme, Server-CPUs sogar noch mehr.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 flex items-center text-gray-800">AMD vs Intel</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white shadow-md p-4 rounded-xl">
              <div className="flex items-center mb-2">
                <div className="text-center mr-3">
                  <InteractiveImage 
                    img={<img src="/CpuUndKuehlung/images/AmdLogo.jpg" className="w-35 h-20 object-cover"/>}
                    alt="AMD Logo" 
                    description="AMD's Zen-Architektur revolutionierte ab 2017 den CPU-Markt mit hoher Kernzahl und Effizienz." 
                    position="bottom"
                  />
                </div>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li><strong>Architektur:</strong> Zen-Mikroarchitektur (Ryzen)</li>
                <li><strong>Stärken:</strong> Multi-Core-Performance, Preis-Leistung</li>
                <li><strong>Innovation:</strong> Chiplet-Design (mehrere kleine Dies)</li>
                <li><strong>Fertigung:</strong> Externe Fertigung (TSMC)</li>
              </ul>
              <div className="mt-2 bg-red-50 p-2 rounded-lg text-xs">
                <p>Das Chiplet-Design von AMD ermöglicht kostengünstige Produktion von Prozessoren mit vielen Kernen, da kleinere Chips eine höhere Ausbeute in der Produktion haben.</p>
              </div>
            </div>
            
            <div className="bg-white shadow-md p-4 rounded-xl">
              <div className="flex items-center mb-2">
                <div className="text-center mr-3">
                  <InteractiveImage 
                    img={<img src="/CpuUndKuehlung/images/IntelLogo.jpg" className="w-35 h-20 object-cover"/>}
                    alt="Intel Logo" 
                    description="Intel dominierte den CPU-Markt für Desktop und Server über Jahrzehnte hinweg." 
                    position="bottom"
                  />
                </div>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li><strong>Architektur:</strong> Core-Mikroarchitektur</li>
                <li><strong>Stärken:</strong> Single-Core-Performance, Kompatibilität</li>
                <li><strong>Innovation:</strong> Hybrid-Architektur (P-Cores + E-Cores)</li>
                <li><strong>Fertigung:</strong> Eigene Fertigungsanlagen (Intel Fabs)</li>
              </ul>
              <div className="mt-2 bg-blue-50 p-2 rounded-lg text-xs">
                <p>Intel's neuere Prozessoren nutzen eine Hybrid-Architektur mit leistungsstarken P-Cores für anspruchsvolle Aufgaben und energieeffizienten E-Cores für Hintergrundprozesse.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    // Performance and Parallelization page
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-3xl font-bold p-4 mb-2 rounded-lg text-white bg-gradient-to-r from-yellow-400 to-orange-500 shadow-md text-center">Leistung & Parallelisierung</h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-3">
          <div className="bg-white shadow-md p-5 rounded-xl flex-1">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Wichtige Kenngrößen</h3>
            <ul className="space-y-2 text-gray-700 text-base">
              <li className="flex items-center">
                <span className="text-2xl mr-3">⚡</span> 
                <span><b>Taktfrequenz:</b> Arbeitsgeschwindigkeit in GHz</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">🧮</span> 
                <span><b>IPC:</b> Instructions Per Cycle</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">🔥</span> 
                <span><b>TDP:</b> Thermal Design Power in Watt</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">🧵</span> 
                <span><b>Threads:</b> Parallele Ausführungsstränge</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white shadow-md p-5 rounded-xl flex-1">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Parallelisierung</h3>
            <div>
              <p className="mb-2 text-base text-gray-700">Moderne CPUs nutzen verschiedene Parallelisierungstechniken:</p>
              <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
                <li><b>Hyperthreading/SMT:</b> Mehrere logische Kerne pro physischem Kern</li>
                <li><b>Instruction-Level Parallelism:</b> Gleichzeitige Ausführung unabhängiger Befehle <span className="text-xs italic">(innerhalb eines Kerns)</span></li>
                <li><b>Task-Level Parallelism:</b> Verteilung von Aufgaben auf mehrere Kerne <span className="text-xs italic">(zwischen mehreren Kernen)</span></li>
              </ul>
              <p className="mt-3 text-xs text-gray-600 bg-blue-50 p-2 rounded-lg">
                <b>Hinweis:</b> Instruction-Level Parallelism optimiert die Ausführung auf Befehlsebene innerhalb eines Kerns, während Task-Level Parallelism ganze Aufgaben auf verschiedene Kerne verteilt.  
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-5 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Aktuelle CPU-Entwicklungen</h3>
          <div className="space-y-3 text-base">
            <div className="flex items-center bg-yellow-50 p-3 rounded-lg">
              <div>
                <p className="font-bold text-gray-800 text-lg">Heterogene Kerne</p>
                <p className="text-sm text-gray-700">Kombination aus leistungsstarken P-Cores und effizienten E-Cores (Intel Generationen ab Alder Lake)</p>
              </div>
            </div>
            <div className="flex items-center bg-green-50 p-3 rounded-lg">
              <div>
                <p className="font-bold text-gray-800 text-lg">Chiplet-Design</p>
                <p className="text-sm text-gray-700">Mehrere kleine Silizium-Dies statt eines großen Monolithen (AMD Ryzen)</p>
              </div>
            </div>
            <div className="flex items-center bg-blue-50 p-3 rounded-lg">
              <div>
                <p className="font-bold text-gray-800 text-lg">Spezielle Sicherheitshardware</p>
                <p className="text-sm text-gray-700">Integrierte Funktionen zur Verschlüsselung und Virtualisierung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  ];

  return <Flyer pages={pages} pageId="cpuFunktion" />;
};

export default CpuFunktion;