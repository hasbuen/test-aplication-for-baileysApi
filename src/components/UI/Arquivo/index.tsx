import React, { useState, useEffect } from 'react';
import useValidaArquivo from '@/hooks/useValidaArquivo.tsx';
import ArquivoDTO from '@/dtos/arquivo.dto';

/**
 * Componente de Arquivo.
 *
 * @component
 * @example
 * // Exemplo de uso:
 * <Arquivo quandoArquivoAlerar={handleFileChange} />
 *
 * @param {object} props - As propriedades do componente.
 * @param {Function} props.quandoArquivoAlerar - Função a ser chamada quando o arquivo for alterado.
 * @returns {JSX.Element} - O elemento React do componente Arquivo.
 */
const Arquivo: React.FC<ArquivoDTO> = ({ quandoArquivoAlerar }) => {
  const { aprovaArquivo, setArquivo } = useValidaArquivo();
  const [novoArquivo, setNovoArquivo] = useState<File | undefined>(undefined);

  /**
   * Manipula o evento de mudança do arquivo.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - O evento de mudança do input.
   * @returns {void}
   */
  const manipular = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const arquivoSelecionado = event.target.files?.[0];

    setNovoArquivo(arquivoSelecionado);
  };

  useEffect(() => {
    if (novoArquivo) {
      setArquivo(novoArquivo);
      console.log("3: " + aprovaArquivo);
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