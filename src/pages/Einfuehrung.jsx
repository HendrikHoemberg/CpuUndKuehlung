import Flyer from '../components/Flyer';

const Einfuehrung = () => {
  const fontSizes = {
    heading: '3rem',  
    paragraph: '1.5rem',  
    subheading: '1.5rem', 
    listItem: '1.5rem',  
    smallText: '1.2rem'  
  };

  const pages = [
    (
      <div className="flex flex-col space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-600 pb-2" style={{ fontSize: fontSizes.heading }}>CPU und Kühlung</h2>
        <p className="text-lg" style={{ fontSize: fontSizes.paragraph }}>
          In der modernen Computertechnologie sind CPUs (Central Processing Units) das Herzstück jedes Computers. Sie führen Berechnungen aus, verarbeiten Daten und steuern die Funktionen des Computers.
        </p>
        <p style={{ fontSize: fontSizes.paragraph }}>
          Doch mit der steigenden Leistungsfähigkeit wird auch die Wärmeentwicklung zu einem kritischen Faktor. Eine effektive Kühlung ist daher unerlässlich für die Leistung und Langlebigkeit moderner Prozessoren.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-600">
          <h3 className="font-bold text-black" style={{ fontSize: fontSizes.subheading }}>Schlüsselfaktoren dieser Präsentation:</h3>
          <ul className="list-disc pl-5 space-y-1 mt-2" style={{ fontSize: fontSizes.listItem }}>
            <li>Grundlegende Architektur moderner CPUs</li>
            <li>Funktionsweise und Arbeitsprinzipien</li>
            <li>Wärmeerzeugung und thermische Probleme</li>
            <li>Verschiedene Kühlmethoden und ihre Effektivität</li>
            <li>Moderne Konzepte des Wärmemanagements</li>
          </ul>
        </div>
      </div>
    ),
    (
      <div className="flex flex-col space-y-6">
        <h2 className="text-2xl font-bold text-black border-b-2 border-green-600 pb-2" style={{ fontSize: fontSizes.heading }}>Historische Entwicklung</h2>
        <p style={{ fontSize: fontSizes.paragraph }}>
          Die Entwicklung der CPUs begann in den 1970er Jahren mit einfachen Prozessoren wie dem Intel 4004. Seitdem hat sich die Leistung exponentiell gesteigert, was durch das Moore'sche Gesetz beschrieben wird: Die Anzahl der Transistoren auf einem Chip verdoppelt sich etwa alle zwei Jahre.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-600" style={{ fontSize: fontSizes.subheading }}>Frühe CPUs (1970-1990):</h3>
            <ul className="list-disc pl-5 mt-2" style={{ fontSize: fontSizes.listItem }}>
              <li>Wenige MHz Taktfrequenz</li>
              <li>Einfache Luftkühlung ausreichend</li>
              <li>Geringe Wärmeentwicklung</li>
              <li>TDP ca. 1W - 30W</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-600" style={{ fontSize: fontSizes.subheading }}>Moderne CPUs:</h3>
            <ul className="list-disc pl-5 mt-2" style={{ fontSize: fontSizes.listItem }}>
              <li>Multi-Core-Architekturen</li>
              <li>GHz-Taktfrequenzen</li>
              <li>Komplexe Kühlsysteme notwendig</li>
              <li>TDP oft über 100W</li>
            </ul>
          </div>
        </div>
        <p className="text-sm italic text-gray-600 mt-4" style={{ fontSize: fontSizes.smallText }}>
          Die Herausforderungen bei der CPU-Kühlung sind mit der steigenden Leistung und Transistordichte kontinuierlich gewachsen.
        </p>
      </div>
    )
  ];

  return <Flyer pages={pages} title="Einführung: CPU und Kühlung" />;
};

export default Einfuehrung;
