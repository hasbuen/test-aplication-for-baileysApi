// Arquivo: App.tsx

import Testadores from './components/containers/Testadores';
import { ConfigMenu } from './components/commons';

/**
 * Componente principal da aplicação.
 *
 * O componente `App` serve como o ponto de entrada principal da aplicação React.
 *
 * @component
 * @returns {JSX.Element} O componente principal da aplicação contendo o `ConfigMenu` e `Testadores`.
 * @see {@link ConfigMenu} Para mais detalhes sobre o componente de menu de configuração.
 * @see {@link Testadores} Para mais detalhes sobre o componente de testadores.
 */
function App() {
  return (
    <>
      {/* Renderiza o componente de menu de configuração */}
      <ConfigMenu />

      {/* Renderiza o componente de testadores */}
      <Testadores />
    </>
  );
}

export default App;