import React, { useCallback } from 'react';
import Dropzone from './Dropzone';

import './App.css';

function App() {

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  return (
    <main className="App">
      <h1 className="text-center">Drag Example with Drop capabilities</h1>
      <Dropzone onDrop={onDrop} accept={"images/*"} />
    </main>
  )
}

export default App;
