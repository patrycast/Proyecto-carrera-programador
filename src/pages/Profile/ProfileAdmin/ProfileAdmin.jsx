import React from "react";
import { FaList, FaUsers, FaShoppingCart, FaEnvelope, FaPlus, FaEdit, FaTrash, FaRunning, FaHeart, FaHome,} from "react-icons/fa";

import { AdminContainer, Sidebar, Menu, MenuItem, Content, Header, NewButton, ServicesList, ServiceCard, ServiceInfo, IconBox, Actions,
  EditButton, DeleteButton } from "./ProfileAdminStyles";

const servicios = [
  {
    id: 1,
    nombre: "Gimnasia funcional suave",
    precio: "$35.000",
    icono: <FaRunning />,
  },
  {
    id: 2,
    nombre: "Rehabilitación física",
    precio: "$40.000",
    icono: <FaHeart />,
  },
  {
    id: 3,
    nombre: "Clases personalizadas a domicilio",
    precio: "$50.000",
    icono: <FaHome />,
  },
];

export const ProfileAdmin = () => {
  const handleEditar = (id) => {
    console.log("Editar:", id);
  };

  const handleEliminar = (id) => {
    console.log("Eliminar:", id);
  };

  return (
    <AdminContainer>
      <Sidebar>
        <h2>Panel admin</h2>

        <Menu>
          <MenuItem active>
            <FaList />
            <span>Servicios</span>
          </MenuItem>

          <MenuItem>
            <FaUsers />
            <span>Usuarios</span>
          </MenuItem>

          <MenuItem>
            <FaShoppingCart />
            <span>Pedidos</span>
          </MenuItem>

          <MenuItem>
            <FaEnvelope />
            <span>Mensajes</span>
          </MenuItem>
        </Menu>
      </Sidebar>

      <Content>
        <Header>
          <h1>Servicios</h1>

          <NewButton>
            <FaPlus />
            Nuevo servicio
          </NewButton>
        </Header>

        <ServicesList>
          {servicios.map((servicio) => (
            <ServiceCard key={servicio.id}>
              <ServiceInfo>
                <IconBox>{servicio.icono}</IconBox>

                <div>
                  <h3>{servicio.nombre}</h3>
                  <p>{servicio.precio}</p>
                </div>
              </ServiceInfo>

              <Actions>
                <EditButton
                  onClick={() => handleEditar(servicio.id)}
                >
                  <FaEdit />
                </EditButton>

                <DeleteButton
                  onClick={() => handleEliminar(servicio.id)}
                >
                  <FaTrash />
                </DeleteButton>
              </Actions>
            </ServiceCard>
          ))}
        </ServicesList>
      </Content>
    </AdminContainer>
  );
};
