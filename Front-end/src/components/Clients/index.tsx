import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { EditClientContext } from "../../contexts/EditClientContext";
import { GetAllClientsContext } from "../../contexts/GetAllClientsContext";
import api from "../../services/api";
import Button from "../Button";

import { SectionStyled } from "./styled";

const Clients = () => {
  const { allClients, getAll } = useContext(GetAllClientsContext);
  const { setIdClientData, isEdit, setIsEdit } = useContext(EditClientContext);

  const token = localStorage.getItem("@Test_Tecnico:Token");

  useEffect(() => {
    getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allClients, isEdit]);

  const deleteClient = (id: string) => {
    api
      .delete(`/clients/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Contato deletado com sucesso");
      })
      .catch((err) => {
        toast.error("Algo aconteceu de errado!");
      });
  };

  return (
    <>
      {allClients.length === 0 ? (
        <h3>Nenhum Cliente</h3>
      ) : (
        allClients.map((elem, i) => (
          <SectionStyled key={i}>
            <h3>Cliente {i + 1}</h3>
            <section className="text">
              <p>
                Nome:<span>{elem.name}</span>
              </p>
              <p>
                Endereço:<span>{elem.address}</span>
              </p>
              <p>
                Email:<span>{elem.email}</span>
              </p>
              <p>
                Telefone:<span>{elem.phone}</span>
              </p>
              <p>
                CPF:
                <span>
                  {elem.cpf.slice(0, 3)}.***.***-{elem.cpf.slice(-2)}
                </span>
              </p>
            </section>
            <div>
              <Button
                onClick={() => {
                  deleteClient(elem._id);
                }}
              >
                Remove
              </Button>
              <Button
                onClick={() => {
                  setIsEdit(true);
                  setIdClientData(elem._id);
                }}
              >
                Editar
              </Button>
            </div>
          </SectionStyled>
        ))
      )}
    </>
  );
};

export default Clients;
