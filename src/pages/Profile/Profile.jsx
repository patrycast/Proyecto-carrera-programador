import { ProfileUser } from "./ProfileUser/ProfileUser";
import { ProfileAdmin } from "./ProfileAdmin/ProfileAdmin";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div style={{padding: "90px", marginTop: "24px", textAlign: "center"}}>
        <h2>Perfil</h2>
        {/* //logica de perfil segun rol */}
        {user?.role === "admin" ? <ProfileAdmin /> : <ProfileUser />}
        
    </div>
  )
}
