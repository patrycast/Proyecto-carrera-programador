import styled from "styled-components";
import { ProfileUser } from "./ProfileUser/ProfileUser";
import { ProfileAdmin } from "./ProfileAdmin/ProfileAdmin";
import { useSelector } from "react-redux";

const ProfilePage = styled.div`
  padding: 90px;
  margin-top: 24px;
  text-align: center;

  @media (max-width: 768px){
    padding: 100px 1rem 40px;
    margin-top: 0;
  }
`;

export const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <ProfilePage>
        <h2>Perfil</h2>
        {/* //logica de perfil segun rol */}
        {user?.role === "admin" ? <ProfileAdmin /> : <ProfileUser />}
        
    </ProfilePage>
  )
}
