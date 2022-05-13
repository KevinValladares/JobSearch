import React, { useState } from "react";
import {
    NavbarContainer, LeftContainer, RightContainer, NavbarExtendedContainer,
    NavbarInnerContainer, NavbarLinkContainer, NavbarLink, Logo,
    OpenLinksButton, NavbarLinkExtended,
} from "../Style/MenuStyle";
import LogoImg from "../assets/logo.svg";
import BurgerButton from "./BurgerButton";

const Menu = () => {


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
                        <NavbarLink to='/Login'>Login</NavbarLink>



                        <OpenLinksButton>
                            <BurgerButton Clicked={extendNavbar} handleClick={() => { setExtendNavbar(!extendNavbar); }} />
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>

            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended onClick={handleClickLink} to='/'>Inicio</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={handleClickLink} to='/Login'>Login</NavbarLinkExtended>

                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}
export default Menu