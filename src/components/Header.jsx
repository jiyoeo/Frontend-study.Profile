import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as H from "../styles/header.styles";

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); //모바일 메뉴 오픈 관리
  const [isPageOpen, setIsPageOpen] = useState(false); //드롭다운 페이지 오픈 관리

  useEffect(() => {
    setIsPageOpen(false);
    setIsMenuOpen(false);
  }, [pathname]); //주소창의 주소가 바뀔 때마다!

  return (
    <H.HeaderContainer>
      <H.HeaderText onClick={() => navigate("/")}>
        About <br /> Jiyeon
      </H.HeaderText>
      <H.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? "✕" : "≡"}
      </H.Hamburger>

      <H.NavWrapper $isMenuOpen={isMenuOpen}>
        <H.NavItem to="/profile" $active={pathname === "/profile"}>
          Profile
        </H.NavItem>
        <H.NavItem to="/interest" $active={pathname === "/interest"}>
          Interest
        </H.NavItem>
        <H.Homepages onClick={() => setIsPageOpen(!isPageOpen)}>
          🔎
          <H.PageList $show={isPageOpen}>
            <H.PageItem href="https://www.instagram.com/jiy.oeo/">
              Instagram
            </H.PageItem>
            <H.PageItem href="https://blog.naver.com/jiyoeo">
              Naver Blog
            </H.PageItem>
            <H.PageItem href="https://velog.io/@jiyoeo/posts">Velog</H.PageItem>
          </H.PageList>
        </H.Homepages>
      </H.NavWrapper>
    </H.HeaderContainer>
  );
}

export default Header;
