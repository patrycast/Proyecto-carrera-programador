import { collection, getDocs, where, query  } from "firebase/firestore";
import { db } from "../../firebase/config";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CardOrders, OrdersContainer, CardsWrapper, InfoCard } from "./OrdersStyles";
import { images } from "../../data/images";

export const Orders =  () => {
    const { user } = useSelector((state) => state.user);

    const [userOrders, setUserOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  


    useEffect(() => {
    const getUserOrders= async () => {
        try{
          
        setIsLoading(true);

        const q = query(
            collection(db, "orders"),
            where("userId", "==", user.uid)
        )

        const queryOrder= await getDocs(q);

        const orders= queryOrder.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))

         setUserOrders(orders);

        console.log("Orders",orders);
        }
        catch (error) {
            console.error("Error:", error);
        }
        finally {
            setIsLoading(false);
    }
    };

        if (user) {
            getUserOrders();
        }

    }, [user]);

    if (!user) return <h2 style={{color: "white", marginTop:"120px", textAlign: "center"}}>Cargando Usuario...</h2>;
    if (isLoading) return <h2 style={{color: "white" , marginTop:"120px", textAlign: "center"}}>Cargando pedidos...</h2>;

return (

<OrdersContainer>
    <h2>Mis pedidos</h2>

    <CardsWrapper>
      {userOrders.length === 0 ? (
        <h3 style={{ color: "white", textAlign: "center", marginTop: "40px" }}>
          No tenés pedidos realizados.
        </h3>
      ) : (
        userOrders.map((order) =>
          order.items?.map((item) => (
            <CardOrders key={item.id}>
              <img src={images[item.img]} alt={item.title} />

              <InfoCard>
                <h4>Servicios:</h4>
                <p>{item.title}</p>
                <p>Fecha:{" "}{order.createdAt?.toDate().toLocaleString("es-AR")}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
              </InfoCard>
            </CardOrders>
          ))
        )
      )}
    </CardsWrapper>
  </OrdersContainer>
)
}
    
