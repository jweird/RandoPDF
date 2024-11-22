import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import { pdf } from '@react-pdf/renderer';
import RandomDoc from './data/RandomDoc';
import data from './data/data.json';

function App() {
  const [selectedNumber, setSelectedNumber] = useState<number>();

  const numbers = [1, 2, 3, 4, 5];

  const getRandomItem = (array: string[]) =>
    array[Math.floor(Math.random() * array.length)];

  const shuffleWords = (array: string[]) =>
    array.sort(() => Math.random() - 0.5);

  const getRandomFileName = () => {
    const randomAnimal = getRandomItem(data.animals);
    const randomColor = getRandomItem(data.colors);
    const randomAdjective = getRandomItem(data.adjectives);

    const filename = shuffleWords([randomAdjective, randomColor, randomAnimal]);

    //filename with a combination of adjectives, color, animal
    return `${filename.join('-')}.pdf`.toLowerCase();
  };

  const handleDownload = async () => {
    if (!selectedNumber) return;

    for (let i = 0; i < selectedNumber; i++) {
      const fileName = getRandomFileName();

      // Generate PDF Blob using @react-pdf/renderer
      const blob = await pdf(<RandomDoc />).toBlob();

      // Create a link and trigger the download
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };
  return (
    <>
      <div>
        <h1> Rando PDF Maker </h1>
      </div>
      <div className='dropDownContainer'>
        <div className='dropDownLabel'>Select number of PDF's to generate:</div>
        <Dropdown
          items={numbers}
          onSelect={(item) => setSelectedNumber(item as number)}
        />
      </div>
      <div className='card'>
        {selectedNumber && (
          <button onClick={() => handleDownload()}>
            Download {selectedNumber} PDF
            {(selectedNumber as number) > 1 ? 's' : ''}
          </button>
        )}
      </div>
    </>
  );
}

export default App;
