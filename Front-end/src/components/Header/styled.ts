import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";
import logo from "../../assets/logo_color.png";

const HeaderStyled = styled.header`
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  padding-top: 20px;

  @media (min-width: 768px) {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(248, 249, 250, 1)
    );
  }
  .image {
    background-image: url(${logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1000;
    width: 90%;
    height: 15vw;
  }
  h1 {
    margin: 50px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  span {
    font-family: "Titillium Web", sans-serif;
    margin-bottom: 10px;
  }
  .loading {
    font-size: 30px;
    font-weight: bolder;
    color: var(--Green-5);
  }
`;

export default HeaderStyled;
