import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background: linear-gradient(to right, #00bfff, #00008b);
  color: white;
  width: 100%;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: center; // Центрируем кнопки на втором уровне
  width: 100%;
  margin-top: 10px;
`;

export const AccountButton = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  font-size: 18px; // Увеличим размер текста
  cursor: pointer;
  padding: 10px 20px; // Увеличим отступы для увеличения размера кнопки
  border-radius: 5px; // Сохраняем форму кнопки
  &:hover {
    opacity: 0.8;
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; // Пространство между кнопками
`;

export const NavButton = styled.button`
  background: none;

  color: white;
  padding: 10px 400px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
export const CenterTextContainer = styled.div`
  flex: 1; // Распределяем пространство между кнопками
  display: flex;
  justify-content: center; // Центрируем текст по горизонтали
  align-items: center; // Центрируем текст по вертикали
`;

export const CenterText = styled.h1`
  font-size: 2.5rem; // Сделаем текст большим
  color: white;
  margin: 0; // Убираем отступы
`;
export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 5px 30px 5px 10px;
  border: none;
  border-radius: 5px;
`;
