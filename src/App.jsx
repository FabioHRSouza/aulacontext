import './App.css'
// [x] importar o contexto
// [x] usar o contexto
// [x] criar o provider
// [x] passar o valor para o provider
import {Item} from './Components/Item'
import {UsuarioContext} from './context/usuarioContext'
import { useContext } from 'react'
function App() {
  // pegar os valores do contexto
  const usuario = useContext(UsuarioContext)
  
  return (
    <UsuarioContext.Provider value={usuario}>
      
      <Item/>
      
    
    </UsuarioContext.Provider>
  )
}

export default App
