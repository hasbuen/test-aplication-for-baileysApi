/**
 * Componente que representa um botão de configuração.
 * @component
 * @name Config
 * @param {Object} props - Propriedades do componente.
 * @param {function} props.onClick - Função a ser chamada quando o botão é clicado.
 */
import React from 'react';
import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const Config: React.FC<ButtonProps> = ({ onClick }) => {

  /**
   * Renderiza o componente do botão de configuração.
   * @returns {JSX.Element} - Elemento JSX representando o botão de configuração.
   */
  return (
    <IconButton onClick={onClick}>
      <Menu />
    </IconButton>
  );
};

export default Config;
