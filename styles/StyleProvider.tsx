import React, { PropsWithChildren } from "react";
import { ThemeProvider, Global } from "@emotion/react";
import { theme } from "./theme";
import Header from "../components/common/header/Header";
import global from "./global";

const StyleProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
