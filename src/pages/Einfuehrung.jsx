import { Flyer, InteractiveImage } from '../components/Flyer';

const Einfuehrung = () => {
  const pages = [
    // Introduction page
    (
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-4xl font-bold pb-2 mb-2 border-b-2 border-gray-200">CPU und Kühlung</h2>
        
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <p className="text-xl mb-2 text-gray-800">
              CPUs sind das Herzstück jedes Computers. Mit steigender Leistungsfähigkeit wird auch die Kühlung zu einem kritischen Faktor.
            </p>
            <p className="text-xl text-gray-800">
              Erfahre mehr über moderne Prozessoren und innovative Kühlkonzepte in dieser interaktiven Präsentation.
            </p>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="text-center">
              <InteractiveImage 
                emoji="🧠" 
                alt="CPU Brain" 
                description="Fun Fact: Moderne CPUs können über 100 Milliarden Schaltzyklen pro Sekunde ausführen!" 
                position="left"
              />
              <p className="mt-2 text-gray-800">Die CPU - Das Gehirn des Computers</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md p-5 rounded-xl mt-2">
          <h3 className="font-bold text-2xl mb-3 text-gray-800">Entdecke in dieser Präsentation:</h3>
          <ul className="grid grid-cols-3 gap-4 text-gray-800 mb-3">
            <li className="flex items-center">
              <span className="text-2xl mr-2">⚙️</span> 
              <span>Funktionsblöcke moderner CPUs</span>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-2">🔄</span> 
              <span>Single-/Multicore & RISC/CISC</span>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-2">🏢</span> 
              <span>AMD vs. Intel</span>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-2">⚡</span> 
              <span>Leistung & Kenngrößen</span>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-2">🧵</span> 
              <span>Parallelisierung</span>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-2">❄️</span> 
              <span>Kühlungstechnologien</span>
            </li>
          </ul>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-bold text-xl mb-2 text-gray-800">Was ist eine CPU?</h3>
            <p className="text-gray-700 mb-2">
              Die Central Processing Unit (CPU) ist die primäre Recheneinheit eines Computers. Sie führt Programmanweisungen aus, verarbeitet Daten und koordiniert die meisten anderen Komponenten des Systems.
            </p>
            <div className="flex items-center justify-start mt-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-gray-800"><strong>Wissenswert:</strong> Die ersten Mikroprozessoren der 1970er Jahre hatten nur wenige tausend Transistoren, während moderne CPUs mehrere Milliarden enthalten können.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-bold text-xl mb-2 text-gray-800">Warum ist Kühlung wichtig?</h3>
            <p className="text-gray-700 mb-2">
              Die elektrischen Schaltkreise in CPUs erzeugen Wärme durch elektrischen Widerstand. Ohne ausreichende Kühlung können Temperaturen schnell auf über 100°C ansteigen.
            </p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-red-50 rounded-lg p-2">
                <p className="text-xs text-red-800 font-bold">Zu hohe Temperaturen führen zu:</p>
                <ul className="list-disc list-inside text-xs text-gray-700">
                  <li>Thermal Throttling (Leistungsverlust)</li>
                  <li>Instabilität des Systems</li>
                  <li>Verkürzter Lebensdauer</li>
                  <li>Dauerhaften Schäden</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-800 font-bold">Effektive Kühlung ermöglicht:</p>
                <ul className="list-disc list-inside text-xs text-gray-700">
                  <li>Maximale Leistung</li>
                  <li>Übertaktungspotential</li>
                  <li>Längere Lebensdauer</li>
                  <li>Leiseren Betrieb</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  ];

  return <Flyer pages={pages} />;
};

export default Einfuehrung;
