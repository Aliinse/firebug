import { styled, createGlobalStyle } from "styled-components";
import Container from "./components/Container";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body {
		height: 100%
	}

	body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    min-height: 100vh;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background: linear-gradient(to right, #00bfff, #00008b);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	}

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  
  a:hover {
    color: #535bf2;
  }

	h1 {
		font-size: 3.2em;
    line-height: 1.1;
	}
`;

export const SContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh
  padding: 10px 20px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;
