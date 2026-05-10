import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Interest from "./pages/Interest";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/interest" element={<Interest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
