import "./ReturnCep.css";
import type { CepData } from "../FormSearchCep/FormSearchCep";

interface ReturnCepProps {
  apiData: CepData | null;
  erro: string;
}

const ReturnCep = ({ apiData, erro }: ReturnCepProps) => {
  if (apiData) {
    return (
      <section>
        <p>Logadouro: {apiData.logradouro}</p>
        <p>Bairro: {apiData.bairro}</p>
        <p>Cidade: {apiData.localidade}</p>
        <p>UF: {apiData.uf}</p>
      </section>
    );
  } else {
    return (
      <section>
        <p>{erro.toString()}</p>
      </section>
    );
  }
};

export default ReturnCep;
