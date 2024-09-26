import styled from "styled-components";
import {SContainer} from "../Container/styled";

export const SHeader = styled.header`
  color: white;
  width: 100%;
  background: linear-gradient(to right, #00bfff, #00008b);
`;

export const HeaderContainer = styled(SContainer)`
  display: flex;
  justify-content: space-between;
`;

export const AccountButton = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const LogoText = styled.h1`
  font-size: 2.5rem;
  color: white;
`;
