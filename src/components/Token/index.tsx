// TokenInput.tsx
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import useValidaToken from './hook/useValidaToken';


interface PropriedadeDoToken {
  quandoTokenAlterar: (aprovaToken: boolean, token: string) => void;
}

const Token: React.FC<PropriedadeDoToken> = ({ quandoTokenAlterar }) => {
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
