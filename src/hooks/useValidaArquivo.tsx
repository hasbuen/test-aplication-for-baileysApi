import { useState } from 'react';

const useValidaArquivo = () => {
  const [aprovaArquivo, setResposta] = useState(false);

  const validaArquivo = (arquivo: File | null) => {
    if (!arquivo) {
      setResposta(false);
      return;
    }

    // Define o limite de tamanho em bytes (ex: 5 MB)
    const limiteTamanho = 5 * 1024 * 1024; // 5 MB em bytes

    if (arquivo.size <= limiteTamanho) {
      setResposta(true);
    } else {
      setResposta(false);
    }
  };

  return { aprovaArquivo, validaArquivo };
};

export default useValidaArquivo;
