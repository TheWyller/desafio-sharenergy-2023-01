import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import HeaderStyled from "../components/Header/styled";
import RandomUser from "../components/RandomUser";
import { GetAllContactsContext } from "../contexts/GetAllContactsContext";

const Home = () => {
  const navigate = useNavigate();
  const { setAllContacts } = useContext(GetAllContactsContext);
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
          <Button onClick={() => navigate("/contacts", { replace: true })}>
            Meus Contatos
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
              setAllContacts([]);
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
