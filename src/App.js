import React, { useState, useCallback } from 'react';
import cuid from 'cuid';
import Dropzone from './Dropzone';
import DataList from './DataList';
import Data from './fileData';

import './App.css';

function App() {

  const [ data, setData ] = useState([Data]);

  const viewState = () => {
    console.log(data)
  }

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    console.log({
      'acceptedFiles': acceptedFiles,
      'rejectedFiles': rejectedFiles
    })

    rejectedFiles.map(file => {

      const reader = new FileReader();

      reader.onabort = () => console.log('file reading aborted.');
      reader.onerror = () => console.log('File Read Fail.');
      reader.onload = (e) => {
        setData(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result }
        ]);

        // const binaryStr = reader.result;
        // console.log('e', e.target)
        // console.log(binaryStr)
      };
      console.log(data)
      reader.readAsDataURL(file)
      // reader.readAsArrayBuffer(file)
    })
  }, []);

  return (
    <main className="App">
      <h1 className="text-center">Drag Example with Drop capabilities</h1>
      <Dropzone onDrop={onDrop} accept={"images/*"} />
      <button onClick={viewState}>viewState</button>
      <DataList datai={data} />
    </main>
  )
}

export default App;
