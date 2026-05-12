import { Hero } from "../../components/Hero/Hero"
import { Services } from "../../components/Services/Services"
import { AboutMe } from "../AboutMe/AboutMe"
import { HomeContainer } from "./HomeStyles"


export const Home = () => {
  return (
    <HomeContainer>
      <Hero/>

      {/* <div> */}
        <AboutMe/>
      {/* </div> */}

    {/* <ServicesContainers> */}
    {/* <div> */}
      <Services/>
    {/* </div>   */}
    {/* </ServicesContainers> */}

    </HomeContainer>
  )
}
