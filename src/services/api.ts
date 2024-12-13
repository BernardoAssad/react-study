// Classe apí de service para poder fazer a configuração do acesso ao backend.
// importando a biblioteca axios que trabalha com a api, axios
import axios from "axios";

// Criando função para iniciar o axios, com o ip da minha maquina com o protocolo http e a porta do backend
// E um timeout de 700 para cancelar caso demore
export const api = axios.create({
    baseURL: "http://192.168.15.158:3333",
    timeout: 700
})