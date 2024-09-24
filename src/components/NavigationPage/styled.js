import styled from "styled-components";

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px; // Пространство между кнопками
`;

export const NavButton = styled.button`
  background: none;

  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
