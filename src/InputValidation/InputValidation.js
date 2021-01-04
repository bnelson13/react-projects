import React from 'react';

const InputValidation = (props) => {
  let inputLengthOutput = <p>Text too Short</p>;

  if (props.length >= 5) {
    inputLengthOutput = <p>Text long enough</p>;
  }

  return <div className="inputValidation">{inputLengthOutput}</div>;
};

export default InputValidation;
