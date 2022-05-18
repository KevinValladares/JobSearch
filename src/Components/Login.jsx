import React, { useContext, useRef } from 'react'
import { authContext } from '../Context/authContext'
import { useNavigate } from 'react-router-dom'
import '../Style/Login.css'

const Login = () => {
  const context = useContext(authContext)
  const email = useRef()
  const password = useRef()
  const historial = useNavigate()


  const SentToCreateAccount = () => {

    { historial('/CreateAccount') }
  }

  const StartLogin = (event) => {
    event.preventDefault()

    console.log(email.current.value, password.current.value);

    fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value
      })
    }).then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.token)
        context.setAuth({
          id: data.user.id,
          name: data.user.name,
          logged: true
        })

        { historial('/') }
      })
      .catch(error => console.log(error))

  }



  return (


    <div className='login'>
      <div className='form-container'>

        {/*<img src="./assets/Platzi_Logos/logo_yard_sale.svg" alt="logo" className='logo' />  */}

        <form onSubmit={StartLogin} className='form'>

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

          <input type="submit" value="Log in" className="primary-button login-button" />

          <a href="#">Forgot my password</a>

        </form>


        <button onClick={SentToCreateAccount} className="secundary-button signup-button">Sign up</button>


      </div>
    </div>



  )
}

export default Login