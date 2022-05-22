import React, { useContext, useRef, useState } from 'react'
import { authContext } from '../Context/authContext'
import { useNavigate } from 'react-router-dom'
import '../Style/Login.css'
import { post } from '../API/Conexion'

const Login = () => {

  const [error, setError] = useState('')
  const context = useContext(authContext)
  const email = useRef()
  const password = useRef()
  const historial = useNavigate()


  const SentToCreateAccount = () => {

    { historial('/CreateAccount') }
  }

  const Login = async (e) => {
    e.preventDefault()

    try {

      setError('')

      if (!email.current.value.trim()) {
        setError('El campo email esta vacio')
        return;
      }

      if (!password.current.value.trim()) {
        setError('El campo password esta vacio')
        return;
      }


      const respuesta = await post("/api/auth/login", { // Peticion de login
        email: email.current.value,
        password: password.current.value
      })
      const { token, user } = await respuesta.data

      localStorage.setItem("token", token)
      context.setAuth({
        id: user.id,
        name: user.name,
        email:user.email,
        role: user.role,
        logged: true
      })

      { historial('/') }

    } catch (error) {

      //console.log(error.response.data.error);
      error.response.data.error && setError('Credenciales incorrectas')
    }


  }



  return (


    <div className='login'>
      <div className='form-containerLogin'>

        <form onSubmit={Login} className='form'>


          <div>
            <label className="label">Email address</label>
            <input
              ref={email}
              type="email"
              id="email"
              placeholder="********"
              className="input input-email" />

            <label className="label">Password</label>
            <input
              ref={password}
              type="password"
              id="password"
              placeholder="********"
              className="input input-password" />

            <input type="submit" value="Iniciar Sesión" className="primary-button login-button" />

            {/* <a href="#">Forgot my password</a> */}
          </div>

          <div>
            <button onClick={SentToCreateAccount} className="secundary-button signup-button">Crear Cuenta</button>
          </div>
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

export default Login