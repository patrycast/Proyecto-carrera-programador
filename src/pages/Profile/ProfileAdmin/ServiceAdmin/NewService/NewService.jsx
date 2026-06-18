import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../../firebase/config";
import { useDispatch } from "react-redux";
import { fetchServices } from "../../../../../redux/slices/servicesSlice";
import { toast } from "react-toastify";
import { OverlayNewService, ModalNewService, ModalTitle, FieldNewService, LabelNewService, FieldInput, FieldTextarea, FieldHint, 
        ButtonGroup, SaveButton, CancelButton } from "./NewServiceStyles";

export const NewService = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    title: "",
    desc: "",
    price: "",
    img: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "Services"), {
        title: formValues.title,
        desc: formValues.desc,
        price: Number(formValues.price),
        img: formValues.img,
      });

      dispatch(fetchServices());
      toast.success("Servicio creado correctamente");
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Error al crear el servicio");
    }
  };

  return (
    <OverlayNewService>
      <ModalNewService>
        <ModalTitle>Nuevo servicio</ModalTitle>

        <FieldNewService>
          <LabelNewService>Título</LabelNewService>
          <FieldInput name="title" value={formValues.title} onChange={handleChange} placeholder="Nombre del servicio" />
        </FieldNewService>

        <FieldNewService>
          <LabelNewService>Descripción</LabelNewService>
          <FieldTextarea name="desc" value={formValues.desc} onChange={handleChange} placeholder="Descripción del servicio" rows={3} />
        </FieldNewService>

        <FieldNewService>
          <LabelNewService>Precio</LabelNewService>
          <FieldInput name="price" type="number" value={formValues.price} onChange={handleChange} placeholder="35000" />
        </FieldNewService>

        <FieldNewService>
          <LabelNewService>Nombre de imagen</LabelNewService>
          <FieldInput name="img" value={formValues.img} onChange={handleChange} placeholder="gymFuncional" />
          <FieldHint>Debe coincidir con el nombre en la carpeta de imágenes</FieldHint>
        </FieldNewService>

        <ButtonGroup>
          <SaveButton onClick={handleSubmit}>Guardar</SaveButton>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </ButtonGroup>
      </ModalNewService>
    </OverlayNewService>
  );
};