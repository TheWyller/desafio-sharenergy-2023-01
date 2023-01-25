import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CatCard from "../components/CardCatDog";
import { FormStyled } from "../components/Form/style";
import HeaderStyled from "../components/Header/styled";
import { Input } from "../components/Input";

const HTTPCat = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(-1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmitFunction = (data: FieldValues) => {
    setCode(data.code);
  };

  return (
    <HeaderStyled>
      <h1>HTTP Cat</h1>
      <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          name="code"
          type="number"
          label="Digite um Código de Resposta HTTP"
          placeholder="ex: 400"
          register={register}
          error={errors.code?.message}
        />
        <Button type="submit">Pesquisar</Button>
      </FormStyled>

      {code > -1 && <CatCard code={code} />}

      <Button onClick={() => navigate("/", { replace: true })}>Voltar</Button>
    </HeaderStyled>
  );
};

export default HTTPCat;
