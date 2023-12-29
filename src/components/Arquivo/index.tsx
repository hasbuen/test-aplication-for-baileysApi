// Arquivo.tsx
import React from 'react';
import { TextField } from '@mui/material';
import useValidaArquivo from './hook/useValidaArquivo.tsx';

interface PropriedadeDaArquivo {
  quandoArquivoAlerar: (aprovaArquivo: boolean, arquivo: File | null) => void;
}

const Arquivo: React.FC<PropriedadeDaArquivo> = ({ quandoArquivoAlerar }) => {
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
