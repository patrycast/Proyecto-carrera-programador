import { Container, Left, Right, Title } from "./CompleteOrderStyles";
import { CompleteOrderForm } from "./CompleteOrderForm";
// import { CompleteOrderServices } from "./CompleteOrderServices";
import { ServicesCompleteOrder } from "../../components/CompleteOrder/Services/ServicesCompleteOrder"
import { useSelector } from "react-redux"; 

export const CompleteOrder = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const totalPrice= cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container>
      <Left>
        <Title>Ingresá tus datos</Title>

        <CompleteOrderForm cartItems={cartItems} totalPrice={totalPrice} />
      </Left>

      <Right>
        <ServicesCompleteOrder cartItems={cartItems} price={totalPrice} />
      </Right>
    </Container>
  );
};
