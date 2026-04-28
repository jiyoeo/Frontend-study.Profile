import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 40px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;

  background-color: #282a42;
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

  &:hover > div {
    display: flex;
  }
`;

export const PageList = styled.div`
  display: none; //평소엔 안 보이다가 마우스 올렸을 때 보이게, 부모 요소에서 결정.
  position: absolute; //리스트가 펼쳐져도 타 요소에 영향 안 주게

  top: 100%; //리스트 상단이 부모 제일 하단에 붙도록
  left: 50%; //리스트 왼쪽 모서리가 부모 가운데에 붙도록
  transform: translateX(
    -50%
  ); //X축으로 -50% 이동 => 위 코드 세개를 통해 부모요소와 함께 가운데 정렬 가능.

  flex-direction: column;
`;

export const PageItem = styled.a`
  padding: 6px 11px;
  margin: 2px 0 2px 0;
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  background-color: #ffffff80;
  border: 2px solid #d6daf0;
  border-radius: 10px;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: #d6daf0;
  }
`;
