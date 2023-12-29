import Factory from "@/services/factory";
import { EMensagem } from "@/enums";

export const TextFormController = async (
  tokenValidado: boolean,
  token: string,

  telefoneValidado: boolean,
  telefone: string,

  mensagemValidada: boolean,
  mensagem: string
  
) => {

  if (!tokenValidado) 
    return EMensagem.TOKEN_INVALIDO;

  if (!telefoneValidado) 
    return EMensagem.TELEFONE_INVALIDO;

  if (!mensagemValidada)
    return EMensagem.MENSAGEM_INVALIDA;

  try {
    const factoryInstance = new Factory();
    const confereEnvio = await factoryInstance.enviarMensagem(token, telefone, mensagem);

    return (confereEnvio) ? EMensagem.SUCESSO_ENVIO_MENSAGEM : EMensagem.FALHA_ENVIO_MENSAGEM;
  
  } catch (error) {
    return EMensagem.FALHA_ENVIO_MENSAGEM;
  }
};

export default TextFormController;