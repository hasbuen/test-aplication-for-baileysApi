// useTelefoneValidation.ts
import { useState } from 'react';

const useValidaTelefone = () => {
  const [isValid, setIsValid] = useState(false);

  const validaTelefone = (numero: string) => {
    // Lógica de validação do número de telefone
    // Substitua a lógica abaixo pela sua própria lógica de validação
    const regex = /^\d{11}$/; // Exemplo: 10 dígitos numéricos
    const isValid = regex.test(numero);
    setIsValid(isValid);
  };

  return { isValid, validaTelefone };
};

export default useValidaTelefone;
