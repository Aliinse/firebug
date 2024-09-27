import styled from "styled-components";
import {SIslandBlock} from "../BlockIsland/styled"

export const QAIsland = styled(SIslandBlock)`
 display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1654px;
  width: 100%;
`
export const QAContent = styled.div`
padding: 150px 20px;
font-family: sans-serif;
text-align: center;
`

export const QAStyleContainer = styled.div`
  display: flex;
  gap: 20px; /* Расстояние между блоками */
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;