import { FormGrid, InputGroup, Label, Input, Button } from "./CompleteOrderStyles"
import { Field, Formik, Form, ErrorMessage } from "formik";
import { initialValues } from "./formik/initial-values";
import { validationSchema } from "./formik/validation-schema";
import { Submit } from "../../components/shared/Submit/Submit";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";
import { addOrder } from "../../redux/slices/ordersSlice";

import { addDoc, collection, doc, updateDoc } from "firebase/firestore"; //serverTimestamp
import { db } from "../../firebase/config";


export const CompleteOrderForm = ({ cartItems, totalPrice }) => {
  const user  = useSelector((state) => state.user.user); 
  console.log(cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={ async (values) => {
        console.log("values", values)
      
        try {
          //creo la orden en firestore
        const dataCompleteOrder= {
          userId: user.uid,
          details: {
          name: user.displayName,
          email: user.email,

          cellphone: values.cellphone,
          location: values.location,
          address: values.address,},
          items: cartItems,
          totalPrice: totalPrice,
          // createdAt: serverTimestamp(),
        }

        // guardo en firestore
        await addDoc(collection(db, "orders"), dataCompleteOrder);

        // actualizo datos de contacto del usuario
        await updateDoc(doc(db,"users", user.uid), {
          cellphone: values.cellphone,
          location: values.location,
          address: values.address,
        })

        dispatch(addOrder(dataCompleteOrder));

        console.log("orders",dataCompleteOrder)
        toast.success("Pedido creado correctamente!"); 
        dispatch(clearCart());

        setTimeout(() => {
          navigate("/felicitaciones");
        }, 3500);

      } catch (error) {
        console.error("Error al generar el pedido:", error);
        toast.error("Error al generar el pedido. Por favor, intenta nuevamente."  + error.message);
      }
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

    
            <Button disabled={!cartItems.length } type="submit">INICIAR PEDIDO</Button>
           

            </FormGrid>
            </Form>
              </Formik>
    
        </>    
  )
}
