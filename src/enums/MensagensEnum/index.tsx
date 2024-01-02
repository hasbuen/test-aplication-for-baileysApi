/**
 * Enumeração de mensagens utilizadas na aplicação.
 */
enum EMensagem {
  SUCESSO_GENERICO = 'Operação realizada com sucesso!',
  FALHA_GENERICA = 'Oops. Algo deu errado!',
  TOKEN_INVALIDO = 'Token não fornecido.',
  TOKEN_ARMAZENADO = 'Token já está armazenado.',
  TELEFONE_INVALIDO = 'Formato de telefone inválido. Exemplo correto: 554533016606',
  MENSAGEM_INVALIDA = 'Mensagem deve conter no máximo 255 caracteres.',
  ARQUIVO_INVALIDO = 'Arquivo inválido. O tamanho máximo permitido é 5MB.',
  SUCESSO_ENVIO_MENSAGEM = 'Mensagem enviada com sucesso!',
  FALHA_ENVIO_MENSAGEM = 'Oops. Algo deu errado ao enviar a mensagem!',
  SUCESSO_ENVIO_ARQUIVO = 'Arquivo enviado com sucesso!',
  FALHA_ENVIO_ARQUIVO = 'Oops. Algo deu errado ao enviar o arquivo!',
}

export default EMensagem;