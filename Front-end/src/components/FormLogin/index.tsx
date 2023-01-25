import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaInfos } from "./schema";
import { DivStyled, FormStyled } from "../Form/style";
import { Input } from "../Input";
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import { decryptData } from "../../utils/crypt";

const FormLogin = () => {
  const user: string | null = localStorage.getItem("@Test_Tecnico:user");
  const pass: string | null = localStorage.getItem("@Test_Tecnico:pass");

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { setLoginData } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaInfos) });

  const onSubmitFunction = (data: FieldValues) => {
    setLoginData(data);
  };

  useEffect(() => {
    if (user !== null) {
      let defaultValues: {
        username?: string;
        password?: string;
        remember?: boolean;
      } = {};
      defaultValues.username = decryptData(user);
      defaultValues.password = decryptData(pass!);
      defaultValues.remember = true;

      reset({ ...defaultValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  return (
    <DivStyled>
      <h1>Login</h1>
      <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          name="username"
          type="text"
          label="Informe o username cadastrado"
          placeholder="MeuUserName"
          register={register}
          error={errors.email?.message}
        />
        {show ? (
          <Input
            name="password"
            type="text"
            label="Qual a sua senha?"
            placeholder="******"
            register={register}
            error={errors.password?.message}
          />
        ) : (
          <Input
            name="password"
            type="password"
            label="Qual a sua senha?"
            placeholder="******"
            register={register}
            error={errors.password?.message}
          />
        )}
        <p className="showPass" onClick={() => setShow(!show)}>
          Mostrar senha
        </p>

        <label>Lembrar login e senha?</label>
        <input type="checkbox" {...register("remember")} />

        <Button type="submit">Login</Button>

        <p>Ainda não tem login ?</p>
        <Button
          type="button"
          onClick={() => {
            navigate("/signup", { replace: true });
          }}
        >
          Cadastrar
        </Button>
      </FormStyled>
    </DivStyled>
  );
};

export default FormLogin;
