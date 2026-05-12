import { Link } from "react-router-dom"
import { LoginContainer, Form, InputStyled, PError, BtnRegister } from "./LoginStyles"
import { Submit } from "../../components/shared/Submit/Submit"
import { Field, useFormik } from "formik"
import { initialValues } from "./formik/initial-values"
import { validationSchema } from "./formik/validation-schema"

export const Login = () => {
  const { handleSubmit, getFieldProps, errors, touched} = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
    }

  })
  return (
    <LoginContainer>
      <h2>Iniciar Sesión</h2>

     <Form >
      <label> Email</label>
      <InputStyled label="Email" type="email" placeholder="tu Email" name="email" {...Field}
        {...getFieldProps("email")}
        error={errors.email && touched.email}
        />
        
      <PError>{errors.email}</PError>

      <label>Contraseña</label>
      <InputStyled label="Contraseña" type="password" placeholder="Tu Contraseña" name="password" 
        {...getFieldProps("password")}
        error={errors.password && touched.password}
        />

      <PError>{errors.password }</PError>

      <Link to="/register">
        <p>¿No tienes cuenta?<BtnRegister> Crea una</BtnRegister></p>
      </Link>

      <Submit onSubmit={handleSubmit}>Ingresar</Submit>
     </Form>
    </LoginContainer>
  )
}
