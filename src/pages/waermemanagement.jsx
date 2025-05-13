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
                <div className="w-24 flex">
                  <div className="h-6 w-full bg-gradient-to-r from-blue-500 to-blue-500 rounded-l-lg rounded-r-lg"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="text-sm text-gray-800">Normale Leistung</p>
                  <p className="text-xs text-gray-600">CPU bei optimaler Temperatur</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-24 flex">
                  <div className="h-6 w-3/4 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-l-lg rounded-r-lg"></div>
                </div>
                <div className="flex-1 pl-2">
                  <p className="text-sm text-gray-800">Leichte Drosselung</p>
                  <p className="text-xs text-gray-600">CPU bei ~90°C, 25% Leistungsverlust</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-24 flex">
                  <div className="h-6 w-1/2 bg-gradient-to-r from-red-500 to-red-500 rounded-l-lg rounded-r-lg"></div>
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
                  <p className="font-bold text-gray-800">Stromverluste</p>
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
    )
  ];

  return <Flyer pages={pages} />;
};

export default Waermemanagement; 