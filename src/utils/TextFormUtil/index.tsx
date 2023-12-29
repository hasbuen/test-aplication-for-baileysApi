// textCardUtils.ts

import Factory from "@/services/factory";

export const TextFormController = async (
  tokenValidado: boolean,
  token: string,

  telefoneValidado: boolean,
  telefone: string,

  mensagemValidada: boolean,
  mensagem: string
  
) => {
  if (!tokenValidado) {
    return 'Token não fornecido.';
  }

  if (!telefoneValidado) {
    return `Telefone no formato inválido. Exemplo a seguir: 554533016606 `;
    return;
  }

  if (!mensagemValidada) {
    return 'Mensagem deve conter no máximo 255 caracteres.';
  }


  try {
    const factoryInstance = new Factory();
    const confereEnvio = await factoryInstance.sendText(token, telefone, mensagem);

    if (confereEnvio) 
      return 'Mensagem enviada com sucesso!';

  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    return 'Oops. Algo deu errado!';
  }
};

export default TextFormController;