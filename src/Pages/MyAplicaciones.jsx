import React, { useEffect, useState } from 'react'
import { postWithToken } from '../API/Conexion'
import OfferInfo from '../Components/OfferInfo'
import '../Style/VerOferta.css'



const MyAplicaciones = () => {

  const [myaplicacion, setMyAplicacion] = useState([])


  const ListadoAplicaciones = async (e) => {
    try {
      const respuesta = await postWithToken("/api/jobs/me")
      setMyAplicacion(respuesta.data);
    } catch (error) {
      console.log(error.response.data)
    }

  }


  useEffect(() => {

    ListadoAplicaciones();

  }, [])



  return (
    <div className="OffertDetail">
    {
      myaplicacion.map((aplicacion) => (
        
        <OfferInfo offert={aplicacion} key={aplicacion._id} />
      )
      )
    }

  </div>
  )
}

export default MyAplicaciones