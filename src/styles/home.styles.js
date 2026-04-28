import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  img {
    width: 40%;
    max-width: 420px;
    display: block;
    margin: 20px 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  p {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
`;

export const Body = styled.div`
  height: 100vh;
  display: flexbox;
  justify-content: center;
  align-items: center;
`;
