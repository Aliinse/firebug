import React, { useState } from "react";
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
  const [defaultIdPage, setDefaultIdPage] = useState(1);

  const initialObjectPaths = [
    {
      id: 0,
      text: "На страницу Tools",
      link: "/tools",
    },
    {
      id: 1,
      text: "На главную",
      link: "/",
    },
    {
      id: 2,
      text: "Ручное тестирование",
      link: "/manual-testing",
    },
  ];

  const getCurrentPagePath = () => {
    switch (defaultIdPage) {
      case 0:
        return [2, 1];
      case 1:
        return [0, 2];
      case 2:
        return [1, 0];
      default:
        return [0, 2];
    }
  };

  const swipeLeft = () => {
    const currentId = defaultIdPage - 1 >= 0 ? defaultIdPage - 1 : 2;

    setDefaultIdPage(currentId);
    navigate(initialObjectPaths[getCurrentPagePath()[0]].link);
  };

  const swipeRight = () => {
    const currentId = defaultIdPage + 1 >= 2 ? defaultIdPage + 1 : 0;

    setDefaultIdPage(currentId);
    navigate(initialObjectPaths[getCurrentPagePath()[1]].link);
  };

  return (
    <Container>
      <NavigationButtons>
        <NavButtonLeft onClick={swipeLeft}>
          <ArrowLeftImage />
          <SSpan>{initialObjectPaths[getCurrentPagePath()[0]].text}</SSpan>
        </NavButtonLeft>
        <NavButtonRight onClick={swipeRight}>
          <SSpan>{initialObjectPaths[getCurrentPagePath()[1]].text}</SSpan>
          <ArrowRightImage />
        </NavButtonRight>
      </NavigationButtons>
    </Container>
  );
}

export default NavigationPage;
