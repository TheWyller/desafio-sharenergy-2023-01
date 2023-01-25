import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import HeaderStyled from "../components/Header/styled";
import RandomUser from "../components/RandomUser";
import { GetAllClientsContext } from "../contexts/GetAllClientsContext";

const Home = () => {
  const navigate = useNavigate();
  const { setAllClients } = useContext(GetAllClientsContext);
  const token = localStorage.getItem("@Test_Tecnico:Token");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate, token]);

  return (
    <>
      <HeaderStyled>
        <div className="image"></div>
        <h1>Teste Sharenergy</h1>
        <div>
          <Button onClick={() => navigate("/clients", { replace: true })}>
            Meus Clientes
          </Button>
          <Button onClick={() => navigate("/httpcat", { replace: true })}>
            HTTP Cat
          </Button>
          <Button onClick={() => navigate("/randomdog", { replace: true })}>
            Random Dog
          </Button>
          <Button
            onClick={() => {
              localStorage.removeItem("@Test_Tecnico:Token");
              setAllClients([]);
              toast.success("Você saiu com sucesso!");
              navigate("/", { replace: true });
            }}
          >
            Sair
          </Button>
        </div>
      </HeaderStyled>
      <RandomUser />
    </>
  );
};

export default Home;
