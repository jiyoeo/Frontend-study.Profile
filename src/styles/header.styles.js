import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 90.5%;
  padding: 0 40px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;

  background-color: #282a42;
`;

export const HeaderText = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #d6daf0;

  &:hover {
    cursor: pointer;
    color: white;
    text-decoration: underline;
  }
`;

export const NavItem = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => (props.$active ? "#ffffff" : "#d6daf0")};
  text-decoration: ${(props) => (props.$active ? "underline" : "none")};

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const InstaButton = styled.a`
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;
