import React from "react";
import { FaList, FaUsers, FaShoppingCart, FaEnvelope, FaTrash } from "react-icons/fa";

import { AdminContainer, SidebarAdmin, MenuBtns, MenuItemBtn, ContentSection, Header, NewButton, ServicesList, ServiceCard, ServiceInfo, IconBox, Actions,
  EditButton, DeleteButton } from "./ProfileAdminStyles";

  import { useState } from "react";

  import { ServiceAdmin } from "./ServiceAdmin/ServiceAdmin";
  import { UserAdmin } from "./UserAdmin/UserAdmin";
  import { OrderAdmin } from "./OrderAdmin/OrderAdmin";
  import { ContactAdmin } from "./ContactAdmin/ContactAdmin";


export const ProfileAdmin = () => {
  const [activeSection, setActiveSection] = useState("servicios");

  return (
    <AdminContainer>
      <SidebarAdmin>
        <h2>Panel admin</h2>

        <MenuBtns>
          <MenuItemBtn active ={activeSection === "servicios"} onClick={() => setActiveSection("servicios")}>
            <FaList />
            <span>Servicios</span>
          </MenuItemBtn>

          <MenuItemBtn active ={activeSection === "usuarios"} onClick={() => setActiveSection("usuarios")}>
            <FaUsers />
            <span>Usuarios</span>
          </MenuItemBtn>

          <MenuItemBtn active ={activeSection === "pedidos"} onClick={() => setActiveSection("pedidos")}>
            <FaShoppingCart />
            <span>Pedidos</span>
          </MenuItemBtn>

          <MenuItemBtn active ={activeSection === "mensajes"} onClick={() => setActiveSection("mensajes")}>
            <FaEnvelope />
            <span>Mensajes</span>
          </MenuItemBtn>
        </MenuBtns>
      </SidebarAdmin>

      <ContentSection>
        {activeSection === "servicios" && <ServiceAdmin />}
        {activeSection === "usuarios" && <UserAdmin />}
        {activeSection === "pedidos" && <OrderAdmin />}
        {activeSection === "mensajes" && <ContactAdmin />}
      </ContentSection>

    </AdminContainer>
  );
};
