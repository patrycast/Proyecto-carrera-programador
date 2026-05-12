import { ModalContainer, Overlay, ModalContent, DivTotales, PEmptyCart, 
  ClosedButton,DivCloseButton, ButtonsContainer, DivTrashButton } from "./ModalCartStyled";
import { MdOutlineClose } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { ModalCartCard } from "./ModalCartCard";
import { useSelector, useDispatch } from "react-redux";
import { toggleHiddenCart, clearCart } from "../../../redux/slices/cartSlice";
import { Button } from "../../../pages/CompleteOrder/CompleteOrderStyles";
import { useNavigate } from "react-router-dom";



export const ModalCart = () => {
  const hiddenCart= useSelector((state) => state.cart.hidden)
  const cartItems= useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch();
  
  const handleToggleCart= () => {
    dispatch(toggleHiddenCart())
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const totalPrice= cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const navigate = useNavigate();

  if (hiddenCart) return null;

  return (
      <ModalContainer>
        <Overlay onClick= {handleToggleCart}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>Tus Servicios</h2>

          <ButtonsContainer>
            <DivCloseButton onClick={(e) => {
              e.stopPropagation();
              handleToggleCart();
            }}>
              <ClosedButton />
            </DivCloseButton>

            <DivTrashButton onClick={ (e) => {
              e.stopPropagation();
              handleClearCart();
            }}>
              <IoMdTrash size="24px" />
            </DivTrashButton>
          </ButtonsContainer>

          <div>
            {cartItems.length ? 
            (cartItems.map((item) => 
            <ModalCartCard key={item.id} {...item}/>)) 
                : 
            (<PEmptyCart>El carrito está vacío</PEmptyCart>)}
          </div>
       
  
        {cartItems.length > 0 &&(
        <DivTotales>

          <div>
            <p style={{ fontWeight: 'bold' }}>Total:</p>
            <div>
              <span>${totalPrice.toLocaleString('es-AR')}</span>
            </div>
          </div>

          <Button onClick={() => {navigate("/completeOrder"); handleToggleCart();}}>
              Iniciar pedido
          </Button>

           </DivTotales>
          )}
          </ModalContent>
        </Overlay>
      </ModalContainer>

  );
};


