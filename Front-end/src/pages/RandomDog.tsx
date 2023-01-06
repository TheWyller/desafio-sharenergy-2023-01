import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import { SectionStyled } from "../components/CardCatDog/styled";
import HeaderStyled from "../components/Header/styled";
import { apiRandomDog } from "../services/api";

const RandomDog = () => {
  const navigate = useNavigate();

  const [dog, setDog] = useState("");
  const [loading, setLoading] = useState(true);

  let count = 0;

  const getDog = () => {
    apiRandomDog
      .get("")
      .then((res) => {
        setDog(res.data.url);
        setLoading(false);
      })
      .catch((err) => toast.error("Algo aconteceu de errado!"));
  };

  useEffect(() => {
    if (count === 0) {
      getDog();
      count++;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HeaderStyled>
      <h1>O Cachorro aleatório da vez é:</h1>
      <Button
        onClick={() => {
          setLoading(true);
          getDog();
        }}
      >
        Atualizar
      </Button>

      <span>* Existe fotos corrompidas na api ultilizada</span>

      {loading ? (
        <span className="loading">Loading...</span>
      ) : (
        <SectionStyled>
          <img src={dog} alt="Foto de um cachorro aleatório" />
        </SectionStyled>
      )}
      <Button onClick={() => navigate("/", { replace: true })}>Voltar</Button>
    </HeaderStyled>
  );
};

export default RandomDog;
