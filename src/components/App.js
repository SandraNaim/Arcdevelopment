import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import theme from  "./ui/Theme.js";
import Header from "./ui/Header";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      Hello!
    </MuiThemeProvider>
  );
}

export default App;
