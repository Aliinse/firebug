import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  NavigationButtons,
  NavButtonRight,
  NavButtonLeft,
  SSpan,
} from "./styled";
import ArrowLeftImage from "../../assets/arrow-left.svg?react";
import ArrowRightImage from "../../assets/arrow-right.svg?react";

import Container from "../Container";

/*function NavigationPage() {
  const navigate = useNavigate();
  const [defaultIdPage, setDefaultIdPage] = useState(1);
  
  /*пробую изменить const getCurrentPagePath = () => {
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
*/

function NavigationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [defaultIdPage, setDefaultIdPage] = useState(1);
//То есть тут мы с помощью хука useLocation получаем текущий урл и присваиваем ему константу, а useNavigate хук для навигации по страницам

  const initialObjectPaths = [
    {
      id: 0,
      text: "На страницу Tools",
      link: "/tools",
      prevId: 2,
      // Вот эти две - идентификаторы страницы, на которую нужно перейти при нажатии на кнопку "Влево" и тд.
      nextId: 1,
    },
    {
      id: 1,
      text: "На главную",
      link: "/",
      prevId: 0,
      nextId: 2,
    },
    {
      id: 2,
      text: "Ручное тестирование",
      link: "/manual-testing",
      prevId: 1,
      nextId: 0,
    },
  ];
//useEffect обновляет состояние , цель -синхронизировать состояние defaultIdPage с текущим маршрутом.
  useEffect(() => {
    const currentObject = initialObjectPaths.find(
      (obj) => obj.link === location.pathname //то есть вот мы выполняем эффект каждый раз, как меняется  location.pathname.
    );// initialObjectPaths - это массив со значениями text prevId и тд.  Если location.pathname равен "/tools", то find вернёт объект с link: "/tools".
    if (currentObject) {
      setDefaultIdPage(currentObject.id);//тут мы обновляем состояние
    } else {
      setDefaultIdPage(1); // Устанавливаем на главную страницу по умолчанию, это вместо того дефолта что был в case
    }
  }, [location.pathname]);

  const swipeLeft = () => {
    const newId = initialObjectPaths[defaultIdPage].prevId;
    setDefaultIdPage(newId);
    navigate(initialObjectPaths[newId].link);
  };

  const swipeRight = () => {
    const newId = initialObjectPaths[defaultIdPage].nextId;
    setDefaultIdPage(newId);
    navigate(initialObjectPaths[newId].link);
  };

  return (
    <Container>
      <NavigationButtons>
        <NavButtonLeft onClick={swipeLeft}>
          <ArrowLeftImage />
          <SSpan>
            {initialObjectPaths[initialObjectPaths[defaultIdPage].prevId].text}
          </SSpan>
        </NavButtonLeft>
        <NavButtonRight onClick={swipeRight}>
          <SSpan>
            {initialObjectPaths[initialObjectPaths[defaultIdPage].nextId].text}
          </SSpan>
          <ArrowRightImage />
        </NavButtonRight>
      </NavigationButtons>
    </Container>
  );
}
export default NavigationPage;
