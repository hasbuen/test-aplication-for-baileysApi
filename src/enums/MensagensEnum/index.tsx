
enum EMensagem {
    SUCESSO_GENERICO = 'Operação realizada com sucesso!',
    FALHA_GENERICA = 'Oops. Algo eu errado!',
    TOKEN_INVALIDO = 'Token não fornecido.',
    TOKEN_ARMAZENADO = 'Token já está armazenado.',
    TELEFONE_INVALIDO = 'Telefone no formato inválido. Exemplo a seguir: 554533016606',
    MENSAGEM_INVALIDA = 'Mensagem deve conter no máximo 255 caracteres.',
    ARQUIVO_INVALIDO = 'Arquivo inválido, lembrando que no máximo 5MB.',
    SUCESSO_ENVIO_MENSAGEM = 'Mensagem enviada com sucesso!',
    FALHA_ENVIO_MENSAGEM = 'Oops. Algo deu errado ao enviar a mensagem!',
    SUCESSO_ENVIO_ARQUIVO = 'Arquivo enviada com sucesso!',
    FALHA_ENVIO_ARQUIVO = 'Oops. Algo deu errado ao enviar o arquivo!',
  }
  
  export default EMensagem;
  