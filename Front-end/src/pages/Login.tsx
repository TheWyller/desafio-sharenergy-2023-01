import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormLogin from "../components/FormLogin";
import HeaderStyled from "../components/Header/styled";
import MainStyled from "../components/Main/styled";

const Login = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("@Test_Tecnico:Token");

  let count = 0;

  useEffect(() => {
    if (count === 0) {
      if (token) {
        navigate("/", { replace: true });
        toast.warning("Você já está logado!");
      }
      count++;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, token]);

  return (
    <>
      <HeaderStyled>
        <h1>Logar Usuário</h1>
      </HeaderStyled>
      <MainStyled>
        <FormLogin />
      </MainStyled>
    </>
  );
};

export default Login;
