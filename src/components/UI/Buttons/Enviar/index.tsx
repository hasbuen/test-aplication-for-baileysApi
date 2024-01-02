/**
 * Componente que representa um botão de envio personalizado.
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {function} props.onClick - Função a ser chamada quando o botão é clicado.
 * @param {string} [props.label] - Rótulo a ser exibido no botão (opcional).
 */
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

interface ButtonProps {
  onClick: () => void;
  label?: string;
}

// Estilo personalizado para o botão de envio
const EnviarCustomizado = styled(Button)<ButtonProps>({
  color: 'white', // Cor do texto branca
  fontWeight: 'bold', // Texto em negrito
  backgroundColor: green[400],
  '&:hover': {
    backgroundColor: green[500],
  },
});

/**
 * Componente que renderiza um botão de envio personalizado.
 * @param {Object} props - Propriedades do componente.
 * @param {function} props.onClick - Função a ser chamada quando o botão é clicado.
 * @param {string} [props.label] - Rótulo a ser exibido no botão (opcional).
 * @returns {JSX.Element} - Elemento JSX representando o botão de envio personalizado.
 */
const Enviar: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <EnviarCustomizado className='button' onClick={onClick} variant="contained">
      {label}
    </EnviarCustomizado>
  );
};

export default Enviar;
