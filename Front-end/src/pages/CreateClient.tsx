import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CreateClientForm from "../components/CreateClientForm";
import HeaderStyled from "../components/Header/styled";
import MainStyled from "../components/Main/styled";

const CreateClient = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderStyled>
        <h1>Meus Clientes</h1>
        <Button onClick={() => navigate("/clients", { replace: true })}>
          Voltar
        </Button>
      </HeaderStyled>
      <MainStyled>
        <CreateClientForm />
      </MainStyled>
    </>
  );
};

export default CreateClient;
