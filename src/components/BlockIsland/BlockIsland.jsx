import React from "react";
import { SIslandBlock } from "./styled";


// eslint-disable-next-line react/prop-types
function BlockIsland({ children }) {
  return <SIslandBlock>{children}</SIslandBlock>;
}

export default BlockIsland;
