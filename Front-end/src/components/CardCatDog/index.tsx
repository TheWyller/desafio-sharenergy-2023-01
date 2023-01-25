import { IHTTPCat } from "../../interfaces/httpCat.interfaces";
import { SectionStyled } from "./styled";

const CatCard: React.FC<IHTTPCat> = ({ code }) => {
  return (
    <>
      <SectionStyled>
        <img
          src={`https://http.cat/${code}.jpg`}
          alt={`Foto de um gato que se refere ao codigo HTTP: ${code}`}
        />
      </SectionStyled>
    </>
  );
};

export default CatCard;
