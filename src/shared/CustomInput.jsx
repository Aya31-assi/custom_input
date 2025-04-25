import React from "react";

function CustomInput(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
      />
    </div>
  );
}

export default CustomInput;