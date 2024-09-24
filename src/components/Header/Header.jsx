import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  AccountButton,
  CenterText,
  
} from "./styled";

function Header() {
  const navigate = useNavigate();

  const goToPersonalAccount = () => {
    navigate("/account");
  };

  return (
    <HeaderContainer>
      {/* Верхний ряд: кнопка аккаунта и поиск */}

      <CenterText>Gazprom FireBug</CenterText>
      <AccountButton onClick={goToPersonalAccount}>
        Личный кабинет
      </AccountButton>
    </HeaderContainer>
  );
}

export default Header;
