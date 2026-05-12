import { FormGrid, InputGroup, Label, Input, Button } from "./CompleteOrderStyles"
import { Field, Formik, Form, ErrorMessage } from "formik";
import { initialValues } from "./formik/initial-values";
import { validationSchema } from "./formik/validation-schema";
import { Submit } from "../../components/shared/Submit/Submit";
// import { Button } from "../../components/shared/Button/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const CompleteOrderForm = ({ cartItems, totalPrice }) => {
  const navigate = useNavigate();
  return (
    <>
      <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const dataCompleteOrder= {
          name: values.name,
          cellphone: values.cellphone,
          location: values.location,
          address: values.address,
          items: cartItems,
          totalPrice: totalPrice
        }

        console.log(dataCompleteOrder)
        toast.success("¡Solicitud enviada con éxito!"); 
        setTimeout(() => {
          navigate("/felicitaciones");
        }, 3500);
      }}
      >

        <Form>
        <FormGrid>
            <Field name="name">
              {({field, form: {errors, touched}}) => (
              <InputGroup>
                <Label>Nombre</Label>
                <Input placeholder="Tu nombre" name="name" {...field} isErrors={errors.name && touched.name} />

                <ErrorMessage name="name">
                  {msg => <span style={{color: "red", fontSize: "15px", margin: "15px 0"}}>{msg}</span>}
                </ErrorMessage>
              </InputGroup>
              )}
            </Field>

            <Field name="cellphone">
              {({field, form: {errors, touched}}) => (
              <InputGroup>
                <Label>Celular</Label>
                <Input placeholder="Tu celular" name="cellphone" {...field} isErrors={errors.cellphone && touched.cellphone} />
                <ErrorMessage name="cellphone">
                  {msg => <span style={{color: "red", fontSize: "15px", margin: "15px 0"}}>{msg}</span>}
                </ErrorMessage>
              </InputGroup>
              )}
            </Field>

            <Field name="location">
              {({field, form: {errors, touched}}) => (
              <InputGroup>
                <Label>Localidad</Label>
                <Input placeholder="Tu localidad" name="location" {...field} isErrors={errors.location && touched.location} />
                <ErrorMessage name="location">
                  {msg => <span style={{color: "red", fontSize: "15px", margin: "15px 0"}}>{msg}</span>}
                </ErrorMessage>
              </InputGroup>
              )}
            </Field>

            <Field name="address">
              {({field, form: {errors, touched}}) => (
              <InputGroup>
                <Label>Dirección</Label>
                <Input placeholder="Tu dirección" name="address" {...field} isErrors={errors.address && touched.address} />
                <ErrorMessage name="address">
                  {msg => <span style={{color: "red", fontSize: "15px", margin: "15px 0"}}>{msg}</span>}
                </ErrorMessage>
              </InputGroup>
              )}
            </Field>

            {/* <Button>INICIAR PEDIDO</Button> */}
            <Button disabled={!cartItems.length} type="submit">INICIAR PEDIDO</Button>
            {/* <Submit disabled={!cartItems.length}>INICIAR PEDIDO</Submit> */}
            </FormGrid>
            </Form>
              </Formik>
    
        </>    
  )
}
