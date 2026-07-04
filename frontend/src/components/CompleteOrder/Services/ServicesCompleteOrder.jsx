
import { Title, OrderCard, OrderInfo, Totals, Row, Total } from "./ServicesCompleteOrderStyles";
import { CardCompleteOrder } from "../../CardCompleteOrder/CardCompleteOrder";



export const ServicesCompleteOrder = ({cartItems, price}) => { 
  
  return (
    <>
    <Title>Tu pedido</Title>

        {/* <OrderCard>  */}
     

          <OrderInfo>
        
            {/* <CardCompleteOrder/> */}
            {cartItems.length ? (
                cartItems.map((item) =><CardCompleteOrder key={item.id} item={item}/>)
            ) : (<p>No hay elementos en el carrito</p>) }
            
          </OrderInfo>

          {/* <div>+ - 3</div> */}
        {/* </OrderCard> */}

        <Totals>
          
          <Total>
            <p>Total:</p>
            <Row>{price}</Row>
          </Total>
        </Totals>
      </>  
  )
}
