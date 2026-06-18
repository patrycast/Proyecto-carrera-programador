import { fetchServices } from "../../../../../redux/slices/servicesSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { OverlayNewService, ModalNewService, ModalTitle, FieldNewService, LabelNewService, FieldInput, FieldTextarea, FieldHint, 
        ButtonGroup, SaveButton, CancelButton } from "../NewService/NewServiceStyles";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../../firebase/config";

export const DeleteService = ({ service, onClose }) => {
  const dispatch = useDispatch();

//   ------------------firebaase----------------------
  const handleDelete = async () => {

    try {
      await deleteDoc(doc(db, "Services", service.id));
      dispatch(fetchServices());
      toast.success("Servicio eliminado correctamente");
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Error al eliminar el servicio");
    }
  };

  return (
    <OverlayNewService>
      <ModalNewService>
        <ModalTitle>Eliminar servicio</ModalTitle>
        <p style={{ color: "#aaa", margin: 0 }}>
          ¿Estás seguro que querés eliminar <strong style={{ color: "white" }}>{service.title}</strong>? 
        </p>
        <ButtonGroup>
          <SaveButton onClick={handleDelete} style={{ background: "#ef4444" }}>Eliminar</SaveButton>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </ButtonGroup>
      </ModalNewService>
    </OverlayNewService>
  );
};