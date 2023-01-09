import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IRandomUser } from "../../interfaces/randomUser.interfaces";

import { apiRandom } from "../../services/api";
import Button from "../Button";
import { FormStyled } from "../Form/style";
import { Input } from "../Input";

import { ListRandomStyled, SectionStyled, RandomPageStyled } from "./styled";

const RandomUser = () => {
  const [allUsers, setAllUsers] = useState([] as IRandomUser[]);
  const [users, setUsers] = useState([] as IRandomUser[]);

  const [text, setText] = useState("");
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    apiRandom
      .get(`/?page=1&results=50&seed=abc`)
      .then((res) => {
        setAllUsers(res.data.results);
        setUsers(res.data.results.slice(0, 10));
      })
      .catch((err) => toast.error("Algo aconteceu de errado!"));
  }, []);

  const { register, reset, handleSubmit } = useForm({});

  const onSubmitFunction = (data: FieldValues) => {
    setText(data.search);
    setUsers(findUserRandom(data.search, allUsers));
    reset();
  };

  const findUserRandom = (name: string, array: IRandomUser[]) => {
    return array.filter(
      (elem) => elem.name.first.toLowerCase() === name.toLowerCase()
    );
  };

  const callFirstPage = () => {
    setUsers(allUsers.slice(0, 10));
  };

  const pagination = (number: number) => {
    if (number > 0) {
      setUsers(allUsers.slice(count, count + number));
      if (page < 4) setCount(count + number);
    } else {
      if (page < 5) {
        setUsers(allUsers.slice(count + number * 2, count + number));
        setCount(count + number);
      } else {
        setUsers(allUsers.slice(count + number, count));
      }
    }
  };

  return (
    <RandomPageStyled>
      <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          name="search"
          type="text"
          label="Procure um usuário pelo primeiro nome"
          placeholder=" ex: José"
          onClick={() => {
            setText("");
            callFirstPage();
            setCount(10);
          }}
          register={register}
        />
        <Button type="submit">Pesquisar</Button>
      </FormStyled>
      <h2>Lista de Usuários Aleátorios</h2>
      <ListRandomStyled>
        {users.length === 0 ? (
          <h3 className="notFound">Usuário não encontrado</h3>
        ) : (
          users?.map((elem, i) => (
            <SectionStyled key={i}>
              <h3>Usuário Aleatório {i + 1}</h3>
              <img src={elem.picture.thumbnail} alt="foto do Usuário" />
              <section className="text">
                <p>
                  Nome Completo:
                  <span>
                    {elem.name.first} {elem.name.last}
                  </span>
                </p>
                <p>
                  Email:<span>{elem.email}</span>
                </p>
                <p>
                  UserName:
                  <span>{elem.login.username}</span>
                </p>
                <p>
                  Idade:
                  <span>{elem.dob.age} anos</span>
                </p>
              </section>
            </SectionStyled>
          ))
        )}
      </ListRandomStyled>
      {users.length > 0 && page > 1 && text.length === 0 && (
        <Button
          onClick={() => {
            pagination(10 * -1);
            setPage(page - 1);
          }}
        >
          Página {page - 1}
        </Button>
      )}
      {users.length > 0 && page < 5 && text.length === 0 && (
        <Button
          onClick={() => {
            pagination(10);
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
