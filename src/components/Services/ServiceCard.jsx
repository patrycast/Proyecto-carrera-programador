import { Button } from "../shared/Button/Button"
import { ServiceCardStyled } from "./Services-styled"
import { useDispatch } from "react-redux"
import { addToCart, toggleHiddenCart } from "../../redux/slices/cartSlice" 
import { toast } from "react-toastify"
import { images } from "../../data/images"



export const ServiceCard = ({id, title, img, desc, price}) => {
  const dispatch= useDispatch()

  const handleAddToCart= () => {
    dispatch(addToCart({id, title, img, desc, price}))
    dispatch(toggleHiddenCart())
    // toast.success("Servicio agregado al carrito")
   
    toast("Servicio agregado al carrito", { style:{color:"var(--color-links)", fontSize:"20px"} })
  }
  return (
    <ServiceCardStyled>
      <h3>{title}</h3>
      {/* <img src={img} alt={title}  /> */}
      <img src={images[img]} alt={title}  />

      <p>{desc}</p>
      <p>Precio: <span> ${price.toLocaleString('es-AR')}</span></p>
      <Button onClick={handleAddToCart} label="Agregar al Carrito" ></Button>
      
    </ServiceCardStyled> 
  )
}
