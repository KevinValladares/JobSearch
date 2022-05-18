import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from "./Components/Inicio";
import Menu from "./Components/Menu";
import Login from "./Components/Login"
import CreateAccount from "./Components/CreateAccount";
import { ValidarToken } from './Global/ValidarToken'
import { useContext, useEffect } from 'react';
import { authContext } from './Context/authContext'

function App() {

  const context = useContext(authContext)



  useEffect(() => {


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





  return (

    <div>
      <Router>
        <Menu />


        <Routes>
          <Route>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/CreateAccount" element={<CreateAccount />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
