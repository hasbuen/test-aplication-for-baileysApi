export default interface ArquivoDTO {
    quandoArquivoAlerar: (aprovaArquivo: boolean, arquivo: File | null) => void;
  }