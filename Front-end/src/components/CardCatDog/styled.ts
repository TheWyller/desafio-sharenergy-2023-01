import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

export const SectionStyled = styled.section`
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: var(--Green-7);
  padding: 10px;
  border-radius: 10px;
  min-width: 250px;
  max-width: 700px;
  img {
    border-radius: 10px;
    width: 100%;
    max-height: 400px;
  }
`;
