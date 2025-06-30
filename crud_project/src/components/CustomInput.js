import React from "react";

const CustomInput = ({ className="", name, placeholder, value, onChange, style }) => {
  return (
    <input className={className} name={name} placeholder={placeholder} value={value} onChange={onChange} required/>
  );
};

export default CustomInput;
