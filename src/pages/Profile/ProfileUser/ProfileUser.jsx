import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { DataRow, EditButton, ProfileContainer, ProfileCard } from "./ProfileStyles";
import { EditFieldModal } from "./EditFieldModal";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";



export const ProfileUser = () => {
  const { user } = useSelector((state) => state.user);
  //guardo los datos que vienen de Firestore 
  const [userData, setUserData] = useState(null);

  
const [editingField, setEditingField] = useState(null);
const [editValue, setEditValue] = useState("");


const handleEdit = (field, currentValue) => {
  setEditingField(field);
  setEditValue(currentValue || "");
};


  //Cuando el componente se monta va a Firestore, busca el documento del usuario usando su uid,
  //  y guarda los datos en userData. El [user.uid] significa que solo se ejecuta cuando cambia el uid — o sea una sola vez al cargar.
  useEffect(() => {
    const fetchUserData = async () => {
      const snap = await getDoc(doc(db, "users", user.uid));
      setUserData(snap.data());
    };
    fetchUserData();
  }, [user.uid]);

  return (
    // <div>
    //   <h3>Mis datos</h3>
    //   <p><strong>Nombre:</strong> {user?.displayName}</p>
    //   <p><strong>Email:</strong> {user?.email}</p>

    //   {userData?.cellphone && <p><strong>Celular:</strong> {userData.cellphone}</p>}
    //   {userData?.location && <p><strong>Localidad:</strong> {userData.location}</p>}
    //   {userData?.address && <p><strong>Dirección:</strong> {userData.address}</p>}


    // </div>

    <ProfileContainer>
      <h3>Mis datos</h3>

      <ProfileCard>
        <DataRow>
          <p><strong>Nombre:</strong> {user?.displayName}</p>
          <EditButton onClick={() => handleEdit("displayName", user?.displayName)}><FaEdit /></EditButton>
        </DataRow>

        <DataRow>
          <p><strong>Email:</strong> {user?.email}</p>
          {/* <EditButton onClick={() => handleEdit("email", user?.email)}>Editar</EditButton> */}
        </DataRow>

        <DataRow>
          <p><strong>Celular:</strong> {userData?.cellphone || "No cargado"}</p>
          <EditButton onClick={() => handleEdit("cellphone", userData?.cellphone)}><FaEdit /></EditButton>
        </DataRow>

        <DataRow>
          <p><strong>Localidad:</strong> {userData?.location || "No cargado"}</p>
          <EditButton onClick={() => handleEdit("location", userData?.location)}><FaEdit /></EditButton>
        </DataRow>

        <DataRow>
          <p><strong>Dirección:</strong> {userData?.address || "No cargado"}</p>
          <EditButton onClick={() => handleEdit("address", userData?.address)}><FaEdit /></EditButton>
        </DataRow>
      </ProfileCard>

      {editingField && (
        <EditFieldModal
          field={editingField}
          value={editValue}
          onClose={() => setEditingField(null)}
          onUpdate={(field, newValue) => {
            setUserData((prev) => ({ ...prev, [field]: newValue }));
            setEditingField(null);
          }}
        />
      )}

</ProfileContainer>
  )
}