import axios from "axios";

//Cria uma instancia personalizada do Axios
const api = axios.create({
  //Define a URL base para todas as requisições feitas usando essa instância api
  baseURL: "https://viacep.com.br/ws/",
});

//Função que faz a consulta na API usando a instância personalizada criada anteriormente
export const getCepData = async (cep: number) => {
  const response = await api.get(`${cep}/json/`);
  return response.data;
};
