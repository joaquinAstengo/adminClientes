import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'

const Formulario = ({ cliente }) => {

    const navigate = useNavigate()

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .min(2, 'El nombre es muy corto')
            .required('El nombre del cliente es obligatorio'),

        empresa: Yup.string().required('El nombre de la empresa es obligatorio'),
        email: Yup.string().required('El email es obligatorio').email('El email debe ser un email válido'),
        telefono: Yup.number().integer('Número no válido').positive('Número no válido').typeError('Número no válido')
    })


    const handleSubmit = async (valores) => {

        try {

            const url = "http://localhost:4000/clientes"

            const respuesta = await fetch(url, {
                method: "POST",
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const resultado = await respuesta.json()
            navigate('/clientes')

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>

            <Formik
                initialValues={{
                    nombre: cliente?.nombre ?? "",
                    empresa: cliente?.empresa ?? "",
                    email: cliente?.email ?? "",
                    telefono: cliente?.telefono ?? "",
                    notas: cliente?.notas ?? ""
                }}
                enableReinitialize={true}

                onSubmit={async (values, { resetForm }) => {
                    await handleSubmit(values)
                    resetForm()
                }}
                validationSchema={nuevoClienteSchema}
            >
                {({ errors, touched }) => {
                    return (

                        <Form className='mt-10'>
                            <div className='mb-6'>
                                <label
                                    className='text-gray-800'
                                    htmlFor='nombre'>Nombre: </label>

                                <Field
                                    placeholder="Nombre del Cliente"
                                    id="nombre"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    name="nombre" />
                                {errors.nombre && touched.nombre ? (
                                    <Alerta>{errors.nombre}</Alerta>
                                ) : null}
                            </div>

                            <div className='mb-4'>
                                <label
                                    className='text-gray-800'
                                    htmlFor='empresa'>Empresa: </label>

                                <Field
                                    placeholder="Empresa del Cliente"
                                    id="empresa"
                                    type="text"
                                    name="empresa"
                                    className="mt-2 block w-full p-3 bg-gray-50" />
                                {errors.empresa && touched.empresa ? (
                                    <Alerta>{errors.empresa}</Alerta>
                                ) : null}
                            </div>

                            <div className='mb-4'>
                                <label
                                    className='text-gray-800'
                                    htmlFor='email'>Email: </label>

                                <Field
                                    name="email"
                                    placeholder="Email del Cliente"
                                    id="email"
                                    type="email"
                                    className="mt-2 block w-full p-3 bg-gray-50" />
                                {errors.email && touched.email ? (
                                    <Alerta>{errors.email}</Alerta>
                                ) : null}
                            </div>

                            <div className='mb-4'>
                                <label
                                    className='text-gray-800'
                                    htmlFor='telefono'>Teléfono: </label>

                                <Field
                                    name="telefono"
                                    placeholder="Teléfono del Cliente"
                                    id="telefono"
                                    type="tel"
                                    className="mt-2 block w-full p-3 bg-gray-50" />
                                {errors.telefono && touched.telefono ? (
                                    <Alerta>{errors.telefono}</Alerta>
                                ) : null}
                            </div>

                            <div className='mb-4'>
                                <label
                                    className='text-gray-800'
                                    htmlFor='notas'>Notas: </label>

                                <Field
                                    name="notas"
                                    as="textarea"
                                    placeholder="Notas del Cliente"
                                    id="notas"
                                    type="tel"
                                    className="mt-2 block w-full p-3 bg-gray-50 h-40" />
                            </div>

                            <input type="submit"
                                value="Agregar Cliente"
                                className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg' />
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

Formulario.defaultProps = {
    cliente: {}
}

export default Formulario