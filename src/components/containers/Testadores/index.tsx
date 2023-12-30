// Arquivo: App.tsx

import { TextCard, FileCard } from "@/components/commons";

function Testadores() {
  

  return (
    <>
      {/* Contêiner principal da aplicação */}
      <div className="container">

        {/* Linha que contém os formulários */}
        <div className="row">

          {/* Componente de formulário de texto */}
          <TextCard />

          {/* Componente de formulário de arquivo */}
          <FileCard />

        </div>

      </div>
    </>
  );
}

export default Testadores;
