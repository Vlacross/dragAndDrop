import React from 'react';

const Data = ({ data }) => {
  return (
    <div className="file-item">
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
