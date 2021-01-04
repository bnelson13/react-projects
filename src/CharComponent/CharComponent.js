import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
  return (
    <div className="charComponent" onClick={props.click}>
      <p>{props.inputChar}</p>
    </div>
  );
};

export default CharComponent;
