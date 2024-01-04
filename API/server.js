const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3000; // Escolha a porta que desejar

app.use(bodyParser.json());
app.use(cors());

// Middleware para logar o corpo da requisição
app.use((req, res, next) => {
  console.log('Recebido do cliente:', req.body);
  next();
});

app.post('/api/enviar-mensagem', async (req, res) => {
  const { token, telefone, mensagem } = req.body;

  try {
    const url = 'https://i9solucoesinteligentes-api.whatsprofissional.com/api/messages/send';
    const body = JSON.stringify({
      number: telefone,
      body: mensagem,
    });

    // Faça a chamada para o endpoint fornecido
    const response = await fetch(url, {
      method: 'POST',
      body: body,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    const jsonResponse = await response.json();
    const success = jsonResponse === 'Mensagem enviada';

    res.json({ success });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/api/enviar-arquivo', async (req, res) => {
  const { token, telefone, arquivo } = req.body;

  const formData = new FormData();
  formData.append('number', telefone);
  formData.append('medias', arquivo);

  try {
    const url = 'https://i9solucoesinteligentes-api.whatsprofissional.com/api/messages/send';
    const body = JSON.stringify({
      number: telefone,
      body: formData,
    });

    // Faça a chamada para o endpoint fornecido
    const response = await fetch(url, {
      method: 'POST',
      body: body,
      headers: {
        'Content-type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
    });

    const jsonResponse = await response.json();
    const success = jsonResponse.success === 'Mensagem enviada';

    res.json({ success });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor em execução: http://localhost:${port}`);
});
