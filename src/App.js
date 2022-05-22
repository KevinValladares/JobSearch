import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from "./Pages/Inicio";
import Menu from "./Components/Menu";
import Login from "./Pages/Login"
import CreateAccount from "./Pages/CreateAccount";
import { useContext, useEffect } from 'react';
import { authContext } from './Context/authContext'
import { postWithToken } from "./API/Conexion";
import CreateOffers from './Pages/CreateOffers'
import VerOfertas from './Pages/VerOfertas'
import MyAplicaciones from './Pages/MyAplicaciones'
import PostularOfertas from './Pages/PostularOfertas'


function App() {

  const [error,setError] = useState('')
  const context = useContext(authContext)

  const ValidarSesion = async () => {

try {

  const respuesta = await postWithToken("/api/auth/validate")
    const data = await respuesta.data
    const {user } = await respuesta.data

    if (data.failed) {
      console.log(data)
    }
    else {
      context.setAuth({
        id: user.id,
        name: user.name,
        email:user.email,
        role:user.role,
        logged: true
      })
    }
  
} catch (error) {
  console.log(error.response.data)
  setError(error.response.data.message)
}




  }



  useEffect(() => {

    ValidarSesion();

  }, [])


  return (

    <div className="App">
      <Router>
        <Menu />


        <Routes>
          <Route>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/CreateAccount" element={<CreateAccount />} />
            <Route exact path="/CreateOffers" element={<CreateOffers/>} />
            <Route exact path="/VerOfertas" element={<VerOfertas/>} />
            <Route exact path="/MyAplicaciones" element={<MyAplicaciones/>} />
            <Route exact path="/PostularOfertas" element={<PostularOfertas/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
