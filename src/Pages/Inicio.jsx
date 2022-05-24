import React from 'react'
import '../Style/Inicio.css'
import ImgInicio from "../assets/ImagenInicio.svg";
import ImgFlecha from "../assets/Icons/flechita.svg";
import { useNavigate } from "react-router-dom";

const Inicio = () => {

  const historial = useNavigate()


const EnviarLogin=(e)=>{
  e.preventDefault()
  { historial('/Login') }
}

const EnviarCrearCuenta=(e)=>{
  e.preventDefault()
  { historial('/CreateAccount') }
}


  return (
    <div class="ContainerInicio">
      <section class="SeccionPrincipal">

        <div class="InformacionInicio">
          <h1>Millones de empleos y técnicos que buscan personal</h1>

          <div class="divDireccionar">
            <ul class="w-full">
              <li onClick={EnviarLogin}>
                <a class="LinkDireccion" href="/">
                  Buscar Empleo
                  <img src={ImgFlecha} alt="flecha" />
                </a>
              </li>
              <li onClick={EnviarCrearCuenta}>
                <a
                  class="LinkDireccion"
                  href="/">
                  Crear Cuenta
                  <img src={ImgFlecha} alt="flecha"/>
                </a>
              </li>

            </ul>
          </div>

        </div>
        <div class="divImagen">
          <img class="ImagenInicio" src={ImgInicio} alt="Imagen" />
        </div>

      </section>
    </div>
  )
}

export default Inicio