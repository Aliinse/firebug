import styled from "styled-components";
import { SIslandBlock } from "../BlockIsland/styled";

export const QAIsland = styled(SIslandBlock)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1654px;
  width: 100%;
`;
export const QAContent = styled.div`
  padding: 150px 20px;
  font-family: sans-serif;
  text-align: center;
`;

export const QAStyleContainer = styled.div`
  width: 100%;
`;

export const SParagraph = styled.p`
  text-align: justify;
`;
