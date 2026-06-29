
import { IoTrash } from "react-icons/io5";
import { TbExposureMinus1 } from "react-icons/tb";
import { MdExposurePlus1 } from "react-icons/md";
import { ModalCartContainer, QtyButton, DescSpan, QtySpan } from "./ModalCartStyled";
import { addToCart, removeFromCart } from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";


export const ModalCartCard = ({ id, img, title, desc, price, quantity}) => {   
  const dispatch = useDispatch();

  const handlePlusQuantity= () => {
    dispatch(addToCart({id, img, title, desc, price}))
  }

  const handleRemoveFromCart= () => {
    dispatch(removeFromCart(id))
  }

  return (
      <ModalCartContainer>
        <div>
          {/* <div>
            <img src={img} alt={title} />
          </div> */}
          <h3>{title}</h3>
          <DescSpan>{desc}</DescSpan>
          <div>${price.toLocaleString('es-AR')}</div>
        </div>

          <div >
            <QtyButton onClick= {handleRemoveFromCart}>
             {quantity === 1 ? (<IoTrash/>) 
            :(<TbExposureMinus1 />)} 
            </QtyButton>

              <QtySpan>{quantity}</QtySpan>

            <QtyButton onClick={handlePlusQuantity} ><MdExposurePlus1 /></QtyButton>
          </div>

      </ModalCartContainer>    
  );
};