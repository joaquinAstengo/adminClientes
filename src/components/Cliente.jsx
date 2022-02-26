import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cliente = ({ cliente }) => {

    const navigate = useNavigate()

    const { nombre, empresa, email, telefono, notas, id } = cliente


    return (
        <tr className='border-b-2 hover:bg-gray-50'>
            <td className='p-3'>{nombre}</td>
            <td className='p-3'>
                <p><span className='text-gray-800 uppercase font-bold'>Email:</span>{email}</p>
                <p><span className='text-gray-800 uppercase font-bold'>Tel:</span>{telefono}</p>
            </td>
            <td className='p-3'>{empresa}</td>
            <td className='p-3'>
                <button
                    className='bg-yellow-500 text-white block hover:bg-yellow-600 w-full p-2 uppercase font-bold text-xs'
                    type='button'
                    onClick={() => navigate(`/clientes/${id}`)}>Ver</button>

                <button
                    className='bg-blue-600 text-white block hover:bg-blue-700 w-full p-2 uppercase font-bold mt-3 text-xs'
                    type='button'
                    onClick={()=> navigate(`/clientes/editar/${id}`)}>Editar</button>

            <button
                className='bg-red-600 text-white block hover:bg-red-700 w-full mt-3 p-2 uppercase font-bold text-xs'
                type='button'>Eliminar</button>

        </td>
    </tr >
  )
}

export default Cliente