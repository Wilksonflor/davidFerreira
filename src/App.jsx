import "./App.css";
import { NossosTrabalhos } from "./components/Trabalhos/NossosTrabalhos";
import { Associados } from "./pages/Associados/Associados";

import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <Home />
      <NossosTrabalhos />
      <Associados/>
    </>
  );
}

export default App;
