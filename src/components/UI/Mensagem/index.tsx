// MensagemInput.tsx

import React, { useState } from 'react';
import { TextField } from '@mui/material';
import useValidaMensagem from '@/hooks/useValidaMensagem.tsx';
import MensagemDTO from '@/dtos/mensagem.dto';

const Mensagem: React.FC<MensagemDTO> = ({ quandoMensagemAlerar }) => {
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
