// Button.tsx
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';


interface ButtonProps {
  onClick: () => void;
}

const BotaoCustomizado = styled(Button)<ButtonProps>({
  color: 'white', // Cor do texto branca
  fontWeight: 'bold', // Texto em negrito
  backgroundColor: green[400],
  '&:hover': {
    backgroundColor: green[500],
  },
});


const Botao: React.FC<ButtonProps> = ({ onClick }) => {
  return <BotaoCustomizado onClick={onClick} variant="contained" endIcon={<SendIcon/>}> ENVIAR </BotaoCustomizado>;
};

export default Botao;