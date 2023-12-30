// Button.tsx
import React from 'react';
import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const Config: React.FC<ButtonProps> = ({ onClick }) => {

  return <IconButton onClick={onClick}>
    <Menu />
  </IconButton>

};

export default Config;