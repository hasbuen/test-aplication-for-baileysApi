# Desafio de Desenvolvimento - integra-whats-professional

Este projeto foi desenvolvido como parte de um desafio para aprovação a uma vaga de desenvolvimento na [Nome da Empresa]. O objetivo é demonstrar habilidades em React, Material-UI, manipulação de estado e estruturação de projeto.

## Tecnologias Utilizadas

- React
- Material-UI

## Configuração do Ambiente

Antes de executar o projeto, é necessário configurar o arquivo `.env` na raiz do projeto com a seguinte variável:

```typescript
VITE_ENDPOINT=ENDERECO_API
```

## estruturação
```
│   App.tsx
│   main.tsx
│   vite-env.d.ts
│
├───components
│   ├───commons
│   │   │   index.ts
│   │   │
│   │   ├───cards
│   │   │   ├───FileCard
│   │   │   │       index.tsx
│   │   │   │
│   │   │   └───TextCard
│   │   │           index.tsx
│   │   │
│   │   └───menu
│   │           index.tsx
│   │
│   ├───containers
│   │   └───Testadores
│   │           index.tsx
│   │
│   ├───modals
│   │   └───ConexaoModal
│   │           index.tsx
│   │
│   └───UI
│       │   index.ts
│       │
│       ├───Buttons
│       │   ├───Config
│       │   │       index.tsx
│       │   │
│       │   └───Enviar
│       │           index.tsx
│       │
│       └───Inputs
│           ├───Arquivo
│           │       index.tsx
│           │
│           ├───Mensagem
│           │       index.tsx
│           │
│           ├───Telefone
│           │       index.tsx
│           │
│           └───Token
│                   index.tsx
│
├───docs
│   │   .nojekyll
│   │   index.html
│   │   modules.html
│   │
│   └───assets
│           highlight.css
│           main.js
│           navigation.js
│           search.js
│           style.css
│
├───dtos
│       arquivo.dto.tsx
│       conexao.dto.tsx
│       mensagem.dto.tsx
│       telefone.dto.tsx
│       token.dto.tsx
│
├───enums
│   │   index.ts
│   │
│   ├───MensagensEnum
│   │       index.tsx
│   │
│   └───RotulosEnum
│           index.tsx
│
├───hooks
│       useValidaArquivo.tsx
│       useValidaMensagem.tsx
│       useValidaTelefone.tsx
│       useValidaToken.tsx
│
├───services
│       factory.ts
│
├───styles
│       global.css
│
└───utils
    │   index.ts
    │
    ├───ConfigMenuUtil
    │       index.tsx
    │
    ├───FileFormUtil
    │       index.tsx
    │
    └───TextFormUtil
            index.tsx