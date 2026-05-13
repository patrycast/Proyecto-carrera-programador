import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../redux/slices/servicesSlice";
import { ServiceCard } from "./ServiceCard";
import { ServicesContainer, ServicesSection } from "./Services-styled";

export const Services = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices()); // 👈 ahora solo despachás el thunk
  }, [dispatch]);

  if (loading) return <p>Cargando servicios...</p>;
  if (error) return <p>Error: {error}</p>;
  if (items.length === 0) return <p>No hay servicios disponibles.</p>;

  return (
    <ServicesSection>
      <h2>Servicios</h2>
      <ServicesContainer>
        {items.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </ServicesContainer>
    </ServicesSection>
  );
};







// import { ServicesContainer, ServicesSection} from "./Services-styled"
// import { ServiceCard } from "./ServiceCard"
// import { useSelector } from "react-redux"

// export const Services = () => {
//   const services= useSelector( state => state.services.servicesMock)
//   return (
//     <ServicesSection>
//       <h2>Servicios</h2>
//         <ServicesContainer>
//             {services.map(service => (
//                 <ServiceCard key={service.id} {...service}/>
//             ))}
          
//         </ServicesContainer>
//     </ServicesSection>
//   )
// }



