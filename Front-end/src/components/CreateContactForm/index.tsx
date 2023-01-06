import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaInfos } from "./schema";
import { DivStyled, FormStyled } from "../Form/style";
import { Input } from "../Input";
import Button from "../Button";
import { useContext } from "react";
import { CreateContactContext } from "../../contexts/CreateContactContext";

const CreateContactForm = () => {
  const { setCreateContactData } = useContext(CreateContactContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaInfos) });

  const onSubmitFunction = (data: FieldValues) => {
    setCreateContactData(data);
  };

  return (
    <DivStyled>
      <h1>Criar Contato</h1>
      <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          name="name"
          type="text"
          label="Informe seu nome"
          placeholder="Nome"
          register={register}
          error={errors.name?.message}
        />
        <Input
          name="email"
          type="email"
          label="Informe o email"
          placeholder="exemplo@email.com"
          register={register}
          error={errors.email?.message}
        />
        <Input
          name="phone"
          type="text"
          label="Informe o telefone"
          placeholder="41912345678"
          register={register}
          error={errors.phone?.message}
        />
        <Input
          name="address"
          type="text"
          label="Informe seu endereço"
          placeholder="rua exemplo, 25"
          register={register}
          error={errors.address?.message}
        />
        <Input
          name="cpf"
          type="text"
          label="Informe seu CPF"
          placeholder="000.000.000-00"
          register={register}
          error={errors.cpf?.message}
        />
        <Button type="submit">Criar contato</Button>
      </FormStyled>
    </DivStyled>
  );
};

export default CreateContactForm;
