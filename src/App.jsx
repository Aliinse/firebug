import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./components/MainPage/index.jsx";
import ToolsPage from "./components/ToolsPage/index.jsx";
import AccountPage from "./components/AccountPage/index.jsx";
import Header from "./components/Header";
import NavigationPage from "./components/NavigationPage/index.jsx";
import Container from "./components/Container";
import { GlobalStyles, TopContainer, SContainer } from "./global.js";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyles />
      <TopContainer>
        <Header />
        <NavigationPage />
      </TopContainer>
      <SContainer>
        <Routes location={location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </SContainer>
    </>
  );
}

export default App;
