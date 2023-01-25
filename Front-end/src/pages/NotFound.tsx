import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import HeaderStyled from "../components/Header/styled";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <h1>Página não encontrada</h1>
      <Button onClick={() => navigate("/", { replace: true })}>Voltar</Button>
    </HeaderStyled>
  );
};

export default NotFound;
