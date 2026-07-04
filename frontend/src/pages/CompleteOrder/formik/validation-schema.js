import * as yup from "yup";

export const validationSchema= yup.object({
    name: yup.string().required("El nombre es obligatorio")
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres")
    .matches(/^[a-zA-Z\s]+$/, "El nombre solo puede contener letras y espacios"),

    cellphone: yup.string().required("El celular es obligatorio")
    .matches(/^\d{10}$/, "El celular debe tener 10 dígitos y solo contener números"),

    location: yup.string().required("La localidad es obligatoria")
    .min(3, "La localidad debe tener al menos 3 caracteres")
    .max(50, "La localidad no puede tener más de 50 caracteres"),
    address: yup.string().required("La dirección es obligatoria")
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(100, "La dirección no puede tener más de 100 caracteres"),
}) 