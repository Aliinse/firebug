import styled from "styled-components";
import { SIslandBlock } from "../BlockIsland/styled";

export const QAIsland = styled(SIslandBlock)`
  display: flex;
  flex-direction: row;
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

export const SHeading = styled.h2`
  text-align: center; // Для центрирования заголовка
 ; // Отступ снизу для разделения с параграфами
`;
export const ParagraphContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SParagraphLeft = styled.p`
  text-align: justify;
  width: 48%;
  margin-right: 2%;
  display: flex;
  align-items: flex-start; // Выровнять содержимое по вертикали
  justify-content: center; // Центрировать содержимое
`;
export const SParagraphRight = styled.p`
  text-align: justify;
  width: 48%;
  display: flex;
  align-items: flex-start; // Выровнять содержимое по вертикали
  justify-content: center; // Центрировать содержимое
`;