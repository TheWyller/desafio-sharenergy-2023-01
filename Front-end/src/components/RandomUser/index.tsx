import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IRandomUser } from "../../interfaces/randomUser.interfaces";

import { apiRandom } from "../../services/api";
import Button from "../Button";

import { ListRandomStyled, SectionStyled, RandomPageStyled } from "./styled";

const RandomUser = () => {
  const [users, setUsers] = useState([] as IRandomUser[]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    apiRandom
      .get(`/?page=${page}&results=10&seed=abc`)
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((err) => toast.error("Algo aconteceu de errado!"));
  }, [page]);

  return (
    <RandomPageStyled>
      <h2>Lista de Usuários Aleátorios</h2>
      <ListRandomStyled>
        {users?.map((elem, i) => (
          <SectionStyled key={i}>
            <h3>Usuário Aleatório {i + 1}</h3>
            <img src={elem.picture.thumbnail} alt="foto do Usuário" />
            <section className="text">
              <p>
                Nome:
                <span>
                  {elem.name.first} {elem.name.last}
                </span>
              </p>
              <p>
                Endereço:
                <span>
                  {elem.location.street.name}, {elem.location.street.number} -{" "}
                  {elem.location.city}
                </span>
              </p>
              <p>
                Email:<span>{elem.email}</span>
              </p>
              <p>
                Telefone:<span>{elem.cell}</span>
              </p>
              <p>
                Idade:
                <span>{elem.dob.age} anos</span>
              </p>
            </section>
          </SectionStyled>
        ))}
      </ListRandomStyled>
      {page > 1 && (
        <Button
          onClick={() => {
            console.log(page);
            setPage(page - 1);
          }}
        >
          Página {page - 1}
        </Button>
      )}
      {page < 5 && (
        <Button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Página {page + 1}
        </Button>
      )}
    </RandomPageStyled>
  );
};

export default RandomUser;
