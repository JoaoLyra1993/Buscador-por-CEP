import { useState } from "react";
import "./App.css";
import SearchCep from "./components/FormSearchCep/FormSearchCep";

function App() {
  const [inputCepValue, setCepValue] = useState<number>(57036350);

  return (
    <>
      <div className="container">
        <header className="header-container">
          <h1>Buscador por CEP</h1>
        </header>

        <main>
          <SearchCep inputCepValue={inputCepValue} setCepValue={setCepValue} />
        </main>
      </div>
    </>
  );
}

export default App;
