import { ContactContainer, FormStyled, InputStyled, TextAreaStyled, PError } from './ContactStyles';
import { Submit } from '../../components/shared/Submit/Submit';
import { Field, useFormik } from 'formik';
import { initialValues } from './Formik/initial-values';
import { validationSchema } from './formik/validation-schema';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



export const Contact = () => {
    const navigate = useNavigate();
    const { handleSubmit, getFieldProps, errors, touched} = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      {values ? (
        toast("Consulta enviada correctamente"),
        setTimeout(() => {
        navigate("/");}, 4000) ) : 
        (toast("Error al enviar la consulta")) }
    }
  })

  return (
    <ContactContainer>
      <h2>Contacto</h2>
         <h3>Escribime tu consulta, te contesto a la brevedad!</h3>

      <FormStyled>
        <InputStyled
          type="text"
          placeholder="Nombre"
          name="name"
          {...getFieldProps("name")}
          error={errors.name && touched.name}
        />
        <PError>{errors.name}</PError>

        <InputStyled
          type="text"
          placeholder="Apellido"
          name="lastname"
          {...Field}
          {...getFieldProps("lastname")}
        error={errors.lastname && touched.lastname}
        />
        <PError>{errors.lastname}</PError>

        <InputStyled
          type="email"
          placeholder="Email"
          name="email"
          {...Field}
          {...getFieldProps("email")}
          error={errors.email && touched.email}
        />
        <PError>{errors.email}</PError>

        <InputStyled
          type="text"
          placeholder="Celular"
          name="cellphone"
          {...getFieldProps("cellphone")}
          error={errors.cellphone && touched.cellphone}
        />
        <PError>{errors.cellphone}</PError>

        <TextAreaStyled
          placeholder="Escribí tu consulta..."
          {...getFieldProps("message")}
          error={errors.message && touched.message}
        />
        <PError>{errors.message}</PError>

        <Submit type="submit" onSubmit={handleSubmit}>
          Enviar 
        </Submit>

      </FormStyled>
  
    </ContactContainer>
  );
};