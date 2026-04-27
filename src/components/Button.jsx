import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

const Button = ({ onClick, children }) => {
  return <Btn onClick={onClick}> {children} </Btn>;
};

export default Button;

const Btn = styled.button`
  font-family: "JoseonGulim";
  min-width: 100px;
  width: auto;
  padding: 16px 44px;
  height: 60px;
  border: none;
  border-radius: 12px;
  margin-bottom: 30px;

  background-color: #ffffff;
  box-shadow: 0 4px 10px rgb(0, 0, 0, 0.1);

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
`;
