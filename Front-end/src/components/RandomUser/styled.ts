import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

export const RandomPageStyled = styled.main`
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  h2 {
    font-size: 35px;
    text-align: center;
  }
`;

export const ListRandomStyled = styled.div`
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const SectionStyled = styled.section`
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: var(--Green-7);
  min-height: 220px;
  max-width: 310px;
  border-radius: 10px;
  padding-bottom: 20px;
  img {
    border-radius: 50%;
  }
  .text {
    width: 100%;
    padding-left: 20px;
    box-sizing: border-box;
  }
  h3 {
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
  p {
    width: 80%;
    font-weight: bold;
    margin-bottom: 5px;
    font-family: "Titillium Web", sans-serif;
    span {
      width: 95%;
      font-family: "Titillium Web", sans-serif;
      font-style: italic;
      font-weight: 500;
      margin-left: 10px;
    }
  }
`;
