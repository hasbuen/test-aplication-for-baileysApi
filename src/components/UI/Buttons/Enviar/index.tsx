// Button.tsx
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';


interface ButtonProps {
  onClick: () => void;
  label: string;
}

const EnviarCustomizado = styled(Button)<ButtonProps>({
  color: 'white', // Cor do texto branca
  fontWeight: 'bold', // Texto em negrito
  backgroundColor: green[400],
  '&:hover': {
    backgroundColor: green[500],
  },
});


const Enviar: React.FC<ButtonProps> = ({ onClick, label }) => {
  return <EnviarCustomizado className='button' label={label} onClick={onClick} variant="contained" />;
};

export default Enviar;