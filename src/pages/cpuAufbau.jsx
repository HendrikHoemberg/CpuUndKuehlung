import { Flyer, InteractiveImage } from '../components/Flyer';

const CpuAufbau = () => {
  const pages = [
    // CPU Architecture Overview
    (
      <div className="flex flex-col space-y-6">
        <h2 className="text-4xl font-bold pb-2 mb-4 border-b-2 border-gray-200">CPU-Aufbau</h2>
        
        <div className="flex gap-6 items-center">
          <div className="flex-1">
            <p className="text-xl mb-4 text-gray-800">
              Die CPU ist das zentrale Rechenelement in Computern. Moderne CPUs integrieren verschiedene spezialisierte Komponenten auf einem Chip.
            </p>
            <p className="text-xl text-gray-800">
              Erfahre mehr über den physischen und logischen Aufbau einer modernen CPU.
            </p>
          </div>
          
          <div className="flex-1 flex justify-center items-center">
            <div className="text-center">
              <InteractiveImage 
                emoji="🔍" 
                alt="CPU Die" 
                description="Ein moderner CPU-Die enthält mehrere Milliarden Transistoren auf wenigen Quadratzentimetern." 
                position="left"
              />
              <p className="mt-2 text-gray-800">CPU-Die</p>
              <p className="text-sm text-gray-700">Der zentrale Silizium-Chip mit allen Schaltkreisen</p>
            </div>
          </div>
        </div>
      </div>
    ),
    
    // CPU Die and Package
    (
      <div className="flex flex-col space-y-6">
        <h2 className="text-3xl font-bold pb-2 mb-4 border-b-2 border-gray-200">CPU-Die und Package</h2>
        
        <div className="flex justify-center gap-10 mb-8">
          <div className="text-center">
            <InteractiveImage 
              emoji="🧩" 
              alt="CPU Die" 
              description="Auf einem modernen CPU-Die können sich über 50 Milliarden Transistoren befinden!" 
            />
            <p className="mt-2 text-gray-800">CPU-Die</p>
            <p className="text-sm text-gray-700">Herzstück mit Milliarden von Transistoren</p>
          </div>
          
          <div className="text-center">
            <InteractiveImage 
              emoji="📦" 
              alt="CPU Package" 
              description="Das Package schützt den empfindlichen Silizium-Die und hat Kontaktflächen zur Verbindung mit dem Mainboard." 
            />
            <p className="mt-2 text-gray-800">CPU-Package</p>
            <p className="text-sm text-gray-700">Schützende Hülle mit Kontaktflächen</p>
          </div>
          
          <div className="text-center">
            <InteractiveImage 
              emoji="🔌" 
              alt="CPU Socket" 
              description="Moderne CPU-Sockel haben bis zu 4.000+ Kontaktpins zur Daten- und Stromübertragung." 
            />
            <p className="mt-2 text-gray-800">CPU-Socket</p>
            <p className="text-sm text-gray-700">Aufnahme der CPU auf dem Mainboard</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">CPU-Bauweise:</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg p-4 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-2 text-gray-800">Monolithisch</h4>
              <p className="text-gray-700">Ein einzelner großer Die enthält alle CPU-Komponenten (traditioneller Ansatz von Intel)</p>
            </div>
            <div className="rounded-lg p-4 bg-gray-50 shadow-sm">
              <h4 className="font-bold mb-2 text-gray-800">Chiplet</h4>
              <p className="text-gray-700">Mehrere kleinere Dies werden zu einer CPU kombiniert (AMD Ryzen-Architektur)</p>
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