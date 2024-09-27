import styled from "styled-components";

export const SIslandBlock = styled.div`
	border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) -3px -3px 10px, rgba(79, 79, 79, 0.05) 5px 5px 10px;
	padding: 30px;
`
export const QAIslandBlock = styled.div`
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) -3px -3px 10px, rgba(79, 79, 79, 0.05) 5px 5px 10px;
  padding: 30px;
  background-color: #fff;
  flex: ${(props) => props.flex || '1'};
  box-sizing: border-box;
`;