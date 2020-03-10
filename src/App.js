import React, { useCallback } from 'react';
import Dropzone from './Dropzone';

import './App.css';

function App() {

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles, rejectedFiles)
    acceptedFiles.forEach((file) => {

      const reader = new FileReader();

      reader.onabort = () => console.log('file reading aborted.');
      reader.onerror = () => console.log('File Read Fail.');
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
  }, []);

  return (
    <main className="App">
      <h1 className="text-center">Drag Example with Drop capabilities</h1>
      <Dropzone onDrop={onDrop} accept={"images/*"} />
    </main>
  )
}

export default App;
