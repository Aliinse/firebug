import React from "react";
import { SContainer } from "./styled";

// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return <SContainer>{children}</SContainer>;
}

export default Container;
