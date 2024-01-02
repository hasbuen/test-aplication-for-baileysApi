import { useState, useEffect } from 'react';

/**
 * Hook personalizado para validar um arquivo.
 *
 * Este hook fornece funcionalidades para validar um arquivo com base em critérios específicos,
 * como o tamanho máximo permitido.
 *
 * @function
 * @returns {Object} Um objeto contendo o estado de aprovação do arquivo e a função para definir o arquivo.
 * @property {boolean} aprovaArquivo - Indica se o arquivo é aprovado de acordo com os critérios de validação.
 * @property {function} setArquivo - Função para definir o arquivo a ser validado.
 */
const useValidaArquivo = () => {
  /**
   * Estado para indicar se o arquivo é aprovado.
   * @type {boolean}
   */
  const [aprovaArquivo, setResposta] = useState(false);

  /**
   * Estado para armazenar o arquivo a ser validado.
   * @type {File | null}
   */
  const [arquivo, setArquivo] = useState<File | null>(null);

  /**
   * Efeito para realizar a validação do arquivo sempre que o estado do arquivo for alterado.
   */
  useEffect(() => {
    /**
     * Função para validar o arquivo com base em critérios específicos.
     */
    const validaArquivo = () => {
      // Verifica se não há arquivo definido
      if (!arquivo) {
        setResposta(false);
        return;
      }

      // Define um limite de tamanho para o arquivo (5 MB neste exemplo)
      const limiteTamanho = (5 * 1024) * 1024;

      // Verifica se o tamanho do arquivo excede o limite
      if (arquivo.size > limiteTamanho) {
        setResposta(false);
      } else {
        setResposta(true);
      }
    };

    // Chama a função de validação do arquivo
    validaArquivo();
  }, [arquivo]);

  // Retorna um objeto contendo o estado de aprovação do arquivo e a função para definir o arquivo
  return { aprovaArquivo, setArquivo };
};

export default useValidaArquivo;