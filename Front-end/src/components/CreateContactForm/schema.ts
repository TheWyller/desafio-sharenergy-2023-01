import * as yup from "yup";

export const schemaInfos = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("O email precisa ser válido")
    .required("O email é obrigatório"),
  phone: yup
    .string()
    .required("O telefone é obrigatório")
    .min(10, "Mínimo de 10 digitos!"),
  address: yup.string().required("O endereço é obrigatório"),
  cpf: yup
    .string()
    .required()
    .matches(
      /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
      "CPF inválido"
    ),
});
