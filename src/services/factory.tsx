/**
 * Classe Factory para manipulação de funcionalidades relacionadas a tokens, mensagens e arquivos.
 *
 * Esta classe fornece métodos para armazenar tokens, obter tokens armazenados, enviar mensagens de texto
 * e enviar arquivos para um endpoint específico.
 *
 * @class
 */
class Factory {
    /**
     * Construtor da classe Factory.
     */
    constructor() { }
  
    /**
     * Armazena o token no localStorage.
     *
     * @async
     * @method
     * @param {string} token - O token a ser armazenado.
     * @returns {Promise<boolean>} Uma Promise que resolve para `true` se o token for armazenado com sucesso, `false` caso contrário.
     */
    async armazenarToken(token: string): Promise<boolean> {
      try {
        localStorage.setItem('token', token);
        return true;
      } catch {
        return false;
      }
    }
  
    /**
     * Obtém o token armazenado no localStorage.
     *
     * @method
     * @returns {string} O token armazenado, ou uma string vazia se não houver token armazenado.
     */
    obterTokenArmazenado(): string {
      return localStorage.getItem('token') || '';
    }
  
    /**
     * Envia uma mensagem de texto para um endpoint.
     *
     * @async
     * @method
     * @param {string} token - O token de autenticação.
     * @param {string} telefone - O número de telefone de destino da mensagem.
     * @param {string} mensagem - O corpo da mensagem de texto.
     * @returns {Promise<boolean>} Uma Promise que resolve para `true` se a mensagem for enviada com sucesso, `false` caso contrário.
     */
    async enviarMensagem(token: string, telefone: string, mensagem: string): Promise<boolean> {
      const endpoint = import.meta.env.VITE_ENDPOINT;
      console.log(endpoint)
      const url = new URL(endpoint);
  
      const body = {
        telefone,
        body: mensagem,
      };
  
      const headers = new Headers();
      //headers.append('X_TOKEN', token);
      headers.append('Authorization', `Bearer ${token}`);
      headers.append('Content-Type', 'application/json');
  
      const options: RequestInit = {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      };
  
      try {
        await fetch(url.toString(), options);
        return true;
      } catch (error) {
        return false;
      }
    }
  
    /**
     * Envia um arquivo para um endpoint.
     *
     * @async
     * @method
     * @param {string} token - O token de autenticação.
     * @param {string} telefone - O número de telefone de destino do arquivo.
     * @param {any} arquivo - O arquivo a ser enviado.
     * @returns {Promise<boolean>} Uma Promise que resolve para `true` se o arquivo for enviado com sucesso, `false` caso contrário.
     */
    async enviarArquivo(token: string, telefone: string, arquivo: any): Promise<boolean> {
      const endpoint = import.meta.env.VITE_ENDPOINT;
      const url = new URL(endpoint);
  
      const formData = new FormData();
      formData.append('number', telefone);
      formData.append('medias', arquivo);
  
      const headers = new Headers();
      headers.append('X_TOKEN', token);
      headers.append('Authorization', `Bearer ${token}`);
      headers.append('Content-Type', 'multipart/form-data');
  
      const options: RequestInit = {
        method: 'POST',
        headers,
        body: formData,
      };
  
      try {
        await fetch(url.toString(), options);
        return true;
      } catch (error) {
        return false;
      }
    }
  }
  
  export default Factory;  
