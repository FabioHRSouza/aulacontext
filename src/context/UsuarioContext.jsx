//Criar a pasta context dentro de src
//criar o arquivo usuarioContext.jsx com letra maiuscula
//criar o contexto

//createContext
//UsuarioContext é um componente e não uma variavel
import {createContext} from 'react';
//criação do contexto
export const UsuarioContext = createContext({
    nome: "Fabio H R Souza",
    idade: 43,
    email: "fabiohrsouza@gmail.com",
});