import { BsCart3 } from "react-icons/bs";
import { CartIconContainer, CartBadge, CartIcon } from "./IconCartStyled";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCart } from "../../../redux/slices/cartSlice";


export const IconCart = () => {
  
  const totalCartItems= useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc+= item.quantity) ,0);

  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(toggleHiddenCart())
  }


  return (
    <CartIconContainer onClick={handleToggleCart}>
      <CartIcon>
        <BsCart3 size={27}/>
      </CartIcon>
      <CartBadge>{totalCartItems}</CartBadge>
    </CartIconContainer>
  );
};
