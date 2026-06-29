import * as Yup from "yup";

export const validationSchema = Yup.object({
    name: Yup.string()
        .required("El nombre es obligatorio")
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(50, "El nombre no puede tener más de 50 caracteres"),

    lastname: Yup.string()
        .required("El apellido es obligatorio")
        .min(3, "El apellido debe tener al menos 3 caracteres")
        .max(50, "El apellido no puede tener más de 50 caracteres"),
    email: Yup.string()
        .email("Email inválido")
        .required("El email es obligatorio")
        .trim()
        .matches(/\./, "El email debe contener al menos un punto (.)"),

    cellphone: Yup.string()
        .required("El celular es obligatorio")
        .trim()
        .matches(/^\d{10,15}$/, "Debe tener entre 10 y 15 números"),

    message: Yup.string()
        .min(10, "Mínimo 10 caracteres").max(500, "Máximo 500 caracteres")
        .notRequired()
        })
        