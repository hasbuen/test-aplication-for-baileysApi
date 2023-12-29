// Arquivo: App.tsx

import { TextForm, FileForm } from "@/components/commons/cards";

/**
 * Componente principal da aplicação.
 *
 * Este componente renderiza um formulário de texto e um formulário de arquivo.
 *
 * @component
 * @example
 * // Exemplo de uso do componente App:
 * <App />
 *
 * @returns {JSX.Element} - O componente React do App.
 */
function App() {
  // ... código do componente ...

  return (
    <>
      {/* Contêiner principal da aplicação */}
      <div className="container">

        {/* Linha que contém os formulários */}
        <div className="row">

          {/* Componente de formulário de texto */}
          <TextForm />

          {/* Componente de formulário de arquivo */}
          <FileForm />

        </div>

      </div>
    </>
  );
}

export default App;
