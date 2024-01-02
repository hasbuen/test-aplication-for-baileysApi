import { useState, useEffect } from 'react';

const useValidaToken = () => {
  const [aprovaToken, setResposta] = useState(false);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const validaToken = () => {

      const confere = token.valueOf();
      if (confere.length > 0) {
        setResposta(true);

      } else if (confere.trim().length === 0) {
        setResposta(false);
      }
    };

    validaToken();
  }, [token]);

  return { aprovaToken, setToken };
};

export default useValidaToken;
