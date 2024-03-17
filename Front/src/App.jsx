import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadrastro'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='*' element={<h1>Not Found</h1>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
