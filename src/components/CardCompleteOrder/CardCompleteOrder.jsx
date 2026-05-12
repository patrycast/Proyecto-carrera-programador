import {CompleteOrderContainer, CardInfoStyled, TitleStyled, DescStyled, ButtonStyled, QtyStyled, 
    ButtonsStyled, PriceStyled, CompleteOrderWrapper} from "./CardCompleteOrderStyles";
import { IoMdTrash } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { removeFromCart } from "../../redux/slices/cartSlice";

export const CardCompleteOrder = ({item}) => {
    const { id, img, title, desc, price, quantity } = item;
    const dispatch= useDispatch();

    const handlePlus= () => {
        dispatch(addToCart(item));
    }

    const handleMinus= () => {
        dispatch(removeFromCart(id));
    }

  return (
     <CompleteOrderContainer>
      <img src={img}  />
{/* alt={title} */}
        <CompleteOrderWrapper>
            <TitleStyled>{title}</TitleStyled>
            <DescStyled>{desc}</DescStyled>
            <PriceStyled>{price}</PriceStyled>
        </CompleteOrderWrapper>

      <ButtonsStyled>
        <ButtonStyled onClick={handleMinus}>
         {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
        </ButtonStyled>

        <QtyStyled>{quantity}</QtyStyled>

        <ButtonStyled onClick={handlePlus}>
          <BsPlusLg />
        </ButtonStyled>
      </ButtonsStyled>
    </CompleteOrderContainer>
  )
}

