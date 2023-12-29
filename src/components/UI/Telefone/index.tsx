// Telefone.tsx
import React, { useState } from 'react';
import useValidaTelefone from '@/hooks/useValidaTelefone';
import { TextField } from '@mui/material';
import TelefoneDTO from '@/dtos/telefone.dto';


const Telefone: React.FC<TelefoneDTO> = ({ quandoTelefoneAlterar }) => {
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