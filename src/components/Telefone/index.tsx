// Telefone.tsx
import React, { useState } from 'react';
import useValidaTelefone from './hook/useValidaTelefone';

interface TelefoneProps {
  onValidChange: (isValid: boolean, numero: string) => void,
}

const Telefone: React.FC<TelefoneProps> = ({ onValidChange }) => {
  const [numero, setNumero] = useState('');
  const { isValid, validaTelefone } = useValidaTelefone();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoNumero = event.target.value;
    setNumero(novoNumero);

    // Chamando a função de validação do número
    validaTelefone(novoNumero);
    onValidChange(isValid, novoNumero);
  };

  return (
      <input
        className='textfield'
        type="text"
        value={numero}
        onChange={handleChange}
        placeholder="Número *"
      />
  );
};

export default Telefone;