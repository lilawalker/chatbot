import React from 'react';

import './StaticData.css';

const StaticData = (props) => {
  console.log(props);
  const valuesMarkup = props.options.map((value) => (
    <button key={value.id} className='value-list-item'>
      {value.text}
    </button>
  ));

  return <div className='value-options-container'>{valuesMarkup}</div>;
};

export default StaticData;
