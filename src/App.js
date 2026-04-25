import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Interest from "./pages/Interest";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Body>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/interest" element={<Interest />} />
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default App;

const Body = styled.div`
  background-color: #ecdff2;
  min-height: 100vh;
  box-sizing: border-box;
`;
