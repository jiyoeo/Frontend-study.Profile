import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

function Interest() {
  const navigate = useNavigate();
  return (
    <Container>
      <VideoGrid>
        <iframe
          src="https://www.youtube.com/embed/y5fnqTe7gnM"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/SGjGQlNdUb4"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed//OjqTAX-gaSo"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed//xoInosq3JBE"
          frameBorder="0"
          allowFullScreen
        />
      </VideoGrid>
      <Button onClick={() => navigate("/")}> 홈으로 돌아가기 </Button>
    </Container>
  );
}

export default Interest;

const Container = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  @media (max-width: 480px) {
    padding: 20px 0;
    justify-content: flex-start;
    margin-bottom: 30px;
  }
`;

const VideoGrid = styled.div`
  width: 90%;
  max-width: 940px;
  margin-bottom: 30px;

  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 */
  gap: 24px;

  iframe {
    width: 100%;
    aspect-ratio: 16 / 10;
    border: none;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
