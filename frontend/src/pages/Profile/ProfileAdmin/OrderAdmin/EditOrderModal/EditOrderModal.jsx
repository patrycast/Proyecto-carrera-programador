import { useState } from "react";
import { Overlay, ModalContent, ModalHeader, CloseButton, ClientInfo, ItemsList, ItemRow, ItemInfo, QuantityInput, 
    ItemSubtotal, RemoveButton, TotalRow, ModalActions, CancelButton, SaveButton } from "./EditOrderModalStyles";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../../../../firebase/config";
import { MdClose } from "react-icons/md";

export const EditOrderModal = ({ order, onClose, onUpdate }) => {
  const [items, setItems] = useState(order.items || []);
  const [saving, setSaving] = useState(false);

  const handleQuantityChange = (itemId, newQuantity) => {
    const quantity = Math.max(1, Number(newQuantity) || 1);
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

//   const handleRemoveItem = (itemId) => {
//     setItems((prev) => prev.filter((item) => item.id !== itemId));
//   };

    const handleRemoveItem = (itemId, itemTitle) => {  alert(`Intentando eliminar: ${itemTitle}`);

        const confirmDelete = window.confirm(
            `¿Estás seguro que querés eliminar "${itemTitle}" de este pedido?`
        );

        if (!confirmDelete) return;

        setItems((prev) => prev.filter((item) => item.id !== itemId));
    };

  const calculateTotal = (itemsList) =>
    itemsList.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSave = async () => {
    if (items.length === 0) {
      toast.error("El pedido debe tener al menos un servicio");
      return;
    }

    setSaving(true);
    try {
      const newTotal = calculateTotal(items);
      const orderRef = doc(db, "orders", order.id);

      const updatedFields = {
        items,
        totalPrice: newTotal,
      };

      await updateDoc(orderRef, updatedFields);

      onUpdate({
        ...order,
        ...updatedFields,
      });

      toast.success("Pedido actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar el pedido:", error);
      toast.error("Error al actualizar el pedido");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>Editar Pedido</h2>
          <CloseButton onClick={onClose}>
            <MdClose />
          </CloseButton>
        </ModalHeader>

        <ClientInfo>
          <p>{order.details?.name}</p>
          <p>{order.details?.email}</p>
        </ClientInfo>

        <ItemsList>
          {items.map((item) => (
            <ItemRow key={item.id}>
              <ItemInfo>
                <p>{item.title}</p>
                <span>${item.price?.toLocaleString("es-AR")} c/u</span>
              </ItemInfo>

              <QuantityInput
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, e.target.value)
                }
              />

              <ItemSubtotal>
                ${(item.price * item.quantity).toLocaleString("es-AR")}
              </ItemSubtotal>

              <RemoveButton type="button" onClick={() => handleRemoveItem(item.id, item.title)}>
                <MdClose />
              </RemoveButton>
            </ItemRow>
          ))}
        </ItemsList>

        <TotalRow>
          <span>Total:</span>
          <strong>${calculateTotal(items).toLocaleString("es-AR")}</strong>
        </TotalRow>

        <ModalActions>
          <CancelButton onClick={onClose} disabled={saving}>
            Cancelar
          </CancelButton>
          <SaveButton onClick={handleSave} disabled={saving}>
            {saving ? "Guardando..." : "Guardar cambios"}
          </SaveButton>
        </ModalActions>
      </ModalContent>
    </Overlay>
  );
};

