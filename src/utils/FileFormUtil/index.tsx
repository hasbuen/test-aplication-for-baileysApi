import Factory from "@/services/factory";
import { EMensagem } from "@/enums";

export const FileFormController = async (
  tokenValidado: boolean,
  token: string,

  telefoneValidado: boolean,
  telefone: string,

  arquivoValidado: boolean,
  arquivo: File | null
  
) => {
  if (!tokenValidado)
    return EMensagem.TOKEN_INVALIDO;

  if (!telefoneValidado)
    return EMensagem.TELEFONE_INVALIDO;

  if (!arquivoValidado) 
    return EMensagem.ARQUIVO_INVALIDO;

  try {
    const factoryInstance = new Factory();

    if(token === null || token === '')
      return EMensagem.TOKEN_INVALIDO;

    const confereEnvio = await factoryInstance.enviarArquivo(token, telefone, arquivo);

    return (confereEnvio) ? EMensagem.SUCESSO_ENVIO_ARQUIVO : EMensagem.FALHA_ENVIO_ARQUIVO;

  } catch (error) {
    return EMensagem.FALHA_ENVIO_ARQUIVO;
  }
};

export default FileFormController;