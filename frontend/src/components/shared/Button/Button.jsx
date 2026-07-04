import { ButtonStyled } from "./Button-styles"

export const Button = ({label, onClick}) => {
  return (
    <ButtonStyled onClick={onClick}>{label}</ButtonStyled>
  )
}
