import React, { useState, useEffect } from 'react';
import useValidaArquivo from '@/hooks/useValidaArquivo.tsx';
import ArquivoDTO from '@/dtos/arquivo.dto';

const Arquivo: React.FC<ArquivoDTO> = ({ quandoArquivoAlerar }) => {
  const { aprovaArquivo, setArquivo } = useValidaArquivo();
  const [novoArquivo, setNovoArquivo] = useState<File | undefined>(undefined);

  const manipular = (event: React.ChangeEvent<HTMLInputElement>) => {
    const arquivoSelecionado = event.target.files?.[0];

    setNovoArquivo(arquivoSelecionado);
  };

  useEffect(() => {
    if (novoArquivo) {
      setArquivo(novoArquivo);
      quandoArquivoAlerar(aprovaArquivo, novoArquivo);
    }
  }, [aprovaArquivo, novoArquivo, quandoArquivoAlerar, setArquivo]);

  return (
    <input
      type="file"
      className="input"
      onChange={manipular}
    />
  );
};

export default Arquivo;