import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaInfos } from "./schema";
import { DivStyled, FormStyled } from "../Form/style";
import { Input } from "../Input";
import Button from "../Button";
import { useContext } from "react";
import { SignUpContext } from "../../contexts/SignUpContext";

const FormSignUp = () => {
  const { setSignUpData } = useContext(SignUpContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaInfos) });

  const onSubmitFunction = (data: FieldValues) => {
    setSignUpData(data);
  };

  return (
    <DivStyled>
      <h1>Cadastro</h1>
      <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          name="username"
          type="text"
          label="Informe seu username"
          placeholder="userName"
          register={register}
          error={errors.username?.message}
        />
        <Input
          name="fullName"
          type="text"
          label="Informe seu nome completo"
          placeholder="Nome Completo"
          register={register}
          error={errors.fullName?.message}
        />
        <Input
          name="email"
          type="email"
          label="Informe seu email"
          placeholder="exemplo@email.com"
          register={register}
          error={errors.email?.message}
        />
        <Input
          name="phone"
          type="text"
          label="Informe seu telefone"
          placeholder="41912345678"
          register={register}
          error={errors.phone?.message}
        />
        <Input
          name="password"
          type="password"
          label="Informe sua senha"
          placeholder="********"
          register={register}
          error={errors.password?.message}
        />
        <Input
          name="passwordConfirm"
          type="password"
          label="Confirme sua senha"
          placeholder="********"
          register={register}
          error={errors.passwordConfirm?.message}
        />

        <Button type="submit">Cadastrar</Button>
      </FormStyled>
    </DivStyled>
  );
};

export default FormSignUp;
