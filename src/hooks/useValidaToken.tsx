
import { useState } from 'react';

const useValidaToken = () => {
  const [aprovaToken, setResposta] = useState(false);

  const validaToken = (token: string) => {
    setResposta(token.length > 0 ? true : false);
  };

  return { aprovaToken, validaToken };
};

export default useValidaToken;
