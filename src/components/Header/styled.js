import styled from "styled-components";
import Container from "../Container";

export const SHeader = styled.header`
  background: linear-gradient(to right, #00008b, #00bfff, #00008b);
  box-shadow: 0px 1px 16px #fff;
  color: white;
  width: 100%;
`;

export const HeaderContainer = styled(Container)`
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
  &:hover {
    opacity: 0.8;
  }
`;

export const LogoText = styled.h1`
  font-size: 2.5rem;
  color: white;
`;
