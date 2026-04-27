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
      <H.Homepages>
        🔎
        <H.PageList>
          <H.PageItem href="https://www.instagram.com/jiy.oeo/">
            Instagram
          </H.PageItem>
          <H.PageItem href="https://blog.naver.com/jiyoeo">
            Naver Blog
          </H.PageItem>
          <H.PageItem href="https://velog.io/@jiyoeo/posts">Velog</H.PageItem>
        </H.PageList>
      </H.Homepages>
    </H.HeaderContainer>
  );
}

export default Header;
