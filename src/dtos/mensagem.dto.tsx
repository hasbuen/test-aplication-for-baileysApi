export default interface MensagemDTO {
    quandoMensagemAlerar: (
      aprovaMensagem: boolean, mensagem: string) => void;
  }