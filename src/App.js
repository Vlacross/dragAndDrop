import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import cuid from 'cuid';

import Dropzone from './Dropzone';
import DataList from './DataList';
import Data from './fileData';

import './App.css';

function App() {
  const [ data, setData ] = useState(Data);
  const viewState = () => {
    console.log(data)
  }

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    console.log({
      'acceptedFiles': acceptedFiles,
      'rejectedFiles': rejectedFiles
    })

    acceptedFiles.map(file => {
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

  const moveData = (dragIndex, hoverIndex) => {

    const draggedData = data[dragIndex];
    console.log('inMoveData')

    setData(
      /* https://github.com/kolodny/immutability-helper#update */
      update(data, {
        $splice: [[dragIndex, 1], [hoverIndex, 0, draggedData]]
      })
    );
  };

  return (
    <main className="App">
      <h1 className="text-center">Drag Example with Drop capabilities</h1>
      <Dropzone onDrop={onDrop} accept={'image/*'} />
      <button onClick={viewState}>viewState</button>
      <DndProvider backend={HTML5Backend}>
        <DataList datai={data} moveData={moveData} />
      </DndProvider>
    </main>
  )
}

export default App;
