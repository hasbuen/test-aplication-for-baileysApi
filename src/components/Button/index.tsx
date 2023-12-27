// Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <button className='button' onClick={onClick}>ENVIAR</button>;
};

export default Button;