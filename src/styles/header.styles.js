import styled from "styled-components";
import { Link } from "react-router-dom";

const fluidGap = "clamp(5px, 15vw, 500px)";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 5vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${fluidGap};
  background-color: #282a42;

  @media (max-width: 480px) {
    justify-content: space-between;
    gap: 0;
  }
`;

export const HeaderText = styled.h2`
  font-size: 30px;
  color: #bac2f1;
  font-family: "OkMallangW", sans-serif;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const NavItem = styled(Link)`
  font-family: "OkMallangW", sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => (props.$active ? "#ffffff" : "#bac2f1")};

  &:hover {
    color: white;
  }
`;

export const Homepages = styled.div`
  position: relative; //position: absolute 부모요소
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 25px;
`;

export const PageList = styled.div`
  display: ${(props) =>
    props.$show
      ? "flex"
      : "none"}; //평소엔 안 보이다가 마우스 올렸을 때 보이게, 부모 요소에서 결정.
  position: absolute; //리스트가 펼쳐져도 타 요소에 영향 안 주게

  top: calc(100% + 8px); //리스트 상단이 부모 제일 하단에 붙도록
  left: 50%; //리스트 왼쪽 모서리가 부모 가운데에 붙도록
  transform: translateX(
    -50%
  ); //X축으로 -50% 이동 => 위 코드 세개를 통해 부모요소와 함께 가운데 정렬 가능.

  @media (max-width: 480px) {
    top: 0;
    left: calc(250% + 10px);
  }
  flex-direction: column;
`;

export const PageItem = styled.a`
  padding: 6px 11px;
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  background-color: #ffffff;
  border: 2px solid #d6daf0;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: #d6daf0;
  }
`;

export const Hamburger = styled.div`
  display: none; // 기본적으로는 안 보임
  font-size: 30px;
  color: #bac2f1;
  z-index: 101;

  @media (max-width: 480px) {
    display: block;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: ${fluidGap};

  @media (max-width: 480px) {
    margin-left: 0;
    display: ${(props) => (props.$isMenuOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background-color: #282a42;
    padding: 20px 0;
    gap: 30px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
