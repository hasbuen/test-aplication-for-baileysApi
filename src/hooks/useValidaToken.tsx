import { useState, useEffect } from 'react';

/**
 * Hook personalizado para validar um token.
 *
 * Este hook fornece funcionalidades para validar um token com base em critérios específicos,
 * como a presença de caracteres não brancos.
 *
 * @function
 * @returns {Object} Um objeto contendo o estado de aprovação do token e a função para definir o token.
 * @property {boolean} aprovaToken - Indica se o token é aprovado de acordo com os critérios de validação.
 * @property {function} setToken - Função para definir o token a ser validado.
 */
const useValidaToken = () => {
  /**
   * Estado para indicar se o token é aprovado.
   * @type {boolean}
   */
  const [aprovaToken, setResposta] = useState(false);

  /**
   * Estado para armazenar o token a ser validado.
   * @type {string}
   */
  const [token, setToken] = useState<string>('');

  /**
   * Efeito para realizar a validação do token sempre que o estado do token for alterado.
   */
  useEffect(() => {
    /**
     * Função para validar o token com base em critérios específicos.
     */
    const validaToken = () => {
      // Converte o token para uma string e verifica seu comprimento
      const confere = token.valueOf();
      
      // Verifica se o token contém caracteres não brancos
      if (confere.length > 0) {
        setResposta(true);
      } else if (confere.trim().length === 0) {
        setResposta(false);
      }
    };

    // Chama a função de validação do token
    validaToken();
  }, [token]);

  // Retorna um objeto contendo o estado de aprovação do token e a função para definir o token
  return { aprovaToken, setToken };
};

export default useValidaToken;