import React, { useEffect, useState, useRef } from 'react'
import { postWithToken, GetWithToken, } from '../API/Conexion'
import ApplyOffert from '../Components/ApplyOffert'
import '../Style/PostularOfertas.css'

const PostularOfertas = () => {

  const [error, setError] = useState('')
 
  const [ofertas, setOfertas] = useState([])
  const Filtro = useRef()

  const ListarOfertasPorCategoria = async (e) => {
    e.preventDefault()
    try {

      setError('')

      if (!Filtro.current.value.trim()) {
        setError('El campo filtro esta vacio')
        return;
      }

      const respuesta = await postWithToken("/api/jobs/category", {
        category: [Filtro.current.value]
      })
      setOfertas(respuesta.data);
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const ListarTodasOfertas = async (e) => {
    e.preventDefault()
    try {
      const respuesta = await GetWithToken("/api/jobs")
      setOfertas(respuesta.data);
    } catch (error) {
      console.log(error.response.data.error)
    }
  }



  return (

    <div className='ContainerPostular'>

      <div className="panelFiltro">
        <form onSubmit={ListarOfertasPorCategoria}>
          <label htmlFor="FiltroCategoria" className='labelFiltro'>Filtrar por</label>
          <select className="inputFiltro">
            <option value='employer'>Categoria</option>
            <option value='applicant'>Ubicacion</option>
          </select>
          <input ref={Filtro} id='FiltroCategoria' type="text" className="FiltroCategoria" />
          <input type="submit" value='Buscar' className='btnPrimario btnBuscarFiltro' />
        </form>
        <button onClick={ListarTodasOfertas} className='btnPrimario btnSinlfiltro'>Sin Filtro</button>
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

      <div className="ContainerOfertasList">
        {
          ofertas.length !== 0 ? (ofertas.map((oferta) => (
            <div>
              <ApplyOffert offert={oferta} key={oferta._id} />
             
            </div>
          ))) : null
        }


      </div>
    </div>
  )
}

export default PostularOfertas