import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
  return (
    <div onClick={props.click} className="inputValidation">
      <p>{props.character}</p>
    </div>
  );
};

export default CharComponent;
