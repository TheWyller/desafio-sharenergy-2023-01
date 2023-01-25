import styled from "styled-components";

const ButtonStyled = styled.button`
  margin-top: 20px;
  border: none;
  width: 70vw;
  height: 50px;
  color: var(--Green-0);
  font-weight: bold;
  background-color: var(--Green-6);
  border-radius: 10px;
  transition: all 0.2s ease;
  max-width: 300px;
  margin: 10px;
  font-size: large;
  font-family: "Roboto Condensed", sans-serif;
  &:hover {
    transform: translateY(-10px);
  }
`;

export default ButtonStyled;
