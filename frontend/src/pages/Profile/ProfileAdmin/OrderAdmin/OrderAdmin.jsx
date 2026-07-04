
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { toast } from "react-toastify";
import { images } from "../../../../data/images";
import { MdEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import {
  OrdersContainer, OrderCard, OrderHeader, OrderUserInfo, OrderTotal,
  OrderItems, OrderItem, OrderItemImg, OrderItemInfo, OrderActions,
  EditButton, DeleteButton, Title, EmptyMessage
} from "./OrderAdminStyles";
// import { EditOrderModal } from "./EditOrderModal/EditOrderModal";


const formatDate = (createdAt) => {
  if (!createdAt) return "Sin fecha";
  const date = createdAt.toDate ? createdAt.toDate() : new Date(createdAt);
  return date.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const OrderAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
            const snapshot = await getDocs(collection(db, "orders"));
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            // Agrupo pedidos por cliente (email) 
            const sortedData = data.sort((a, b) => {
                const emailA = a.userEmail || a.email || "";
                const emailB = b.userEmail || b.email || "";

                if (emailA !== emailB) {
                return emailA.localeCompare(emailB);
                }

                // ordenar por fecha 
                const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt || 0);
                const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt || 0);
                return dateB - dateA;
            });

            setOrders(sortedData);
            } catch (error) {
            console.error("Error al traer pedidos:", error);
            toast.error("Error al cargar los pedidos");
            } finally {
            setLoading(false);
            }
        };

        fetchOrders();
        }, []);

  const handleDelete = async (orderId) => {
    try {
      await deleteDoc(doc(db, "orders", orderId));
      setOrders((prev) => prev.filter((o) => o.id !== orderId));
      toast.success("Pedido eliminado");
    } catch (error) {
        console.error("Error al eliminar el pedido:", error);
      toast.error("Error al eliminar el pedido");
    }
  };

  if (loading) return <p style={{ color: "white" }}>Cargando pedidos...</p>;

  return (
    <div>
      <Title style={{ textAlign: "left" }}>Pedidos</Title>

      {orders.length === 0 ? (
        <EmptyMessage>No hay pedidos registrados.</EmptyMessage>
      ) : (
        <OrdersContainer>
          {orders.map((order) => (
            <OrderCard key={order.id}>
              <OrderHeader>
                <OrderUserInfo>
                  <p>{order.details?.name}</p>
                  <p>{order.details?.email}</p>
                </OrderUserInfo>
                <OrderTotal>${order.totalPrice?.toLocaleString("es-AR")}</OrderTotal>
              </OrderHeader>

              <OrderItems>
                {order.items?.map((item) => (
                  <OrderItem key={item.id}>
                    <OrderItemImg src={images[item.img]} alt={item.title} />
                    <OrderItemInfo>
                        
                      <p>{item.title}</p>
                      <p>x{item.quantity} — ${item.price?.toLocaleString("es-AR")}</p>
                      
                    </OrderItemInfo>

                    <span style={{ fontSize: "0.7rem", color: "gray" }}>
                        {formatDate(order.createdAt)}
                    </span>
                  </OrderItem>
                ))}
              </OrderItems>

              <OrderActions>
                <EditButton onClick={() => setSelectedOrder(order)}>
                  <MdEdit /> Editar
                </EditButton>
                <DeleteButton onClick={() => handleDelete(order.id)}>
                  <IoTrashOutline /> Eliminar
                </DeleteButton>
              </OrderActions>
            </OrderCard>
          ))}
        </OrdersContainer>
      )}

      {selectedOrder && (
        <EditOrderModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onUpdate={(updatedOrder) => {
            setOrders((prev) =>
              prev.map((o) => (o.id === updatedOrder.id ? updatedOrder : o))
            );
            setSelectedOrder(null);
          }}
        />
      )}
    </div>
  );
};