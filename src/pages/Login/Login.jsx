import { Link, useNavigate, useLocation} from "react-router-dom"
import { LoginContainer, Form, InputStyled, PError, BtnRegister, ContainerImg, ContainerImgForm} from "./LoginStyles"
import { Submit } from "../../components/shared/Submit/Submit"
import { Field, useFormik } from "formik"
import { initialValues } from "./formik/initial-values"
import { validationSchema } from "./formik/validation-schema"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux";


import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { setUser } from "../../redux/slices/user/userSlice";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";



export const Login = () => {
  const { state } = useLocation();   
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems= useSelector((state) => state.cart.cartItems);
  const { handleSubmit, getFieldProps, errors, touched} = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        
        const user = userCredential.user;
        const token= await user.getIdToken();
        const snap= await getDoc(doc(db, "users", user.uid));
        
        
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          token: token,
          role: snap.data().role,
        }));
        
        console.log("Usuario logueado:", user);
        console.log("role:", snap.data()?.role);
        
        toast.success("¡Login exitoso!");



        // if (state?.redirectedFromCompleteOrder) {
        //   navigate("/completeOrder");
        // } else {
        //   navigate("/");
        // }
           setTimeout(() => {
          if (state?.from === "/completeOrder" && cartItems.length > 0) {
            navigate("/completeOrder");
          } else {
            // navigate("/");
            navigate("/profile");

          }
        }, 2500);

      

        // setTimeout(() => {
        //   navigate("/");
        // }, 2500);
      } 
      // catch (error) {
      //   toast.error("Error en el login: " + error.message);
      // }
     catch(error) {

   if(error.code === "auth/invalid-credential") {
      toast.error("Email o contraseña incorrectos");
   } else {
      toast.error("Error al iniciar sesión");
   }

}
    },
  });
      

  return (
    <LoginContainer>
      <h2>Iniciar Sesión</h2>

      <ContainerImgForm>
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

      <ContainerImg/>

      </ContainerImgForm>
    </LoginContainer>
  )
}
