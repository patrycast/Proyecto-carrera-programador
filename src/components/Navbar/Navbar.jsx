import { ImHome } from "react-icons/im"; 
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdContactPhone } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { HeaderContainer, ImgLogo, UlList, DivIcons, RouterLink, Menu, LoginLink} from "./NavbarStyles"
import  logo from "../../assets/img/logo.png"
import { IconCart } from "./IconCart/IconCart";
import { ModalCart } from "./ModalCart/ModalCart";


import { Link } from "react-router-dom";
// import { useState } from "react"

export const Navbar = () => {
    // const [hiddenCart, setHiddenCart] = useState(false);


  return (
    <HeaderContainer>
        {/* <ModalCart hiddenCart={hiddenCart} setHiddenCart={setHiddenCart} /> */}
        <ModalCart />


        <RouterLink as={Link} to="/">
            <ImgLogo src={logo} alt="logo" />
        </RouterLink>

        <nav>
            <UlList>
                 <RouterLink as={Link} to="/" active> <ImHome /> Home</RouterLink>
                 <RouterLink as={Link} to="/aboutMe"> <MdOutlineSportsGymnastics /> Sobre Mí </RouterLink>
                 <RouterLink as={Link} to="/servicios">  <LiaClipboardListSolid /> Servicios </RouterLink>
                 <RouterLink as={Link} to="/contact"> <MdContactPhone /> Contacto </RouterLink>
                 <DivIcons>
                    <RouterLink as={Link} to="/login">  <LoginLink /></RouterLink>
                
                    <div>
                        <IconCart />
                    </div>
                 </DivIcons>
            </UlList>
        </nav>
        
        <Menu>
            <FiMenu />
        </Menu>
    </HeaderContainer>
  )
}
