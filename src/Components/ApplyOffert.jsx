import React, { useEffect, useState, useContext } from 'react'
import { putWithToken } from '../API/Conexion'
import { authContext } from '../Context/authContext'
import '../Style/OfferInfo.css'
import '../Style/ApplyOffert.css'

const ApplyOffert = ({ offert }) => {

    const context = useContext(authContext)
   
    const [idaplicante, setIdAplicante] = useState([])
    const [errorAplicar, setErrorAplicar] = useState('')
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2

    })

    const AplicarOferta = async (Id) => {

        try {

            console.log(Id);
            const resultado = await putWithToken(`/api/jobs/apply/${Id}`)
           
            if (resultado.data.error == true) {
                alert('ya aplico a esta oferta')
            }
        } catch (error) {
            error.data.error && setErrorAplicar('Ya aplico a esta oferta')
        }

    }

    const DesAplicarOferta = async (Id) => {

        try {

            console.log(Id);
            const resultado = await putWithToken(`/api/jobs/unapply/${Id}`)
          
            if (resultado.data.error == true) {
                alert('ya desaplico a esta oferta')
            }
        } catch (error) {
            error.data.error && setErrorAplicar('Ya desaplico a esta oferta')
        }

    }


    useEffect(() => {

        
        setIdAplicante(offert.applicants.map((aplicante) => aplicante.id))

    }, []);

   /*  console.log(offert);
    console.log(idaplicante); */


    return (

        <div className="OffertItem">
            <div className="Offert-info">
                <div className="titleOffert">
                    <span>{offert.title}</span>
                </div>

                <div className="divInformacion">
                    <div className='ContainerInfoOffert'>
                        <p>
                            <span>Categoria</span>
                        </p>
                        <div className="listadoCategoria">
                            {offert.category.map(
                                (item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                        </div>

                        <div className="containerLocation">
                            <p>
                                <span>País</span>
                                <span>{offert.location.country}</span>
                            </p>
                            <p>
                                <span>Provincia</span>
                                <span>{offert.location.province}</span>
                            </p>
                            <p>
                                <span>Ciudad</span>
                                <span>{offert.location.city}</span>
                            </p>

                        </div>

                        <p>
                            <span>Salario</span>
                            <span>{formatter.format(offert.salary)}</span>
                        </p>

                        <div className="offerDescripcion">
                            <span>Descripción</span>
                            <p>{offert.description}</p>
                        </div>

                    </div>

                    
                      

                    <div className="ContbotonApply">
                    {                
                        idaplicante.includes(context.auth.id)===false?
                        <button onClick={() => AplicarOferta(offert._id)} className='btnApply'>Aplicar Oferta</button>
                        :
                        <button onClick={() => DesAplicarOferta(offert._id)} className='btnApply'>Desaplicar</button>
                    }
                    
                    </div>                    
                </div>
            </div>
        </div >
    )


}

export default ApplyOffert