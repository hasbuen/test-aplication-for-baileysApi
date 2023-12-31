import { useState } from 'react';
import { Token, Telefone, Arquivo, Enviar } from '@/components/UI';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FileFormController } from '@/utils';
import { EMensagem, ERotulos } from '@/enums';

function FileCard() {

    const [tokenValidado, setRespostaToken] = useState<boolean>(false);
    const [tokenPronto, setToken] = useState<string>('');

    const manipulandoTokenAlterado = (aprovaToken: boolean, token: string) => {
        setRespostaToken(aprovaToken);
        setToken(token);
    };

    const [telefoneValidado, setRespostaTelefone] = useState<boolean>(false);
    const [telefonePronto, setTelefone] = useState<string>('');

    const manipulandoTelefoneAlterado = (aprovaTelefone: boolean, telefone: string) => {
        setRespostaTelefone(aprovaTelefone);
        setTelefone(telefone);
    };

    const [arquivoValidado, setRespostaArquivo] = useState<boolean>(false);
    const [arquivoPronto, setArquivo] = useState<File | null>(null);

    const manipulandoArquivoAlterado = (aprovaArquivo: boolean, arquivo: File | null) => {
        setRespostaArquivo(aprovaArquivo);
        setArquivo(arquivo);
    };

    const enviarFormulario = async () => {
        const resultado = await FileFormController(
            tokenValidado,
            tokenPronto,
            telefoneValidado,
            telefonePronto,
            arquivoValidado,
            arquivoPronto
        );

        if (typeof resultado === 'string')
            switch (resultado) {
                case EMensagem.SUCESSO_ENVIO_ARQUIVO.toString():
                    toast.success(resultado);
                    break;

                case EMensagem.FALHA_ENVIO_ARQUIVO.toString():
                    toast.error(resultado);
                    break;

                default:
                    toast.warning(resultado);
                    break;
            }

    };

    return (
        <Container maxWidth="sm">
            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                <Box gridColumn="span 12">
                    <h1>Teste de Envio</h1>
                </Box>
                <Box gridColumn="span 6">

                    <Token quandoTokenAlterar={manipulandoTokenAlterado} />

                </Box>
                <Box gridColumn="span 6">

                    <Telefone quandoTelefoneAlterar={manipulandoTelefoneAlterado} />

                </Box>
                <Box gridColumn="span 12">

                    <Arquivo quandoArquivoAlerar={manipulandoArquivoAlterado} />

                </Box>
                <Box gridColumn="span 12" textAlign="right">

                    <Enviar onClick={enviarFormulario} label={ERotulos.BOTAO_ENVIAR} />

                </Box>
            </Box>

            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </Container>
    );
}

export default FileCard;