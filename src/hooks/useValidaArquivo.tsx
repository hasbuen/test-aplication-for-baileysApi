import { useState, useEffect } from 'react';

const useValidaArquivo = () => {
  const [aprovaArquivo, setResposta] = useState(false);
  const [arquivo, setArquivo] = useState<File | null>(null);

  useEffect(() => {
    const validaArquivo = () => {
      if (!arquivo) {
        setResposta(false);
        return;
      }

      const limiteTamanho = (5 * 1024) * 1024;

      if (arquivo.size > limiteTamanho) {
        setResposta(false);
      } else {
        setResposta(true);
      }
    };

    validaArquivo();
  }, [arquivo]);

  return { aprovaArquivo, setArquivo };
};

export default useValidaArquivo;
