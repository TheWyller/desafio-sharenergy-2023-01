import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import Contacts from "../components/Clients";
import EditContactForm from "../components/EditClientForm";
import HeaderStyled from "../components/Header/styled";
import { DivStyled } from "../components/Modal/style";

import MyContatsStyled from "../components/MyClients/styled";
import { EditClientContext } from "../contexts/EditClientContext";
import { GetAllClientsContext } from "../contexts/GetAllClientsContext";

const MyClients = () => {
  const navigate = useNavigate();
  const { setAllClients } = useContext(GetAllClientsContext);
  const { isEdit } = useContext(EditClientContext);

  const token = localStorage.getItem("@Test_Tecnico:Token");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate, token]);

  return (
    <>
      <HeaderStyled>
        <h1>Meus Clientes</h1>
        <div>
          <Button onClick={() => navigate("/", { replace: true })}>
            Voltar
          </Button>
          <Button onClick={() => navigate("/newclient", { replace: true })}>
            Criar novo cliente
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
      <main>
        <MyContatsStyled>
          <Contacts />
        </MyContatsStyled>
      </main>
      {isEdit && (
        <DivStyled>
          <section>
            <EditContactForm />
          </section>
        </DivStyled>
      )}
    </>
  );
};

export default MyClients;
