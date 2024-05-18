import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { NossosTrabalhos } from "./components/Trabalhos/NossosTrabalhos";
import { Associados } from "./pages/Associados/Associados";

import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <Home />
      <NossosTrabalhos />
      <Associados />
      <Footer />
    </>
  );
}

export default App;
