import * as Yup from "yup";

// const passwordRegex= /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6}$/;
const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

export const validationSchema= Yup.object({
    name: Yup.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres")
    .required("El nombre es requerido"),

    email: Yup.string()
    .trim()
    .lowercase()
    .email("Formato de email inválido")
    .matches(/\./, "El email debe contener al menos un punto (.)")
    .required("El email es requerido"),
    
    password: Yup.string()
    .matches(passwordRegex, "La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un carácter especial")
    .required("La contraseña es requerida")
})