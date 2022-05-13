import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from "./Components/Inicio";
import Menu from "./Components/Menu";
import Login from "./Components/Login"
import CreateAccount from "./Components/CreateAccount";

function App() {
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
