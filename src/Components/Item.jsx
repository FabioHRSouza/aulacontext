import React, { useContext } from 'react'
import { UsuarioContext } from '../context/usuarioContext'

export function Item() {
  // pegar os valores do contexto
  const usuario = useContext(UsuarioContext)

  
  return (
    <div>
      <h1>Nome: {usuario.nome}</h1>
      <h2>Idade: {usuario.idade}</h2>
      <h3>Email: {usuario.email}</h3>
    </div>
  )
}