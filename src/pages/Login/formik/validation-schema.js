import * as Yup from "yup";

const passwordRegex= /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6}$/;

export const validationSchema= Yup.object({
    email: Yup.string()
    .email("Email invalido")
    .trim()
    .lowercase()
    .email("Formato de email inválido")
    .matches(/\./, "El email debe contener al menos un punto (.)")
    .required("El email es requerido"),
    
    password: Yup.string()
    .matches(passwordRegex, "La contraseña debe tener al menos 6 caracteres, una mayúscula, un número y un carácter especial")
    .required("La contraseña es requerida")
})