import { ButtonSubmit } from "./SubmitStyled";

export const Submit = ({onSubmit, children, ...props}) => {
    const handleSubmit= (e) => {
        onSubmit(e)
    }
  return (
    <ButtonSubmit type="submit" onClick={handleSubmit} {...props}>
        {children}
    </ButtonSubmit>
  )
}
