/**
 * Componente que representa um campo de entrada de arquivo.
 * @component
 * @name Arquivo
 * @param {Object} props - Propriedades do componente.
 * @param {function} props.quandoArquivoAlerar - Função chamada quando o arquivo é alterado.
 */
import React, { useState, useEffect } from 'react';
import useValidaArquivo from '@/hooks/useValidaArquivo.tsx';
import ArquivoDTO from '@/dtos/arquivo.dto';

/**
 * Componente funcional que representa um campo de entrada de arquivo.
 * @param {Object} props - Propriedades do componente.
 * @param {function} props.quandoArquivoAlerar - Função chamada quando o arquivo é alterado.
 * @returns {JSX.Element} - Elemento JSX representando o campo de entrada de arquivo.
 */
const Arquivo: React.FC<ArquivoDTO> = ({ quandoArquivoAlerar }) => {
  const { aprovaArquivo, setArquivo } = useValidaArquivo();
  const [novoArquivo, setNovoArquivo] = useState<File | undefined>(undefined);

  /**
   * Manipula a mudança no campo de entrada de arquivo.
   * @param {React.ChangeEvent<HTMLInputElement>} event - Evento de mudança.
   * @returns {void}
   */
  const manipular = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const arquivoSelecionado = event.target.files?.[0];

    setNovoArquivo(arquivoSelecionado);
  };

  useEffect(() => {
    if (novoArquivo) {
      setArquivo(novoArquivo);
      quandoArquivoAlerar(aprovaArquivo, novoArquivo);
    }
  }, [aprovaArquivo, novoArquivo, quandoArquivoAlerar, setArquivo]);

  /**
   * Renderiza o campo de entrada de arquivo.
   * @returns {JSX.Element} - Elemento JSX representando o campo de entrada de arquivo.
   */
  return (
    <input
      type="file"
      className="input"
      onChange={manipular}
    />
  );
};

export default Arquivo;