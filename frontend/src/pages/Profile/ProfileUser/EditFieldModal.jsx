import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { auth, db } from "../../../firebase/config";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/user/userSlice";
import { toast } from "react-toastify";
import { ModalOverlay, ModalBox, ModalTitle, ModalInput, ModalButtons, SaveButton, CancelButton } from "./ProfileStyles";

const fieldLabels = {
  displayName: "Nombre",
  cellphone: "Celular",
  location: "Localidad",
  address: "Dirección",
};

export const EditFieldModal = ({ field, value, onClose, onUpdate }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(value);

  const handleSave = async () => {
    try {
      await updateDoc(doc(db, "users", user.uid), {
        [field]: inputValue,
      });

      if (field === "displayName") {
        await updateProfile(auth.currentUser, { displayName: inputValue });
        dispatch(setUser({ ...user, displayName: inputValue }));
      }

      onUpdate(field, inputValue);
      toast.success(`${fieldLabels[field]} actualizado correctamente`);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al actualizar");
    }
  };

  return (
    <ModalOverlay>
      <ModalBox>

        <ModalTitle>Editar {fieldLabels[field]}</ModalTitle>
        <ModalInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={`Nuevo ${fieldLabels[field]}`}
        />

        <ModalButtons>
          <SaveButton onClick={handleSave}>Guardar</SaveButton>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </ModalButtons>
        
      </ModalBox>
    </ModalOverlay>
  );
};