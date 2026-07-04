import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../../../redux/slices/servicesSlice";
import { images } from "../../../../data/images";
import { Button } from "../../../../components/shared/Button/Button.jsx";
import { useState } from "react";
import { NewService } from "./NewService/NewService";
import { ServiceAdminContainer, ServiceAdminHeader, NewServiceContainer, ServiceItem, ServiceImg, ServiceInfo, 
    ActionButtons, EditButton, DeleteButton } from "./ServiceAdminStyles";
import { MdEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

import { EditService } from "./EditService/EditService.jsx";
import { DeleteService } from "./DeleteService/DeleteService.jsx";


export const ServiceAdmin = () => {
    const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.services);

  const [selectedService, setSelectedService] = useState(null);
  const [serviceToDelete, setServiceToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (loading) return <p style={{ color: "white" }}>Cargando servicios...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <ServiceAdminContainer>
        <ServiceAdminHeader>
            <h2>Servicios</h2>
            <Button label="+ Nuevo servicio" onClick={() => setShowModal(true)} />
        </ServiceAdminHeader>

    <NewServiceContainer>
      {items.map((service) => (
        <ServiceItem key={service.id}>
          <ServiceImg src={images[service.img]} alt={service.title} />
          <ServiceInfo>
            <p>{service.title}</p>
            <p>{service.desc}</p>
            <p>${service.price?.toLocaleString("es-AR")}</p>
          </ServiceInfo>

          <ActionButtons>
            <EditButton onClick={() => {
              setSelectedService(service);
            }}> <MdEdit /> Editar
            </EditButton>

            <DeleteButton onClick={() => {
              setServiceToDelete(service);
            }}><IoTrashOutline /> Eliminar</DeleteButton>
          </ActionButtons>
          
        </ServiceItem>
      ))}
    </NewServiceContainer>

    {showModal && <NewService onClose={() => setShowModal(false)} />}
        
    {selectedService && (
  <EditService service={selectedService} onClose={() => setSelectedService(null)}
  />
)}

{serviceToDelete && (
  <DeleteService service={serviceToDelete} onClose={() => setServiceToDelete(null)}/>
)}

  </ServiceAdminContainer>
  );
};
