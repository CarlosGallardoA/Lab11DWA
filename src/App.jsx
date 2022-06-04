import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import "./App.css";
import { Button } from "@mui/material";
import Router from "./router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
