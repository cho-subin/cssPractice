import React from "react";
import '../src/App.css';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import NavigationBar from "./component/NavigationBar";
import Header from "./component/Header";

/* 전역 스코프에 올림 */
const GlobalStyle = createGlobalStyle`
  ${reset};
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
      <footer>
        <NavigationBar />
      </footer>
    </>
  );
}

export default App;
