// useTelefoneValidation.ts
import { useState } from 'react';
import validator from 'validator';

const useValidaTelefone = () => {
  const [aprovaTelefone, setResposta] = useState(false);

  const validaTelefone = (telefone: string) => {

    const resultado =  validator.isMobilePhone(telefone, 'any', { strictMode: false });
    setResposta(resultado);

  };

  return { aprovaTelefone, validaTelefone };
};

export default useValidaTelefone;
