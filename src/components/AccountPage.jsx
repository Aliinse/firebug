import React from "react";

import styled from "styled-components";

const AccountContainer = styled.div`
  padding: 20px;
  font-family: "Arial, sans-serif";
`;

function AccountPage() {
  return (
    <div>
      <AccountContainer>
        <h1>Личный кабинет</h1>
        <p>Информация о пользователе будет отображаться здесь.</p>
        {/* Реализуйте функционал личного кабинета по мере необходимости */}
      </AccountContainer>
    </div>
  );
}

export default AccountPage;
