// TokenInput.tsx
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
      <input
        className='textfield'
        type="text"
        value={token}
        onChange={handleChange}
        placeholder="Token cadastrado *"
      />
  );
};

export default TokenInput;
