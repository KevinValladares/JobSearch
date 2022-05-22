import React, { useRef, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from '../API/Conexion'
import { authContext } from '../Context/authContext'
import '../Style/CreateAccount.css'


const CreateAccount = () => {

  const [error, setError] = useState('')
  const context = useContext(authContext)
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const role = useRef()
  const historial = useNavigate()


  const createaccount = async (e) => {
    e.preventDefault()

    setError('')

    if (!name.current.value.trim()) {
      setError('El campo nombre esta vacio')
      return;
    }

    if (!email.current.value.trim()) {
      setError('El campo email esta vacio')
      return;
    }

    if (!password.current.value.trim()) {
      setError('El campo contraseña esta vacio')
      return;
    }

    if (role.current.value === '') {
      setError('Debe seleccionar un tipo de usuario')
      return;
    }



    const respuesta = await post("/api/auth/signup", {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      role: role.current.value
    })
    const { error, user, token } = await respuesta.data
    if (error) {
      console.log(error)
    } else {
      localStorage.setItem("token", token)
      context.setAuth({
        id: user.id,
        name: user.name,
        email:user.email,
        role: user.role,
        logged: true
      })
    }

    //{ historial('/Login') }

  }



  return (

    <div className="Sign-Login">
      <div className="form-container">
        
        <h1 className="title">Crear Cuenta</h1>

        <form onSubmit={createaccount} className="formSign">

          <label htmlFor='name' className="labelSign">Name</label>
          <input
            ref={name}
            type="text"
            id="name"
            placeholder='nombre y apellido'
            className="input input-name"
          />
          <label htmlFor='email' className="labelSign">Email address</label>
          <input
            ref={email}
            type="email"
            id="email"
            placeholder="hola@hola.com"
            className="input input-email"
          />
          <label className="labelSign">Password</label>
          <input
            ref={password}
            type="password"
            id="password"
            placeholder="********"
            className="input input-password"
          />

          <label className="labelSign">Tipo Usuario</label>

          <select ref={role} className="input-select">
            <option value=''>Seleccione un rol</option>
            <option value='employer'>Employer</option>
            <option value='applicant'>applicant</option>
          </select>

          <input
            type="submit"
            value="Crear cuenta"
            className="primary-button Sign-button" />
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


export default CreateAccount