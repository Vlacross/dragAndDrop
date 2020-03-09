import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ onDrop, accept }) => {

  const onDrop = useCallback(acceptedFiles => {
    /*can do something with files here */
  }, []);

  /* Example of how to set styles/classname based on dragActive
  
  const getClassName = (className, isActive) => {
    if (!isActive) return className;
    return `${className} ${className}-active`;
  }

  <div className={getClassName('dropzone', isDragActive)} {...getRootProps()}></div>
  
  */

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  return (
    <div {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
    </div>
  )

}

export default Dropzone;