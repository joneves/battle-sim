import React from "react";
import styled from "styled-components";
import Main from "components/Main";
import "App.css";

const StyledHeader = styled.header`
  height: 80px;
  background-color: #73a1ca;
  text-align: center;
  padding-top: 10px;
  font-family: monospace;
  font-size: 42px;
  color: #e0dada;
`;

function App() {
  return (
    <div className="App">
      <StyledHeader className="App-header">Battle Simulator</StyledHeader>
      <Main />
    </div>
  );
}

export default App;
