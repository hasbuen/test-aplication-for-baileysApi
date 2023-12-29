// MensagemInput.tsx

import React, { useState } from 'react';
import { TextField } from '@mui/material';
import useValidaMensagem from './hook/useValidaMensagem.tsx';

interface PropriedadeDaMensagem {
  quandoMensagemAlerar: (
    aprovaMensagem: boolean, mensagem: string) => void;
}

const Mensagem: React.FC<PropriedadeDaMensagem> = ({ quandoMensagemAlerar }) => {
  const [mensagem, setMensagem] = useState('');
  const { aprovaMensagem, validaMensagem } = useValidaMensagem();

  const manipular = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novaMensagem = event.target.value;

    setMensagem(novaMensagem);

    validaMensagem(novaMensagem);
    quandoMensagemAlerar(aprovaMensagem, novaMensagem);
  };

  return (
      <TextField
        label=" Mensagem * "

        id="outlined-basic"
        variant="outlined"

        type="text"

        className="input"
        
        value={mensagem}
        onChange={manipular}
      />
  );
};

export default Mensagem;
