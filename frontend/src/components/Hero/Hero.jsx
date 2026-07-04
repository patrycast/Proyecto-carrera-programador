// import hero from "../../assets/img/hero.png"
import hero from "../../assets/img/hero1.png"
// import hero2 from "../../assets/img/hero2.png"
import { Button } from "../shared/Button/Button"
import { HeroContainer, HeroText, HeroImg } from "./HeroStyles"

export const Hero = () => {
  return (
    <HeroContainer>
        <HeroText>
            <h2>Bienvenido/a a </h2>
            <h2><span>Gym para Adultos Mayores +60</span></h2>
            <p>¡Explora mis servicios y proyectos!</p>
            <p>Movete, cuidate y sentite mejor 💛</p>
            <p>Clases adaptadas, a tu ritmo y sin exigencias</p>
        <Button label="Recomendaciones/Beneficios" style={{":hover": { transform: "scale(0.90)", color: "#000" }}}/>
        </HeroText>

        <HeroImg>
            <img src={hero} alt="Hero" style={{ width: "600px", height: "auto", borderRadius: "10px", filter: "brightness(70%)", saturate: "70%" }}/>
        </HeroImg>
    </HeroContainer>
  )
}

   