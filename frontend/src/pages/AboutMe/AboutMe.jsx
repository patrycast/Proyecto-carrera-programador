import { AboutMeContainer, AboutMeContent,AboutMeText, AboutMeImg } from "./AboutMeStyles";
import mujerGymPesas from "../../assets/img/mujerGymPesas.png"

export const AboutMe = () => {
  return (
    <AboutMeContainer>
      <h2>Sobre Mí</h2>
      <AboutMeContent>

        <AboutMeText> 
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore consectetur incidunt dolore facere ducimus, autem cupiditate nostrum. Eius quam eum, est, 
            fuga tempore dicta temporibus, rerum consectetur repellendus voluptate neque!
        Et distinctio ipsum fuga id, voluptatum libero itaque, modi laboriosam illo magni voluptatibus placeat. Architecto aliquam temporibus 
        facere perferendis vitae labore? Deleniti odit ducimus sapiente consequuntur quos?
        Earistinctio eos architecto numquam, repellat voluptatum repudiandae</p>
        <p>soluta possimus suscipit recusandae nemo porro fugiat eaque dicta ut. Molestias, alias eos nesciunt deserunt facilis id magnam!electus sint asperiores 
          molestiae! Ut esse qui tempora saepe tenetur</p> 
        <p>aperiam quod accusantium officiis, vero consequatur sapiente repellat animi veritatis enim! Perspiciatis repellat neque reiciendis maiores in! Labore, 
          ducimus! Consequuntur velit ab culpa tenetur! Modi nulla veniam sapiente et ab perspiciatis, a iure illo.
        Iste voluptatem minus quasi tenetur incidunt odio culpa expedita hic dolore mollitia. Consequuntur ducimus numquam, explicabo quasi nesciunt pariatur eum!p </p>
        <p> Omnis delectus nemo totam, reiciendis repellat dolor sequi quasi eum!
        Possimus dolo maiores ea explicabo suscipit hic distinctio? Perspiciatis magni voluptatibus, libero blanditiis tempora beatae, sit sint numquam repellendus
         cumque dignissimos. Magnam, id voluptatibus eligendi mollitia qui esse aliquid asperiores odit minus explicabo, 
         voluptatem vero nam quis vitae labore doloribus neque sequi voluptate obcaecati quae a officiis corrupti natus!</p>
         </AboutMeText>

        <AboutMeImg src={mujerGymPesas} alt="Mujer haciendo ejercicio en el gimnasio" />
        </AboutMeContent>
    </AboutMeContainer>
  )
}
