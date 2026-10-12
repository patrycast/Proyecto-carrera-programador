import { AboutMeContainer, AboutMeContent,AboutMeText, AboutMeImg } from "./AboutMeStyles";
import mujerGymPesas from "../../assets/img/mujerGymPesas.png"

export const AboutMe = () => {
  return (
    <AboutMeContainer>
      <h2>Sobre Mí</h2>
      <AboutMeContent>

        <AboutMeText> 
          <p>Mi nombre es Valentina y soy profesora de educación física. Empecé dando clases en gimnasios con gente joven, hasta que un día acompañé a mi abuela a su clase de gimnasia y descubrí otra forma de entrenar: más lenta, más consciente y más humana.</p>
          <p>Desde entonces me especialicé en adultos mayores. Hoy armo rutinas pensadas para cuidar las articulaciones, mejorar el equilibrio y la fuerza, y sobre todo para que cada persona disfrute del movimiento a su propio ritmo.</p>
        </AboutMeText>

        <AboutMeImg src={mujerGymPesas} alt="Mujer haciendo ejercicio en el gimnasio" />
        </AboutMeContent>
    </AboutMeContainer>
  )
}
