import { Flyer, InteractiveImage } from '../components/Flyer';

const Einfuehrung = () => {
  const pages = [
    // Introduction page
    (
      <div className="flex flex-col space-y-4">
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
          <h3 className="font-bold text-2xl mb-2 text-gray-800">Entdecke in dieser Präsentation:</h3>
          <ul className="grid grid-cols-3 gap-3 text-gray-800">
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
      </div>
    )
  ];

  return <Flyer pages={pages} />;
};

export default Einfuehrung;
