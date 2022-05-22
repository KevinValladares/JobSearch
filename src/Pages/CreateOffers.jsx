import React, { useContext, useRef, useState } from 'react'
import { authContext } from '../Context/authContext'
import '../Style/CreateOffers.css'
import { postWithToken } from '../API/Conexion'
const CreateOffers = () => {

    const context = useContext(authContext)

    const titulo = useRef()
    const pais = useRef()
    const provincia = useRef()
    const ciudad = useRef()
    const descripcion = useRef()
    const categoria = useRef()
    const salario = useRef(1)
    const [error, setError] = useState('')

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2

    })


    const Validar = (e) => {

        e.preventDefault();

        const valores = 
            {
                employer: {
                    id: context.auth.id,
                    name: context.auth.name,
                    email: context.auth.email,
                    role: context.auth.role
                },
                description: descripcion.current.value,
                title: titulo.current.value,
                category: [categoria.current.value],
                location: {
                    country: pais.current.value,
                    province: provincia.current.value,
                    city: ciudad.current.value
                },
                salary: salario.current.value

            }
        ;


        console.log(JSON.stringify( valores));
    }



    const CrearOferta = async (e) => {
        e.preventDefault()

        try {

            setError('')

            if (!titulo.current.value.trim()) {
                setError('El campo titulo esta vacio')
                return;
            }
            if (!categoria.current.value.trim()) {
                setError('El campo categoria esta vacio')
                return;
            }
            if (!pais.current.value.trim()) {
                setError('El campo país esta vacio')
                return;
            }
            if (!provincia.current.value.trim()) {
                setError('El campo provincia esta vacio')
                return;
            }
            if (!ciudad.current.value.trim()) {
                setError('El campo ciudad esta vacio')
                return;
            }
            if (!salario.current.value.trim()) {
                setError('El campo salario esta vacio')
                return;
            }
            if (!descripcion.current.value.trim()) {
                setError('El campo descripción esta vacio')
                return;
            }

        
        ;

            const respuesta = await postWithToken("/api/jobs",
            {
                employer: {
                    id: context.auth.id,
                    name: context.auth.name,
                    email: context.auth.email,
                    role: context.auth.role
                },
                description: descripcion.current.value,
                title: titulo.current.value,
                category: [categoria.current.value],
                location: {
                    country: pais.current.value,
                    province: provincia.current.value,
                    city: ciudad.current.value
                },
                salary: salario.current.value

            } )


           alert('oferta creada')
        } catch (error) {

            console.log(error.response.data)
        }


    }






    return (

        <div className="Offer">

            <div className="form-containerOffert">
                <form onSubmit={CrearOferta} className="formOffer">


                    <label htmlFor="titulo" className="labelOffer  labeltitulo">Titulo de la oferta</label>
                    <input ref={titulo} type="text" id="titulo"
                        placeholder="Developer front-end..." className="input input-titulo" />


                    <div className="user-details">

                        <div className="inputbox">
                            <label htmlFor="categoria" className="labelOffer">Categoria</label>
                            <input ref={categoria} type="text" id="categoria"
                                placeholder="JavaScript" className="input input-categoria" />
                        </div>
                        <div className="inputbox">
                            <label htmlFor="pais" className="labelOffer">Pais</label>
                            <input ref={pais} type="text" id="pais"
                                placeholder="Nicaragua" className="input input-pais" />
                        </div>
                        <div className="inputbox">
                            <label htmlFor="provincia" className="labelOffer">Provincia</label>
                            <input ref={provincia} type="text" id="provincia"
                                placeholder="Managua" className="input input-provincia" />
                        </div>
                        <div className="inputbox">
                            <label htmlFor="ciudad" className="labelOffer">Ciudad</label>
                            <input ref={ciudad} type="text" id="ciudad"
                                placeholder="Managua" className="input input-ciudad" />
                        </div>


                    </div>

                    <label htmlFor="salario" className="labelOffer">Salario</label>
                    <input ref={salario} type="number" id="salario" min={1}
                        placeholder="10,000" className="input input-salario" />


                    <label htmlFor="descripcion" className="labelOffer">Descripción</label>
                    <textarea ref={descripcion} type="text" id="descripcion"
                        placeholder="Información sobre que tiene que cumplir el aplicante"
                        className="input input-descripcion">
                    </textarea>


                    <input
                        type="submit"
                        value="Crear Oferta"
                        className="primary-button login-button"
                    />



                </form>
                {
                    error ?
                        (
                            <div className="alert">
                                {error}
                            </div>

                        )
                        :
                        null

                }

            </div>



        </div>


    )
}

export default CreateOffers