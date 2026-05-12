import { ServicesContainer, ServicesSection} from "./Services-styled"
import { ServiceCard } from "./ServiceCard"
import { useSelector } from "react-redux"

export const Services = () => {
  const services= useSelector( state => state.services.servicesMock)
  return (
    <ServicesSection>
      <h2>Servicios</h2>
        <ServicesContainer>
            {services.map(service => (
                <ServiceCard key={service.id} {...service}/>
            ))}
          
        </ServicesContainer>
    </ServicesSection>
  )
}
