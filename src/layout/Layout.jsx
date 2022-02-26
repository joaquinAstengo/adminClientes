import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
const Layout = () => {

  const location = useLocation()

  const urlActual = location.pathname

  return (
    <div className='md:flex md:min-h-screen '>

      <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-4xl font-black text-white text-center'>CRM - Clientes</h2>

        <nav className='mt-10'></nav>
        <Link
          className={`${urlActual === '/clientes' ? 'text-blue-100' : 'text-white'} text-2xl block mt-2 hover:text-blue-100`}
          to="/clientes">Clientes
          </Link>
        <Link
          className={`${urlActual === '/clientes/nuevo' ? 'text-blue-100' : 'text-white'} text-2xl block mt-2 hover:text-blue-100`}
          to="/clientes/nuevo">Nuevo Cliente
          </Link>
      </div>

      <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />

      </div>
    </div>
  )
}

export default Layout