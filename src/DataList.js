import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';


const type = "Image";

const Data = ({ data, index }) => {
  const ref = useRef(null);

  const [ collectedProps, drop ] = useDrop({
    accept: type,
    hover(item) {
      /*syntax of 'hover' from 'useDrop' API:
        hover(item, monitor) - Optional, called when an item is hovered over the component. You can check 'monitor.isOver({ shallow: true })' to test
                              whether the hoverhappens over JUST the current target, or over a nested one. Unlike 'drop()', this method will be called
                              even if 'canDrop()' is defined and returns false (You can check 'monitor.canDrop() to check this case').  
        src: https://react-dnd.github.io/react-dnd/docs/api/use-drop
      */
    }
  });

  
  const [{ isDragging }, drag] = useDrag({
    item: { type, id: data.id, index },
    collect: monitor => ({
      /* https://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor */
      isDragging: monitor.isDragging()
    })
  });
  
  drag(drop(ref))


  return (
    <div 
    ref={ref} 
    style={{ opacity: isDragging ? 0 : 1 }} 
    className="file-item"
    >
      <img alt={`data - ${data.id}`} src={data.src} className="file-data" />
    </div>
  );
};

const DataList = ({ datai }) => {

  const renderData = (data, index) => {
    return (
      <Data
        data={data}
        key={`${data.id}-data`}
        />
    );
  };

return <section className="file-list">{datai.map(renderData)}</section>
}

export default DataList;
