// App.tsx
import { useState } from 'react';
import Factory from '@/services/factory';
import Token from '@/components/Token';
import Telefone from '@/components/Telefone';
import Arquivo from '@/components/Arquivo';
import Botao from '@/components/Botao';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    const [ArquivoValidado, setRespostaArquivo] = useState<boolean>(false);
    const [ArquivoPronto, setArquivo] = useState<File | null>(null);

    const manipulandoArquivoAlterado = (aprovaArquivo: boolean, arquivo: File | null) => {
        setRespostaArquivo(aprovaArquivo);
        setArquivo(arquivo);
    };


    const enviarFormulario = async () => {
        if (!tokenValidado) {
            toast.warning('Token não fornecido.');
            return;
        }

        if (!telefoneValidado) {
            toast.warning(`Telefone no formato inválido. Exemplo a seguir: 554533016606 `);
            return;
        }

        if (!ArquivoValidado) {
            toast.warning('Arquivo deve ter no máximo 5MB.');
            return;
        }


        try {
            const factoryInstance = new Factory();
            const confereEnvio = await factoryInstance.sendFile(tokenPronto, telefonePronto, ArquivoPronto);

            if (confereEnvio) {
                toast.success('Arquivo enviada com sucesso!');
            } else {
                toast.error('Oops. Algo deu errado!');
            }
        } catch (error) {
            console.error('Erro ao enviar Arquivo:', error);
            toast.error('Oops. Algo deu errado!');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                <Box gridColumn="span 12">
                    <h1>Teste de envio</h1>
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

                    <Botao onClick={enviarFormulario} />

                </Box>
            </Box>

            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </Container>
    );
}

export default FileCard;