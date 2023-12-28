// App.tsx
import { useState } from 'react';
import Factory from '../../../services/factory';
import Token from '../../Token';
import Telefone from '../../Telefone';
import Mensagem from '../../Mensagem';
import Botao from '../../Botao';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


function TextCard() {
    const [isNumeroValido, setIsNumeroValido] = useState<boolean>(false);
    const [numeroTelefone, setNumeroTelefone] = useState<string>('');
    const [token, setToken] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');

    const handleValidChange = (isValid: boolean, numero: string) => {
        setIsNumeroValido(isValid);
        setNumeroTelefone(numero);
    };

    const handleTokenChange = (novoToken: string) => {
        setToken(novoToken);
    };

    const handleMensagemChange = (novaMensagem: string) => {
        setMensagem(novaMensagem);
    };

    const handleButtonClick = () => {
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

        // Se todas as verificações passarem, realizar a ação
        const factoryInstance = new Factory();
        factoryInstance.sendText(numeroTelefone, mensagem, token);
    };

    return (
        <Container maxWidth="sm">
            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                <Box gridColumn="span 12">
                    <h1>Teste de envio</h1>
                </Box>
                <Box gridColumn="span 6">

                    <Token onTokenChange={handleTokenChange} />

                </Box>
                <Box gridColumn="span 6">

                    <Telefone onValidChange={handleValidChange} />

                </Box>
                <Box gridColumn="span 12">

                    <Mensagem onMensagemChange={handleMensagemChange} />

                </Box>
                <Box gridColumn="span 12" textAlign="right">

                    <Botao onClick={handleButtonClick} />
                    
                </Box>
            </Box>
        </Container>
    );
}

export default TextCard;
