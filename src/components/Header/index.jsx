import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, AccountButton, LogoText, SHeader } from "./styled";

function Header() {
  const navigate = useNavigate();

  const goToPersonalAccount = () => {
    navigate("/account");
  };

  return (
    <SHeader>
      <HeaderContainer>
        <LogoText>Gazprom FireBug</LogoText>
        <AccountButton onClick={goToPersonalAccount}>
          Личный кабинет
        </AccountButton>
      </HeaderContainer>
    </SHeader>
  );
}

export default Header;
