import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./components/MainPage/index.jsx";
import ToolsPage from "./components/ToolsPage/index.jsx";
import AccountPage from "./components/AccountPage/index.jsx";
import Header from "./components/Header";
import NavigationPage from "./components/NavigationPage";
import { GlobalStyles, TopContainer, SContainer } from "./global.js";
import { AnimatePresence } from "framer-motion";
import ManualTestingPage from "./components/ManualTestingPage/ManualTestingPage.jsx";

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
        <AnimatePresence>
          <Routes location={location}>
            <Route path="/" element={<MainPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/manual-testing" element={<ManualTestingPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </AnimatePresence>
      </SContainer>
    </>
  );
}

export default App;
