// Arquivo.tsx
import React from 'react';
import { TextField } from '@mui/material';
import useValidaArquivo from '@/hooks/useValidaArquivo.tsx';
import ArquivoDTO from '@/dtos/arquivo.dto';


const Arquivo: React.FC<ArquivoDTO> = ({ quandoArquivoAlerar }) => {
  const { aprovaArquivo, validaArquivo } = useValidaArquivo();

  const manipular = (event: React.ChangeEvent<HTMLInputElement>) => {
    const arquivo = event.target.files?.[0] || null;

    validaArquivo(arquivo);
    quandoArquivoAlerar(aprovaArquivo, arquivo);
  };

  return (
    <TextField
      type="file"
      className="input"
      onChange={manipular}
    />
  );
};

export default Arquivo;
