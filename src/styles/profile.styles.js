import styled from "styled-components";

export const Body = styled.div`
  background-color: #ecdff2;
  min-height: 100vh;
  margin-left: 30px;
`;

export const S_box = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgb(0, 0, 0, 0.1);
  margin-top: 30px;
  width: 250px;
  line-height: 0.8;
`;

export const Photo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikeButton = styled.span`
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 6px;

  color: ${({ $isClicked }) => ($isClicked === false ? "#999999" : "#8d5f9f")};
  font-size: 24px;

  span {
    color: #000000;
    font-size: 18px;
  }
`;

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Part = styled.p`
  font-weight: bold;
  color: #0e17c9;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const D_box = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 12px; /*꼭짓점 둥글게*/
  padding: 20px; /*박스 내용과 테두리 사이 거리*/
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100vh;
  line-height: 1.5;
`;

export const Title = styled.h3`
  margin-bottom: 0;
`;
