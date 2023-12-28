// MensagemInput.tsx
import { TextField } from '@mui/material';
import React, { useState } from 'react';

interface MensagemInputProps {
  onMensagemChange: (mensagem: string) => void;
}

const MsgInput: React.FC<MensagemInputProps> = ({ onMensagemChange }) => {
  const [mensagem, setMensagem] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novaMensagem = event.target.value;
    setMensagem(novaMensagem);
    onMensagemChange(novaMensagem);
  };

  return (
      <TextField
        label=" Mensagem * "

        id="outlined-basic"
        variant="outlined"

        type="text"

        className="input"
        
        value={mensagem}
        onChange={handleChange}
      />
  );
};

export default MsgInput;
