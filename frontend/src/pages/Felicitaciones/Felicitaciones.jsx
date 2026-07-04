import { useNavigate } from "react-router-dom";
import { FelicitacionesContainer, ImgWrapper, ButtonStyled} from "./FelicitacionesStyles";
// import felicitaciones from "../../assets/img/felicitaciones.png";
import felicitaciones from "../../assets/img/felicitaciones.png";



export const Felicitaciones = () => {
  const navigate = useNavigate();

  return (
    <FelicitacionesContainer>

      <ImgWrapper>
      <h2> Gracias por tu compra. Nos pondremos en contacto para coordinar.</h2>
      <img src={felicitaciones} alt="felicitaciones" />
       {/* style={{ width: "65%", height: "auto", borderRadius: " 0 0 10px 10px" }} */}
      <ButtonStyled label="Volver al inicio" onClick={() => navigate("/")}/>
      </ImgWrapper> 

    </FelicitacionesContainer>
  )
}
