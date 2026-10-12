import { ImHome } from "react-icons/im"; 
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdContactPhone } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { FaUserMinus } from "react-icons/fa6";
import { HeaderContainer, ImgLogo, UlList, DivIcons, RouterLink, Menu, UserInfo, LoginIcon, LogOutIcon,
    UserContainer, DropDownMenu, HeaderActions } from "./NavbarStyles"
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
    const [menuOpen, setMenuOpen] = useState(false);

    // cierro el menu movil y el desplegable al navegar
    const closeMenus = () => {
        setMenuOpen(false);
        setOpenMenu(false);
    };


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
        <ModalCart />


        <RouterLink as={Link} to="/">
            <ImgLogo src="/logo.jpg" alt="logo" />
        </RouterLink>

        <nav>
            <UlList $open={menuOpen}>
                 <RouterLink as={Link} to="/" onClick={closeMenus}> <ImHome /> Home</RouterLink>
                 <RouterLink as={Link} to="/aboutMe" onClick={closeMenus}> <MdOutlineSportsGymnastics /> Sobre Mí </RouterLink>
                 <RouterLink as={Link} to="/servicios" onClick={closeMenus}>  <LiaClipboardListSolid /> Servicios </RouterLink>
                 <RouterLink as={Link} to="/contact" onClick={closeMenus}> <MdContactPhone /> Contacto </RouterLink>
                 

                     <DivIcons>

                    {user ? (
                        <UserContainer>
                            <UserInfo onClick={() => setOpenMenu(!openMenu)}>
                            <LoginIcon />
                            {/* <span> */}
                                {user && user.displayName ? (
                                    <span>Hola {user.displayName}</span>
                                    ) : (
                                    <p>Hola Admin</p>
                                    )}
                            {/* </span> */}
                            </UserInfo>

                            {openMenu && (
                            <DropDownMenu>
                                <Link to="/profile" onClick={closeMenus}>Mi Perfil</Link>
                                <Link to="/orders" onClick={closeMenus}>Mis Pedidos</Link>

                                <button onClick={handleLogout}>
                                Cerrar sesión
                                </button>
                            </DropDownMenu>
                            )}
                        </UserContainer>
                        ) : (
                        <RouterLink as={Link} to="/login" onClick={closeMenus}>
                            <LoginIcon /> Ingresar
                        </RouterLink>
                        )}
                 </DivIcons>


            </UlList>   
        </nav>
        
        <HeaderActions>
            <IconCart />
            <Menu onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
                <FiMenu />
            </Menu>
        </HeaderActions>
    </HeaderContainer>
  )
}
