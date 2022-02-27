import Formulario from "../components/Formulario"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditarCliente = () => {


  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true);


  const { id } = useParams()

  useEffect(() => {

    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)
      } catch (error) {
        console.log(error)
      }
      setCargando(false)
    }
    obtenerClienteAPI()
  }, [])


  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Utilice este formulario para editar datos del cliente</p>


      {cliente?.nombre ? (

        <Formulario
          cargando={cargando}
          cliente={cliente}
        ></Formulario>
      ): <p>Cliente ID no válido</p>}
    </>
  )
}

export default EditarCliente