import { useEffect, useState, useCallback } from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../firebase/config"; 
import { toast } from "react-toastify";

import {  UsersContainer, UsersTable, TableHeader, TableRow, TableData, ActionButtonEdit, ActionButtonDelete, EditModal,
   ModalContent, InputField, SelectField, ButtonGroup } from "./UserAdminStyles";


export const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // estados para el modal 
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formValues, setFormValues] = useState({
    displayName: "",
    cellphone: "",
    address: "",
    location: "",
    role: "user"
  });

        const fetchUsers = useCallback(async () => {
            try {
            setLoading(true);
            const querySnapshot = await getDocs(collection(db, "users"));
            const usersList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsers(usersList);
            } catch (error) {
            console.error("Error al traer usuarios:", error);
            toast.error("No se pudieron cargar los usuarios");
            } finally {
            setLoading(false);
            }
        }, []); 

   
        useEffect(() => {
    
            const loadData = async () => {
                await fetchUsers();
            };
            loadData();
        }, [fetchUsers]);

  // modal con los datos del usuario 
  const handleEditClick = (user) => {
    setSelectedUser(user);
    setFormValues({
      displayName: user.displayName || "",
      cellphone: user.cellphone || "",
      address: user.address || "",
      location: user.location || "",
      role: user.role || "user"
    });
    setIsEditModalOpen(true);
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // 3. Actualizo usuario en Firestore
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    if (!selectedUser) return;

    try {
      const userRef = doc(db, "users", selectedUser.id);
      
      // actualizo los datos utilizando el uuid
      await updateDoc(userRef, {
        displayName: formValues.displayName,
        cellphone: formValues.cellphone,
        address: formValues.address,
        location: formValues.location,
        role: formValues.role
      });

      toast.success("Usuario actualizado correctamente");
      setIsEditModalOpen(false);
      fetchUsers(); 
    } catch (error) {
      console.error("Error al actualizar:", error);
      toast.error("Error al actualizar el usuario");
    }
  };

  // elimino documento de usuario en Firestore
  const handleDeleteUser = async (userId) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      try {
        await deleteDoc(doc(db, "users", userId));
        toast.success("Usuario eliminado de Firestore");
        fetchUsers(); 
      } catch (error) {
        console.error("Error al eliminar:", error);
        toast.error("No se pudo eliminar el usuario");
      }
    }
  };

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <UsersContainer>
      <h2>Administración de Usuarios</h2>

      
      <UsersTable>
        <thead>
          <tr>
            <TableHeader>Nombre</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Rol</TableHeader>
            <TableHeader>Teléfono</TableHeader>
            <TableHeader>Dirección</TableHeader>  
            <TableHeader>Localidad</TableHeader>
            <TableHeader>Acciones</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableData>{user.displayName || "Sin nombre"}</TableData>
              <TableData>{user.email}</TableData>
              <TableData><strong>{user.role}</strong></TableData>
              <TableData>{user.cellphone || "-"}</TableData>
              <TableData>{user.address || "-"}</TableData>    
              <TableData>{user.location || "-"}</TableData>
              <TableData>
                <ActionButtonEdit style={{ marginBottom: "10px" }} onClick={() => handleEditClick(user)}>Editar</ActionButtonEdit>
                <ActionButtonDelete delete onClick={() => handleDeleteUser(user.id)}>Eliminar</ActionButtonDelete>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </UsersTable>

      {/* Modal de Edición */}
      {isEditModalOpen && (
        <EditModal>
          <ModalContent onSubmit={handleUpdateUser}>
            <h3>Editar Usuario</h3>
            
            <label>Nombre</label>
            <InputField name="displayName" value={formValues.displayName} onChange={handleInputChange} required />

            <label>Teléfono</label>
            <InputField name="cellphone" value={formValues.cellphone} onChange={handleInputChange} />

            <label>Dirección</label>
            <InputField name="address" value={formValues.address} onChange={handleInputChange} />

            <label>Localidad</label>
            <InputField name="location" value={formValues.location} onChange={handleInputChange} />

            <label>Rol en la plataforma</label>
            <SelectField name="role" value={formValues.role} onChange={handleInputChange}>
              <option value="user">User (Cliente)</option>
              <option value="admin">Admin (Administrador)</option>
            </SelectField>

            <ButtonGroup>
              <button type="submit">Guardar Cambios</button>
              <button type="button" onClick={() => setIsEditModalOpen(false)}>Cancelar</button>
            </ButtonGroup>
          </ModalContent>
        </EditModal>
      )}
    </UsersContainer>
  );
}; 