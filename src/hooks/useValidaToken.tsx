import Factory from '@/services/factory';
import { useState, useEffect } from 'react';

const useValidaToken = () => {
  const [aprovaToken, setResposta] = useState(false);
  const [token, setToken] = useState<string>(new Factory().obterTokenArmazenado());

  useEffect(() => {
    const validaToken = () => {

      const confere = token.valueOf();
      if (confere.length > 0) {
        setResposta(true);

      } else if (confere === '' || confere === null) {
        setResposta(false);
      }
    };

    validaToken();
  }, [token]);

  return { aprovaToken, setToken };
};

export default useValidaToken;
