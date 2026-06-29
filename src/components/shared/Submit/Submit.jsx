import { ButtonSubmit } from "./SubmitStyled";

export const Submit = ({onSubmit}) => {
    const handleSubmit= (e) => {
        e.preventDefault()
        onSubmit()
    }
  return (
    <ButtonSubmit type="submit" onClick={handleSubmit}>
        Enviar
    </ButtonSubmit>
  )
}
