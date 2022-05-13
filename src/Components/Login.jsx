import React from 'react'
import '../Style/Login.css'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const historial = useNavigate()
  const SentToCreateAccount = () => {
    { historial('/CreateAccount') }
  }


  return (


    <div className='login'>
      <div className='form-container'>

        {/*<img src="./assets/Platzi_Logos/logo_yard_sale.svg" alt="logo" className='logo' />  */}

        <form action='#' className='form'>

          <label className="label">Email address</label>
          <input type="email"
            id="email"
            placeholder="********"
            className="input input-email" />

          <label className="label">Password</label>
          <input type="password"
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