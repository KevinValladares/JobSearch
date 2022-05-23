import React, { useEffect, useState } from 'react'
import { postWithToken } from '../API/Conexion'
import OfferInfo from '../Components/OfferInfo'
import '../Style/VerOferta.css'

const VerOfertas = () => {

  const [ofertas, setOfertas] = useState([])


  const ListadoOfertas = async (e) => {


    try {

      const respuesta = await postWithToken("/api/jobs/employer")

      setOfertas(respuesta.data);
     
    } catch (error) {

      console.log(error.response.data)
    }

  }


  useEffect(() => {

    ListadoOfertas();

  }, [])


  return (

    <div className="OffertDetail">
      {
        ofertas.map((oferta) => (
          
          <OfferInfo offert={oferta} key={oferta._id} />
        )
        )
      }

    </div>

  )
}

export default VerOfertas