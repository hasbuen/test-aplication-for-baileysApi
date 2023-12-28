// TokenInput.tsx
import { TextField } from '@mui/material';
import React, { useState } from 'react';


interface TokenInputProps {
  onTokenChange: (token: string) => void;
}

const TokenInput: React.FC<TokenInputProps> = ({ onTokenChange }) => {
  const [token, setToken] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoToken = event.target.value;
    setToken(novoToken);
    onTokenChange(novoToken);
  };



  return (
      <TextField
        label=" Token cadastrado * "

        id="outlined-basic"
        variant="outlined"

        type="text"

        className="input"

        value={token}
        onChange={handleChange}
      />
  );
};

export default TokenInput;
