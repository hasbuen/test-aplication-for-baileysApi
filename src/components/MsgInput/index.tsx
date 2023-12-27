// MensagemInput.tsx
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
      <input
        className='textfield'
        type="text"
        value={mensagem}
        onChange={handleChange}
        placeholder="Mensagem *"
      />
  );
};

export default MsgInput;
