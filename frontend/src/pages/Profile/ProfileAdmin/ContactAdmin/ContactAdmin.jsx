import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { toast } from "react-toastify";
import { IoTrashOutline } from "react-icons/io5";
import { MessagesContainer, MessageCard, MessageHeader, MessageUserInfo, MessageDate, MessageBody,
  MessageActions,DeleteButton,Title, EmptyMessage,} from "./ContactAdminStyles";

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

export const ContactAdmin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const snapshot = await getDocs(collection(db, "contact"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // los mas recientes primero
        const sorted = data.sort((a, b) => {
          const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt || 0);
          const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt || 0);
          return dateB - dateA;
        });

        setMessages(sorted);
      } catch (error) {
        console.error("Error al traer los mensajes:", error);
        toast.error("Error al cargar los mensajes");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (messageId, senderName) => {
    const confirmDelete = window.confirm(
      `¿Estás seguro que querés eliminar el mensaje de "${senderName}"?`
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "contact", messageId));
      setMessages((prev) => prev.filter((m) => m.id !== messageId));
      toast.success("Mensaje eliminado");
    } catch (error) {
      console.error("Error al eliminar el mensaje:", error);
      toast.error("Error al eliminar el mensaje");
    }
  };

  if (loading) return <p style={{ color: "white" }}>Cargando mensajes...</p>;

  return (
    <div>
      {/* <Title style={{ textAlign: "left" }}>Mensajes de Contacto</Title> */}
      <h2 style={{ textAlign: "left", marginBottom: "20px" }}>Mensajes de Contacto</h2>


      {messages.length === 0 ? (
        <EmptyMessage>No hay mensajes registrados.</EmptyMessage>
      ) : (
        <MessagesContainer>
          {messages.map((msg) => (
            <MessageCard key={msg.id}>
              <MessageHeader>
                <MessageUserInfo>
                  <p>{msg.name} {msg.lastname}</p>
                  <p>{msg.email}</p>
                  <p>{msg.cellphone}</p>
                </MessageUserInfo>
                <MessageDate>{formatDate(msg.createdAt)}</MessageDate>
              </MessageHeader>

              <MessageBody>{msg.message}</MessageBody>

              <MessageActions>
                <DeleteButton onClick={() => handleDelete(msg.id, msg.name)}>
                  <IoTrashOutline /> Eliminar
                </DeleteButton>
              </MessageActions>
            </MessageCard>
          ))}
        </MessagesContainer>
      )}
    </div>
  );
};