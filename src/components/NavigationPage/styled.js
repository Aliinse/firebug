import styled from "styled-components";

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const SSpan = styled.span`
  opacity: 0;
  transition: 0.4s ease-in-out;
`;

export const CommonButtonStyle = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  background: none;
  appearance: none;
  border: none;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:hover > span {
    opacity: 1;
  }
`;

export const NavButtonRight = styled(CommonButtonStyle)`
  &:hover {
    transform: translateX(30%) scale(2);
  }
`;

export const NavButtonLeft = styled(CommonButtonStyle)`
  &:hover {
    transform: translateX(-30%) scale(2);
  }
`;
