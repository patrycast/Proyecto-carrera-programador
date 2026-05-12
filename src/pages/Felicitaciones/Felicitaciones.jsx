import { useNavigate } from "react-router-dom";
import { FelicitacionesContainer, ImgWrapper, ButtonStyled} from "./FelicitacionesStyles";
// import { Button } from "../../components/shared/Button/Button";
import felicitaciones from "../../assets/img/felicitaciones.png";
// import felicitaciones1 from "../../assets/img/felicitaciones1.png";
// import felicitaciones2 from "../../assets/img/felicitaciones2.png";


export const Felicitaciones = () => {
  const navigate = useNavigate();

  return (
    <FelicitacionesContainer>
      {/* <h2>¡Gracias por elegirme!</h2> */}
      {/* <p>Tu solicitud fue recibida con éxito.</p>
      <p>Estamos en contacto!</p> */}

      <ImgWrapper>
      <img src={felicitaciones} alt="felicitaciones" />
       {/* style={{ width: "65%", height: "auto", borderRadius: " 0 0 10px 10px" }} */}
      <ButtonStyled label="Volver al inicio" onClick={() => navigate("/")}/>
      </ImgWrapper> 

    </FelicitacionesContainer>
  )
}
