import { ImHome } from "react-icons/im"; 
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdContactPhone } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { FaUserMinus } from "react-icons/fa6";
import { HeaderContainer, ImgLogo, UlList, DivIcons, RouterLink, Menu, UserInfo, LoginIcon, LogOutIcon,
    UserContainer, DropDownMenu
} from "./NavbarStyles"
import  logo from "../../assets/img/logo.png"
import { IconCart } from "./IconCart/IconCart";
import { ModalCart } from "./ModalCart/ModalCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart} from "../../redux/slices/cartSlice";
import { useState } from "react";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/slices/user/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);


    // firebase logout
    const handleLogout = async () => {

        await signOut(auth);
        dispatch(clearUser());
        dispatch(clearCart());
        toast.success("Sesión cerrada");
        navigate("/login");
    };


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
                 {/* <DivIcons>LoginIcon

                    {user ? 
                        (<UserInfo onClick={handleLogout}> <LogOutIcon /> 
                                <span>Hola {user.displayName}</span>
                        </UserInfo>) 
                            : 
                        (<RouterLink as={Link} to="/login"><LoginIcon /> </RouterLink>
                    )}
                
                    <div>
                        <IconCart />
                    </div>
                 </DivIcons> */}



                     <DivIcons>

                    {user ? (
                        <UserContainer>
                            <UserInfo onClick={() => setOpenMenu(!openMenu)}>
                            <LoginIcon />
                            <span>Hola {user.displayName}</span>
                            </UserInfo>

                            {openMenu && (
                            <DropDownMenu>
                                <Link to="/profile">Mi Perfil</Link>
                                <Link to="/orders">Mis Pedidos</Link>

                                <button onClick={handleLogout}>
                                Cerrar sesión
                                </button>
                            </DropDownMenu>
                            )}
                        </UserContainer>
                        ) : (
                        <RouterLink as={Link} to="/login">
                            <LoginIcon />
                        </RouterLink>
                        )}
                
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
