import React from "react";
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";

/* 전역 스코프에 올림 */
const GlobalStyle = createGlobalStyle`
  ${reset};
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
