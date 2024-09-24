import React from "react";

import styled from "styled-components";

const MainContent = styled.div`
  padding: 300px 20px; // Добавляем отступ сверху, чтобы избежать перекрытия контента хедером
  font-family: "Arial, sans-serif";
  text-align: center; // Центрируем текст
`;

function MainPage() {
  return (
    <div>
      <MainContent>
        <h1>Добро пожаловать на главную страницу</h1>
        <p>Здесь будет основное содержимое вашего сайта.</p>
      </MainContent>
    </div>
  );
}

export default MainPage;
