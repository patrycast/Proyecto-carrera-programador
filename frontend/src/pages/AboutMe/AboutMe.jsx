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
          <p>Con los años entendí que no se trata de levantar más peso ni de correr más rápido, sino de moverse mejor. Por eso mis clases combinan fuerza suave, movilidad y equilibrio, con ejercicios simples que se pueden repetir en casa sin complicaciones.</p>
          <p>Me capacito de forma constante en entrenamiento adaptado y trabajo junto a kinesiólogos para acompañar también a quienes se recuperan de una lesión o conviven con alguna condición crónica.</p>
          <p>Mi objetivo es simple: que cada alumno y alumna se sienta acompañado, seguro y con ganas de volver a la próxima clase. Porque moverse, a cualquier edad, es una forma de seguir disfrutando la vida.</p>
        </AboutMeText>

        <AboutMeImg src={mujerGymPesas} alt="Mujer haciendo ejercicio en el gimnasio" />
        </AboutMeContent>
    </AboutMeContainer>
  )
}
