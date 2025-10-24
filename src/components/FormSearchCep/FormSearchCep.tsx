import { getCepData } from "../../services/cepService";
import ReturnCep from "../ReturnCep/ReturnCep";
import "./FormSearch.css";
import { useState } from "react";

interface SearchCep {
  inputCepValue: number;
  setCepValue: (arg: number) => void;
}

export interface CepData {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  uf: string;
  ddd?: string;
  erro?: boolean;
}

const SearchCep: React.FC<SearchCep> = ({ inputCepValue, setCepValue }) => {
  //variavel para controlar o tamanho máximo do campo de input
  const cepMaxLenght = 8;

  const [error, setError] = useState<string>("");
  const [apiData, setApiData] = useState<CepData | null>(null);

  //Função para consultar e retornar os dados do CEP da API,
  //utiliza a função 'getCepData' contida no service 'cepService'
  //para coletar os dados da API e armazena-los no 'useState' 'apiData'
  const getCep = async () => {
    try {
      const result = await getCepData(inputCepValue);
      if (result.erro) {
        setError("CEP não encontrado ou inválido!");
        setApiData(null);
      } else {
        setApiData(result);
        setError("");
      }
    } catch (err) {
      console.log(err);
      setError("Erro ao buscar o CEP.");
      setApiData(null);
    }
  };

  //Previne o resultado padrão do clique no botão do form e
  // chama a função assincrona 'getCep'
  const hadleSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    getCep();
  };

  //Faz o controle do tamanho do campo de input.
  //A função retorna uma cópia da string usando a váriavel 'cepMaxLenght' como tamanho final
  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCepValue(Number(event.target.value.slice(0, cepMaxLenght)));
  };

  return (
    <div className="container-geral">
      <h3>CEP</h3>
      <span>
        Digitos restantes: {cepMaxLenght - inputCepValue.toString().length}
      </span>
      <form className="container-form">
        <input
          className="input-form"
          type="number"
          value={inputCepValue}
          onInput={handleCepChange}
          name=""
          id=""
          placeholder="37016350"
        />

        <button
          className="button-form"
          onClick={(event) => hadleSearchClick(event)}
        >
          Buscar
        </button>
        <input
          type="reset"
          className="button-form"
          onClick={() => setCepValue(0)}
        />
      </form>

      <ReturnCep apiData={apiData} erro={error} />
    </div>
  );
};

export default SearchCep;
