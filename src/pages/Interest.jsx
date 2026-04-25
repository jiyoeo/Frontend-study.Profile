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
          src="https://www.youtube.com/embed/rJPmwazTANc"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/btyDXMhhxZo"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/ATthSPLCVb4"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/BMflM6t2XcU"
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
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;
