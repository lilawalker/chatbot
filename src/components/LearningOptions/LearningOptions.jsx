import React from 'react';

import './LearningOptions.css';

const LearningOptions = (props) => {
  const options = [
    { text: 'Our Values', handler: props.actionProvider.handleValuesList, id: 1 },
    {
      text: 'Our Clients',
      handler: props.actionProvider.handleClientList,
      id: 2,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button className='learning-option-button' key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className='learning-options-container'>{optionsMarkup}</div>;
};

export default LearningOptions;
