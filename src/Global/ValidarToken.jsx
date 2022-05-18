import { useContext, useEffect } from 'react';
import { authContext } from '../Context/authContext'

export const ValidarToken = () => {

  const context = useContext(authContext)


  useEffect(() => {

console.log('Usefect');

    const token = localStorage.getItem("token")

    if (token) {


      fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data.failed) {
            console.log(data)
          } else {
            context.setAuth({
              id: data.user.id,
              name: data.user.name,
              logged: true
            })
          }

        })
        .catch(error => console.log(error))
    } else {
      console.log('No hay token')
    }
  }, [])


}
