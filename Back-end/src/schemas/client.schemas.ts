import * as yup from "yup";
import { SchemaOf } from "yup";
import { IClientPost } from "../interfaces/clients";

const clientSchema: SchemaOf<IClientPost> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .min(10, "O Telefone deve conter no mínimo 8 digitos mais o DDD")
    .required(),
  address: yup.string().required(),
  cpf: yup
    .string()
    .required()
    .matches(
      /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
      "CPF inválido"
    ),
});

export { clientSchema };
