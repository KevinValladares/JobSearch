import React,{useContext} from 'react'
import '../Style/OfferInfo.css'
import { authContext } from '../Context/authContext'


const OfferInfo = ({ offert }) => {

    const context = useContext(authContext)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2

    })

    return (

        <div className="ProductItem">
            <div className="product-info">
                <div className="titleOffert">
                    <span>{offert.title}</span>
                </div>

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


                    {
                        context.auth.role === 'employer' &&
                        <div className="ContainerAplicantes">
                            <span>Aplicantes</span>
                            <div>
                                {offert.applicants.map(
                                    (item, index) => (
                                        <li key={index}>
                                            {item.name + ' - ' + item.email}
                                        </li>
                                    ))}
                            </div>
                        </div>
                    }


                </div>

            </div>
        </div >
    )
}

export default OfferInfo