// textCardUtils.ts

import Factory from "@/services/factory";



export const handleButtonClick = (
  isNumeroValido: boolean,
  numeroTelefone: string,
  token: string,
  mensagem: string
) => {
  if (!isNumeroValido) {
    console.log('Número de telefone inválido. Ação não realizada.');
    return;
  }

  if (!token) {
    console.log('Token não fornecido. Ação não realizada.');
    return;
  }

  if (!mensagem) {
    console.log('Mensagem de texto não fornecida. Ação não realizada.');
    return;
  }

  const factoryInstance = new Factory();
  factoryInstance.sendText(numeroTelefone, mensagem, token);
};
