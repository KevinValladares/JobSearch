import React, { useEffect, useState } from 'react'
import { postWithToken } from '../API/Conexion'

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


    <div>

      {
        ofertas.map((item) =>

          <ul>
            <li key={item.id}>
              {item.title}

            </li>
          </ul>




        )
      }
    </div>
  )
}

export default VerOfertas