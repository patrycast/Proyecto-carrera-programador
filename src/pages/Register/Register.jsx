import { RegisterContainer, FormStyled, InputStyled, PError, BtnLogin, ContainerImgForm } from './RegisterStyles';
import { Link } from 'react-router-dom';
import { Submit } from '../../components/shared/Submit/Submit';
import { Field, useFormik } from 'formik';
import { initialValues } from './formik/initial.values';
import { validationSchema } from './formik/validation-schema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ContainerImg } from '../Login/LoginStyles';


import { getAuth, createUserWithEmailAndPassword, updateProfile, validatePassword  } from "firebase/auth";
import  {app } from '../../firebase/config';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/user/userSlice';


export const Register = () => {
    // useRedirect("/login");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth(app);

  // const { handleSubmit, getFieldProps, errors, touched} = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     console.log(values)
  //     {values ? (
  //       toast.success("¡Registro exitoso! Redirigiendo a la página de Login..."),
  //       setTimeout(() => {
  //         navigate("/login");
  //       }, 3500)

  //     ) : (
  //       toast.error("Error en el registro. Por favor, intenta nuevamente.")
  //     )}
  //   }
  // })


  //funcion de validacion

  const validateFirebasePassword = async (password) => {

  const status = await validatePassword(auth, password);

  if (!status.isValid) {

    if (!status.containsUppercaseLetter) {
      toast.error("Debe contener una mayúscula");
    }

    if (!status.containsLowercaseLetter) {
      toast.error("Debe contener una minúscula");
    }

    if (!status.containsNumericCharacter) {
      toast.error("Debe contener un número");
    }

    if (!status.containsNonAlphanumericCharacter) {
      toast.error("Debe contener un carácter especial");
    }

    if (!status.meetsMinPasswordLength) {
      toast.error("Debe tener mínimo 6 caracteres");
    }

    return false;
  }

  return true;
};


  const { handleSubmit, getFieldProps, errors, touched} = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
            // validar password con Firebase
        const isValidPassword =await validateFirebasePassword(values.password);

        if (!isValidPassword) return;
        
        //creo usuario
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;
        
        await updateProfile(user, {
          displayName: values.name,
      });


      //guardo el usuario en firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: values.name,
        email: values.email,
        role: "user",
      })

      // guardo en redux
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            role: "user",
          })
        );
        console.log("Usuario registrado:", user);

        toast.success("¡Registro exitoso! Redirigiendo al Login...")

        setTimeout(() => {
          navigate("/login");
        }, 3500)
      } 

    catch (error) {

        switch (error.code) {

          case "auth/email-already-in-use":
            toast.error("Ese email ya está registrado");
            break;

          case "auth/invalid-email":
            toast.error("El email no es válido");
            break;

          case "auth/weak-password":
            toast.error(
              "La contraseña no cumple los requisitos"
            );
            break;

          case "auth/missing-password":
            toast.error("Debes ingresar una contraseña");
            break;

          case "auth/network-request-failed":
            toast.error("Error de conexión");
            break;

          default:
            toast.error("Ocurrió un error inesperado");
        }

      }
    }
  });

  return (
    <RegisterContainer>
      <h2>Crea tu cuenta</h2>

       <ContainerImgForm>
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

                <ContainerImg/>
          
        </ContainerImgForm>
    </RegisterContainer>
  );
};
