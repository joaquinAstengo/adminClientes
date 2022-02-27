import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import VerCliente from './paginas/VerCliente'
import EditarCliente from './paginas/EditarCliente'
import NuevoCliente from './paginas/NuevoCliente'

function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="editar/:id" element={<EditarCliente />} />
          <Route path=":id" element={<VerCliente />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
