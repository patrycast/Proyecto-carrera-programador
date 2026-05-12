import { RegisterContainer, FormStyled, InputStyled, PError, BtnLogin } from './RegisterStyles';
import { Link } from 'react-router-dom';
import { Submit } from '../../components/shared/Submit/Submit';
import { Field, useFormik } from 'formik';
import { initialValues } from './formik/initial.values';
import { validationSchema } from './formik/validation-schema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Register = () => {
  const navigate = useNavigate();
  const { handleSubmit, getFieldProps, errors, touched} = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      {values ? (
        toast.success("¡Registro exitoso! Redirigiendo a la página de Login..."),
        setTimeout(() => {
          navigate("/login");
        }, 3500)

      ) : (
        toast.error("Error en el registro. Por favor, intenta nuevamente.")
      )}
    }
  })
  return (
    <RegisterContainer>
      <h2>Crea tu cuenta</h2>

      
        <FormStyled>
          <label>Nombre</label>
          <InputStyled  type="text" placeholder="Tu Nombre"  name="name"
           {...Field}
           {...getFieldProps("name")}
           error={errors.name && touched.name}
           />
           <PError>{errors.name}</PError>
            
            <label>Email</label>
          <InputStyled type="email" placeholder="Tu Email" name="email"
           {...Field}
           {...getFieldProps("email")}
           error={errors.email && touched.email}
           />
           <PError>{errors.email}</PError>

          <label>Contraseña</label>
          <InputStyled type="password" placeholder="Tu Contraseña" name="password"
           {...Field}
           {...getFieldProps("password")}
           error={errors.password && touched.password}
           />
           <PError>{errors.password}</PError>

           <Link to="/login">
              <p>¿Ya tienes cuenta?<BtnLogin> Inicia sesión</BtnLogin></p>
            </Link>

            <Submit  onSubmit={handleSubmit}>
            Registrate
          </Submit>
          </FormStyled>
    </RegisterContainer>
  );
};
