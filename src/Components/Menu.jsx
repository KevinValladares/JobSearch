import React, { useState, useContext } from "react";
import {
    NavbarContainer, LeftContainer, RightContainer, NavbarExtendedContainer,
    NavbarInnerContainer, NavbarLinkContainer, NavbarLink, Logo,
    OpenLinksButton, NavbarLinkExtended, NombreUsuario, NombreUsuarioExtender
} from "./MenuStyle";
import LogoImg from "../assets/logo.svg";
import BurgerButton from "./BurgerButton";
import { authContext } from '../Context/authContext'
import Logout from "./Logout";



const Menu = () => {

    const context = useContext(authContext)
    const [extendNavbar, setExtendNavbar] = useState(false);

    const handleClickLink = () => {

        if (extendNavbar == true)
            setExtendNavbar(false)
    }

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>

                <LeftContainer>
                    <Logo src={LogoImg}></Logo>
                </LeftContainer>

                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to='/'>Inicio</NavbarLink>
                        {!context.auth.logged && <NavbarLink to='/Login'>Login</NavbarLink>}
                        {context.auth.role === 'employer' ?
                            <NavbarLink to='/CreateOffers'>Crear Oferta</NavbarLink> : null}
                        {context.auth.role === 'employer' ?
                            <NavbarLink to='/VerOfertas'>Mis Ofertas</NavbarLink> : null}
                        {context.auth.role === 'applicant' ?
                            <NavbarLink to='/PostularOfertas'>Ofertas Trabajo</NavbarLink> : null}
                        {context.auth.role === 'applicant' ?
                            <NavbarLink to='/MyAplicaciones'>Mis Aplicaciones</NavbarLink> : null}


                        <OpenLinksButton>
                            <BurgerButton Clicked={extendNavbar} handleClick={() => { setExtendNavbar(!extendNavbar); }} />
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
                {
                    context.auth.logged &&
                    (
                        <NombreUsuario>
                            <span>{context.auth.name}</span>
                            <Logout />
                        </NombreUsuario>
                    )
                }

            </NavbarInnerContainer>

            {extendNavbar && (
                <NavbarExtendedContainer>

                    <NavbarLinkExtended onClick={handleClickLink} to='/'>Inicio</NavbarLinkExtended>
                    {!context.auth.logged && <NavbarLinkExtended onClick={handleClickLink} to='/Login'>Login</NavbarLinkExtended>}
                    {context.auth.role === 'employer' ?
                        <NavbarLinkExtended onClick={handleClickLink} to='/Login'>Crear Oferta</NavbarLinkExtended> : null}
                    {context.auth.role === 'employer' ?
                        <NavbarLinkExtended onClick={handleClickLink} to='/VerOfertas'>Mis Ofertas</NavbarLinkExtended> : null}
                    {context.auth.role === 'applicant' ?
                        <NavbarLinkExtended onClick={handleClickLink} to='/PostularOfertas'>Ofertas Trabajo</NavbarLinkExtended> : null}
                    {context.auth.role === 'applicant' ?
                        <NavbarLinkExtended onClick={handleClickLink} to='/MyAplicaciones'>Mis Aplicaciones</NavbarLinkExtended> : null}

                    {
                        context.auth.logged &&
                        (
                            <NombreUsuarioExtender>
                                <span>{context.auth.name}</span>
                                <Logout />
                            </NombreUsuarioExtender>
                        )
                    }
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}
export default Menu