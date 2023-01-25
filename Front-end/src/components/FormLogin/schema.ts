import * as yup from "yup";

export const schemaInfos = yup.object().shape({
  username: yup.string().required("O Username é obrigatório"),
  password: yup.string().required("A senha é obrigatório"),
});
