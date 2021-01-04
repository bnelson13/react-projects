import React from 'react';

const userInput = (props) => {
  const inputStyle = {
    font: 'inherit',
    margin: '20px auto',
    border: '1px dashed blue',
    padding: '8px',
  };

  return (
    <div className="UserInput">
      <input style={inputStyle} type="text" onChange={props.changed} value={props.name}></input>
      <p>Input Length: {props.inputLength}</p>
    </div>
  );
};

export default userInput;
