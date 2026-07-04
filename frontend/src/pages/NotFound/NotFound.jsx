import page404 from "../../assets/img/page404.png"
import { useNavigate } from "react-router-dom"

export const NotFound = () => {
  const navigate = useNavigate()
  return (
 
    <>
    <img  onClick={() => navigate(-1)} style={{ marginTop: '90px' }} src={page404} alt="Página no encontrada" />
  
    </>
  )
}
