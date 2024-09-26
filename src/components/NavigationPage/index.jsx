import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationButtons, NavButton } from "./styled";


function NavigationPage() {
  const navigate = useNavigate();

  const goToPersonalAccount = () => {
    navigate("/account");
  };

  const swipeLeft = () => {
    navigate("/tools");
  };

  const swipeRight = () => {
    navigate(-1);
  };

  return (
    <NavigationButtons>
      <NavButton onClick={swipeLeft}>На страницу Tools</NavButton>
      <NavButton onClick={swipeRight}>Ручное тестирование</NavButton>
    </NavigationButtons>
  );
}

export default NavigationPage;
