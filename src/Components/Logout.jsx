import React, { useContext } from 'react'
import { authContext } from '../Context/authContext'
import '../Style/logout.css'
import { useNavigate } from 'react-router-dom'


const Logout=()=> {

    const context = useContext(authContext)
    const historial = useNavigate()


    const handleLogOut=()=>{

        localStorage.removeItem("token")
        context.setAuth({
            logged:false,
            id:"",
            name:"",
            email:"",
            role:""
        })


        { historial('/') }
    }
    return (
        <button onClick={handleLogOut} className='btnLogout' >
            Cerrar
        </button>
    )
}


export default Logout;