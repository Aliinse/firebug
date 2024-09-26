import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NavigationButtons,
  NavButtonRight,
  NavButtonLeft,
  SSpan,
} from "./styled";
import ArrowLeftImage from "../../assets/arrow-left.svg?react";
import ArrowRightImage from "../../assets/arrow-right.svg?react";

import Container from "../Container";

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
    <Container>
      <NavigationButtons>
        <NavButtonLeft onClick={swipeLeft}>
          <ArrowLeftImage />
          <SSpan> На страницу Tools </SSpan>
        </NavButtonLeft>
        <NavButtonRight onClick={swipeRight}>
          <SSpan>Ручное тестирование</SSpan>
          <ArrowRightImage />
        </NavButtonRight>
      </NavigationButtons>
    </Container>
  );
}

export default NavigationPage;
