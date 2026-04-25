import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as H from "../styles/header.styles";

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <H.HeaderContainer>
      <H.HeaderText onClick={() => navigate("/")}>
        About <br /> Jiyeon
      </H.HeaderText>
      <H.NavItem to="/profile" $active={pathname === "/profile"}>
        Profile
      </H.NavItem>
      <H.NavItem to="/interest" $active={pathname === "/interest"}>
        Interest
      </H.NavItem>
      <H.InstaButton href="https://www.instagram.com/jiy.oeo/">
        🔎
      </H.InstaButton>
    </H.HeaderContainer>
  );
}

export default Header;
