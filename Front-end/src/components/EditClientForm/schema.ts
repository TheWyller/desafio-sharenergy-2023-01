import * as yup from "yup";

export const schemaInfos = yup.object().shape({
  name: yup.string(),
  address: yup.string(),
  email: yup.string().email("O email precisa ser válido"),
  phone: yup.string().matches(/.{10,}/, {
    excludeEmptyString: true,
    message: "Mínimo de 10 digitos!",
  }),
});
