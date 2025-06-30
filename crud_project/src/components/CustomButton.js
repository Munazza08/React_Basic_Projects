import React from 'react';

const CustomButton = ({ text, onClick, className = '', type = 'button', disabled = false }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default CustomButton;
