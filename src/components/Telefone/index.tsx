// Telefone.tsx
import React, { useState } from 'react';
import useValidaTelefone from './hook/useValidaTelefone';
import { TextField } from '@mui/material';

interface PropriedadeDoTelefone {
  quandoTelefoneAlterar: (
    aprovaTelefone: boolean, telefone: string) => void,
}

const Telefone: React.FC<PropriedadeDoTelefone> = ({ quandoTelefoneAlterar }) => {
  const { aprovaTelefone, validaTelefone } = useValidaTelefone();
  const [telefone, setResposta] = useState('');
 

  const manipular = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoTelefone = event.target.value;
    setResposta(novoTelefone);

    validaTelefone(novoTelefone);
    quandoTelefoneAlterar(aprovaTelefone, novoTelefone);
  };

  return (
      <TextField
        label=" Número * "

        id="outlined-basic"
        variant="outlined"

        type="text"
       
        className="input"

        value={telefone}
        onChange={manipular}
      />
  );
};

export default Telefone;