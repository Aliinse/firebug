import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import ToolsPage from "./components/ToolsPage.jsx";
import AccountPage from "./components/AccountPage.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Header from "./components/Header";
import NavigationPage from "./components/NavigationPage/NavigationPage.jsx";
import Container from "./components/Container";
import { GlobalContainer, TopContainer } from "./global.js";

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <GlobalContainer>
      <TopContainer>
        <Header />
        <NavigationPage />
      </TopContainer>
        <Container>
          <CSSTransition key={location.key} classNames="page" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<MainPage />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </CSSTransition>
        </Container>
      </GlobalContainer>
    </TransitionGroup>
  );
}

export default App;
