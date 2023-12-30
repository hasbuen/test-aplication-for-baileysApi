// TokenInput.tsx
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import useValidaToken from '@/hooks/useValidaToken';
import TokenDTO from '@/dtos/token.dto';


const Token: React.FC<TokenDTO> = ({ quandoTokenAlterar }) => {
  const {aprovaToken, validaToken } = useValidaToken();
  const [token, setResposta] = useState('');

  const manipular = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoToken = event.target.value;
    setResposta(novoToken);

    validaToken(novoToken);
    quandoTokenAlterar(aprovaToken, novoToken);
  };



  return (
      <TextField
        label=" Token cadastrado * "

        id="outlined-basic"
        variant="outlined"

        type="text"

        className="input"

        value={token}
        onChange={manipular}
      />
  );
};

export default Token;
