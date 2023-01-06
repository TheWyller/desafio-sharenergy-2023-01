import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { EditContactContext } from "../../contexts/EditContactContext";
import { GetAllContactsContext } from "../../contexts/GetAllContactsContext";
import api from "../../services/api";
import Button from "../Button";

import { SectionStyled } from "./styled";

const Contacts = () => {
  const { allContacts, getAll } = useContext(GetAllContactsContext);
  const { setIdContactData, isEdit, setIsEdit } =
    useContext(EditContactContext);

  const token = localStorage.getItem("@Test_Tecnico:Token");

  useEffect(() => {
    getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allContacts, isEdit]);

  const deleteContact = (id: string) => {
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
      {allContacts.length === 0 ? (
        <h3>Nenhum Contato</h3>
      ) : (
        allContacts.map((elem, i) => (
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
                  deleteContact(elem._id);
                }}
              >
                Remove
              </Button>
              <Button
                onClick={() => {
                  setIsEdit(true);
                  setIdContactData(elem._id);
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

export default Contacts;
